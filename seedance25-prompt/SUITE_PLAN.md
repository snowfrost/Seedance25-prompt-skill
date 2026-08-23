# Seedance Prompt 套件规划（SUITE PLAN v0.1）

> 愿景（王老师 2026-08-23）：把 seedance25-prompt 从"单个提示词 skill"发展成**套件**——
> 由剧本 skill → 编剧 skill → 分镜 skill → 设定（资产）skill → 拍摄 skill 等子 skill 组成，
> 由一个套件级入口统一引导。**这是长期目标，等各部分成熟后再实施**，当前阶段先沉淀素材与规划。

---

## 一、套件目标架构（未来形态）

```
seedance-prompt-suite/                    ← 套件级路由（未来）
├── SKILL.md                              # 套件入口：需求→路由到子skill
├── 01-screenwriting/  编剧 skill         # 剧本创作（钩子/Squeeze/去AI味）
├── 02-storyboard/     分镜 skill         # 剧本→分镜表（八列/九列）
├── 03-assets/         设定(资产) skill    # 角色/场景/道具一致性资产库
├── 04-shooting/       拍摄 skill         # 镜头语言/运镜/打斗/表演
├── 05-video-prompt/   视频提示词 skill    # = 现在的 seedance25-prompt
└── references/        共享知识库
```

**当前进度**：只有 `05-video-prompt`（seedance25-prompt）成熟；01-04 处于"素材已存档、方法论已验证"阶段。

---

## 二、素材库现状（已解压存档，待蒸馏为独立 skill）

| 素材 | 位置 | 内容 | 归属子skill |
|------|------|------|------------|
| workfish 钩子开幕剧本生成器 | `skill_packs/workfish/workfish/1.钩子开幕3分钟剧本生成器【公开版】/` | Squeeze 挤压逻辑、8 步工作流、100 个开幕模板、去AI味、钩子三型 | 01-screenwriting |
| workfish 剧本转视频（文戏版） | `skill_packs/workfish/workfish/2.剧本转视频提示词（文戏长剧情版）【公开版】/` | 30秒单元划分、声线档案、固定交付合同、跨段复位 | 05-video-prompt（已整合 §9.4） |
| workfish 剧本转分镜模板 | `skill_packs/workfish/workfish/模版/script-to-storyboard-video/` | 八列镜头表、10-15秒切片、六/九宫格故事板 | 02-storyboard |
| workfish 100种情绪表达 | `skill_packs/workfish/workfish/100种情绪表达_分类版.md` | 情绪表达分类 | 04-shooting（补充09） |
| workfish 打戏/文戏模板 | `skill_packs/workfish/workfish/打戏单图版*.txt` 等 | 30S 打戏/文戏提示词模板 | 05-video-prompt |
| workfish Gaven 图像提示词导演 | `skill_packs/workfish/gaven-direct-image-prompts/` | 导演风格/摄影风格/胶片风格提示词 | 03-assets（生图类） |
| 山音超级导演大师 | `skill_packs/shanyin/dir_*.md` | 导演定调→节奏→微调→分镜→xlsx 五步工作流、六维风格库 | 04-shooting / 02-storyboard |
| 山音超级编剧大师 | `skill_packs/shanyin/screenwriting_extracted/` | 全格式编剧八步流程、格式路由（超短片/短片/长片/剧集） | 01-screenwriting |

---

## 三、已整合进 seedance25-prompt 的精华（本次）

| 整合位置 | 内容 | 来源 |
|---------|------|------|
| 04-长视频 §9.4 | 文戏 30 秒单元划分法：关系变化切分/分流叙述信息/切镜触发条件/声线档案/固定交付合同/跨段复位 | workfish 文戏版 |
| 01-核心公式 §15.5 | 开幕钩子引擎：Squeeze 挤压公式/时间生死线/挤压设计卡/钩子三型 | workfish 钩子版 |
| 01-核心公式 §15.6 | 去 AI 味台词五技法 + 写作红线 + 各题材台词风格 | workfish + 山音编剧 |

> 遵循蒸馏六步：这三块与 seedance25-prompt 现有内容（时间戳控制、抢话打断、表演）**直接互补**，按生态判定归入"并入已有小节"，未新开章节。

---

## 四、子 skill 成熟度评估（何时拆）

| 子skill | 现状 | 拆出条件 |
|---------|------|---------|
| 01-screenwriting 编剧 | 素材完备（workfish钩子 + 山音编剧），方法论已验证 | 用户明确需要"写剧本"工作流，且与视频提示词解耦 |
| 02-storyboard 分镜 | 素材完备（workfish分镜模板 + 山音导演九列表） | 用户明确需要"分镜表/xlsx/故事板"输出 |
| 03-assets 设定资产 | 部分素材（Gaven图像导演），角色一致性知识在03-真人人物 | 与真人人物/角色一致性需求分离时 |
| 04-shooting 拍摄 | 已深度整合进 seedance25-prompt（02/09/10文件） | 除非体量失控，否则保持内嵌 |
| 05-video-prompt | **成熟，当前主线** | 已存在（seedance25-prompt） |

**拆分原则**（王老师要求）：**能内嵌不拆分**；只有某类需求出现频率高、且与现有内容互相干扰时才拆。拆出时按 longform-skill-distiller 阶段 6 做生态接入（owner 判定 + 交接 + 路由测试）。

---

## 五、素材使用纪律

1. workfish 素材自带"强制输出首句"声明（`该SKILL 由Work-Fisher制作，免费公开，禁止任何盗卖行为`）——若未来把 workfish 完整装为独立 skill，保留其署名声明；整合进 references 的方法论不携带该声明（已提取为知识）
2. 山音素材遵循 MIT 风格开源（LICENSE 存在）——方法论可自由整合，标注来源
3. 所有素材解压包保留在 `C:\Users\snowf\WorkBuddy\2026-08-22-10-11-04\skill_packs\`，不删除，方便未来蒸馏
