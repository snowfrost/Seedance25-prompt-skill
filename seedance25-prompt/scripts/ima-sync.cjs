#!/usr/bin/env node
'use strict';

/**
 * ima 知识库上传（备用 API 通道）— 每日电影精读同步用
 *
 * 用途：把蒸馏归档 md 上传到 ima 知识库「影视」→「每日电影精读」文件夹。
 * 背景：ima-mcp 工具长期不可用（ToolSearch 检索不到），统一走 ima-skill 备用 API。
 *
 * 用法：
 *   node ima-sync.cjs --file <md 绝对路径> --title <知识库内标题> [--folder <folder_id>]
 *
 * 默认目标：
 *   knowledge_base_id = Lk9MIH6zn9v9kF0NMKfO39i_7qD8Wjm-LFWRi8cgK9U=   （★注意：不是任务说明里的数字 ID，那个会报 220004）
 *   folder_id         = folder_7497818075835637
 *   凭证              = ~/.config/ima/client_id + ~/.config/ima/api_key
 *
 * 链路：preflight-check.cjs → check_repeated_names → create_media → cos-upload.cjs → add_knowledge
 *
 * ⚠️ 历史踩坑（已在本脚本内规避）：
 *   1. ima API 响应统一为 {code, msg, data} 包装 → 必须先判 code===0 再取 data
 *   2. create_media 的 media_id（90 字符）与 cos_key（73 字符）很长 → 必须从 JSON 原样透传，禁止手工抄写/截断
 *   3. cos-upload 与 add_knowledge 的 cos_key 必须来自同一来源（create_media 响应）
 *   4. Node spawnSync 判子进程退出码用 `status`，**不是 `statusCode`**（后者恒 undefined，!==0 恒真）
 *   5. 中间产物不要放 /tmp（Git Bash 的 /tmp ≠ Python 的 C:\tmp），一律用完整 Windows 绝对路径
 *
 * 退出码：0=成功或同名跳过；1=失败
 */

const fs = require('fs');
const { spawnSync } = require('child_process');

const HOME = process.env.USERPROFILE ? process.env.USERPROFILE.replace(/\\/g, '/') : 'C:/Users/snowf';
const SKILL = HOME + '/.workbuddy/skills/ima-skill/knowledge-base/scripts';
const DEFAULT_KB = 'Lk9MIH6zn9v9kF0NMKfO39i_7qD8Wjm-LFWRi8cgK9U=';
const DEFAULT_FOLDER = 'folder_7497818075835637';

function parseArgs(argv) {
  const out = {};
  for (let i = 2; i < argv.length; i += 2) {
    if (!argv[i].startsWith('--')) continue;
    out[argv[i].replace(/^--/, '')] = argv[i + 1];
  }
  return out;
}

const args = parseArgs(process.argv);
const FILE = args.file;
const TITLE = args.title;
const KB = args.kb || DEFAULT_KB;
const FOLDER = args.folder || DEFAULT_FOLDER;

if (!FILE || !TITLE) {
  console.error('Usage: node ima-sync.cjs --file <path> --title <title> [--folder <folder_id>] [--kb <kb_id>]');
  process.exit(1);
}

const clientId = fs.readFileSync(HOME + '/.config/ima/client_id', 'utf8').trim();
const apiKey = fs.readFileSync(HOME + '/.config/ima/api_key', 'utf8').trim();

async function api(ep, body) {
  const r = await fetch('https://ima.qq.com/openapi/wiki/v1/' + ep, {
    method: 'POST',
    headers: {
      'ima-openapi-clientid': clientId,
      'ima-openapi-apikey': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return r.json();
}

(async () => {
  // 1. preflight（校验类型/大小，并抽出 create_media 所需元数据）
  const pf = spawnSync('node', [SKILL + '/preflight-check.cjs', '--file', FILE], { encoding: 'utf8' });
  if (pf.status !== 0) { console.error('[preflight] 脚本执行失败', pf.stderr); process.exit(1); }
  let info;
  try { info = JSON.parse(pf.stdout); } catch (e) { console.error('[preflight] 输出非 JSON', pf.stdout); process.exit(1); }
  console.log('[preflight]', JSON.stringify(info));
  if (!info.pass) { console.error('PREFLIGHT FAIL:', info.reason || info); process.exit(1); }

  // 2. 同名检查
  const chk = await api('check_repeated_names', {
    knowledge_base_id: KB,
    folder_id: FOLDER,
    params: [{ name: info.file_name, media_type: info.media_type }],
  });
  if (chk.code !== 0) { console.error('CHECK FAIL:', JSON.stringify(chk)); process.exit(1); }
  const dup = ((chk.data && chk.data.results) || []).some((r) => r.is_repeated === true);
  console.log('[is_repeated]', dup);
  if (dup) { console.log('SKIP: 同名文件已存在，跳过上传'); process.exit(0); }

  // 3. create_media 取 COS 凭证
  const cm = await api('create_media', {
    file_name: info.file_name,
    file_size: info.file_size,
    content_type: info.content_type,
    knowledge_base_id: KB,
    file_ext: info.file_ext,
  });
  if (cm.code !== 0) { console.error('CREATE_MEDIA FAIL:', JSON.stringify(cm)); process.exit(1); }
  const mediaId = cm.data.media_id;
  const cred = cm.data.cos_credential;

  // 4. 传 COS
  const up = spawnSync('node', [
    SKILL + '/cos-upload.cjs',
    '--file', info.file_path,
    '--secret-id', cred.secret_id,
    '--secret-key', cred.secret_key,
    '--token', cred.token,
    '--bucket', cred.bucket_name,
    '--region', cred.region,
    '--cos-key', cred.cos_key,
    '--content-type', info.content_type,
    '--start-time', String(cred.start_time),
    '--expired-time', String(cred.expired_time),
  ], { encoding: 'utf8' });
  if (up.status !== 0) { console.error('COS FAIL:', up.stdout, up.stderr); process.exit(1); }

  // 5. 关联进知识库（传 folder_id 落到目标文件夹）
  const ak = await api('add_knowledge', {
    media_type: info.media_type,
    media_id: mediaId,
    title: TITLE,
    knowledge_base_id: KB,
    folder_id: FOLDER,
    file_info: {
      cos_key: cred.cos_key,
      file_size: info.file_size,
      last_modify_time: Math.floor(Date.now() / 1000),
      file_name: info.file_name,
    },
  });
  if (ak.code !== 0) { console.error('ADD FAIL:', JSON.stringify(ak)); process.exit(1); }
  console.log('SUCCESS media_id=' + ak.data.media_id);
})();
