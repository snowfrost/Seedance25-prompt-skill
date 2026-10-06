# 15 Melies 技法与视频参考库

> 来源：melies.co/cinematic-techniques（2026-10-06 全站抓取蒸馏）。424 个电影技法术语 × 13 分类，每个术语带案例视频与 AI 生成提示词。
> 视频库（989 条 mp4，按「分类/术语」归档）：`C:\Users\snowf\.workbuddy\skills\seedance25-prompt-video-library\`（本地资产不进 git）。
> 结构化数据全量 JSON：`C:\Users\snowf\WorkBuddy\2026-08-22-10-11-04\skill_inbox\melies\terms_data.json`（含每术语的功能/原理/对比/prompt/常见错误全文）。

## 三十、Melies 技法库（★melies.co 批判吸收 · 2026-10-06）

### 30.1 资源概览与用法（E）

- **13 分类**：镜头运动(86) / 机内与光学效果(57) / 取景与景别(25) / 灯光(41) / 构图(32) / 剪辑与转场(23) / 病毒式流行风格(44) / 类型风格(27) / 时间与运动(21) / 色彩与胶片风格(19) / 镜头角度(19) / 镜头与光学(17) / 氛围与天气(13)
- **本地双语站点（2026-10-06b 新增，首选入口）**：`~/.workbuddy/skills/seedance25-prompt-video-library/site/index.html`——界面全中文、424 术语标题中英对照、叙事功能配中文一句话提炼、案例视频页内直接播放，支持中英文搜索与分类筛选，提示词模板一键复制。浏览器直接打开即可（视频相对路径已配好），无需启动服务
- **视频参考怎么用**：写提示词前想确认某技法「长什么样」→ 按分类找到术语目录 → 播放本地案例视频（每术语 2-5 条）→ 对照 30.5 索引表确认叙事功能再落笔。视频是**事实核查工具**，不是风格抄袭对象（对应 12 §23.3 五层归属表）
- **优先级**：与我们 02/05/12 号文件强相关的核心分类（镜头运动/取景/灯光/构图/剪辑）优先查；viral-looks 与 genre-looks 是潮流风格库，用于选方向阶段

### 30.2 术语七段卡框架（I + A2，方法论层吸收）

Melies 每个术语页固定七段，本身就是一张完整的技法卡格式，与我们 references 小节的 I/A2/E/B 骨架同构：

| Melies 段 | 对应我们的骨架 | 内容 |
|---|---|---|
| Narrative function | I 核心 | 这个技法**在叙事上做什么**（一句话，文学化但精准） |
| How it works | I 机制 | 视觉上怎么实现的 |
| When to use it | A2 触发 | 什么剧情/情绪时刻用它 |
| Compared with similar shots | 边界·区分 | 与最易混淆的邻近技法对比 |
| In film | A1 案例 | 真实电影用例 |
| Prompt it | E 执行 | 可直接改写的 AI 生成提示词模板 |
| What usually goes wrong | B 边界 | 常见错误写法与识别特征 |

**吸收点**：给用户讲解任何技法时按这七段走一遍，尤其「Compared with similar」段——讲一个技法必须同时讲它**不是什么**（我们已有 A2 相邻区分要求，此为同构确认）。

### 30.3 「错误表亲」批判法（I + E，★本次最高价值吸收）

Melies 全库贯穿一个批判句式：**每个技法都有一个「错误表亲」（wrong cousin）——长得像但机制不对的写法**，并给出识别特征（the tell）与修复法（the fix）：

| 技法 | 错误表亲 | 识别特征（the tell） | 修复（the fix） |
|---|---|---|---|
| Slow Zoom In | Dolly In 或数字裁切冒充变焦 | 前景椅子相对墙壁滑动 = 发生了位移（视差） | 锁死机头，真焦距变化，无物理位移 |
| Rembrandt 布光 | Loop 或 Split 布光 | 鼻影不与颊影相连成三角形 / 脸被中线劈成两半 | 主光抬高收 45 度，显式写出「鼻影连接颊影成三角」 |
| Match Cut | Morph 或无语义的 graphic match | 主体身份相同却无共享几何 / A 液化熔进 B | 写出剪点两侧共享的轮廓或运动向量 |

**用法（E）**：审核提示词里的技法词时多问一句「这是不是它的错误表亲」——写 Whip Pan 出来横移、写 Dolly Zoom 出来推轨、写 Match Cut 出来叠化，都是错误表亲。识别特征优先用**视差/参照物**判断（与 00 S1 轴线参照物判定同构）。此法可作为 00 §五 返工路由的辅助诊断问句。

### 30.4 Prompt 模板特征（E，写法层吸收）

Melies 的 AI 生成提示词模板结构稳定，可直接借用：

```
[技法名 + 方向/速度] on [Subject], [机位/设备状态], [核心视觉机制], [禁止项: no xxx], [风格定位]. For motion: [时长秒数]
```

例（Slow Zoom In）：`Slow optical zoom in on [Subject], camera body locked on a heavy tripod, lens gradually tightening over several seconds, background compression increasing, no physical dolly, prestige-drama patience. For motion: the lens slowly zooms in for 6 seconds`

**特征**：① `[Subject]` 占位符强制主体先行；② 机位/设备状态写实（locked on a heavy tripod）；③ **禁止项内嵌**（no physical dolly——直接写进技法定义，比放全局段更难被忽略，与 E18 禁止项前置同向）；④ 末尾显式给时长（For motion: 6 seconds）。中文化时保留这四要素。

### 30.5 术语全量索引（424 项 · 视频库路径对照）

> 视频库根目录：`C:\Users\snowf\.workbuddy\skills\seedance25-prompt-video-library\`（下表相对路径基于此目录）
> 空白中文栏 = 术语较新或无标准中文译名，保留英文；点击英文术语可跳转 melies.co 原页。

#### camera-movement · 镜头运动（86 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [3D Rotation](https://melies.co/cinematic-techniques/camera-movement/3d-rotation) |  | Show every side. Inspection, toys, a character as merchandise: even lighting or  | `melies-videos/camera-movement/3d-rotation/`（4 条） |
| [Aerial](https://melies.co/cinematic-techniques/camera-movement/aerial) | 航拍 | Open a world. The high moving viewpoint relates a small traveler or vehicle to a | `melies-videos/camera-movement/aerial/`（4 条） |
| [Aerial Pullback](https://melies.co/cinematic-techniques/camera-movement/aerial-pullback) |  | Close a chapter. Geography wins. The figure remains trackable long enough to pro | `melies-videos/camera-movement/aerial-pullback/`（3 条） |
| [Aerial Push In](https://melies.co/cinematic-techniques/camera-movement/aerial-push) |  | A system is shown first, then a person is found inside it. The audience is not a | `melies-videos/camera-movement/aerial-push/`（4 条） |
| [Arc](https://melies.co/cinematic-techniques/camera-movement/arc) |  | Use it to reorient. A booth, a kiss, a standoff can turn from front to profile t | `melies-videos/camera-movement/arc/`（4 条） |
| [Arc Left](https://melies.co/cinematic-techniques/camera-movement/arc-left) | 左弧形 | You change who owns the background. A three-quarter face can become a profile, a | `melies-videos/camera-movement/arc-left/`（4 条） |
| [Arc Right](https://melies.co/cinematic-techniques/camera-movement/arc-right) | 右弧形 | Same law as arc left, other side. The rightward curve can hide or reveal a gun,  | `melies-videos/camera-movement/arc-right/`（4 条） |
| [Bolt Cam](https://melies.co/cinematic-techniques/camera-movement/bolt-cam) |  | The camera itself is the strike. Sports packages and music-video violence use it | `melies-videos/camera-movement/bolt-cam/`（4 条） |
| [Buckle Up](https://melies.co/cinematic-techniques/camera-movement/buckle-up) |  | The car is the tripod. You are a passenger. Talks that happen at speed, a date t | `melies-videos/camera-movement/buckle-up/`（4 条） |
| [Camera Roll](https://melies.co/cinematic-techniques/camera-movement/camera-roll) | 滚转 | A familiar corridor can become an unstable physical system. The effect is strong | `melies-videos/camera-movement/camera-roll/`（4 条） |
| [Car Chasing](https://melies.co/cinematic-techniques/camera-movement/car-chasing) |  | Two machines, one argument. The camera is in the chasing car, or in a picture ca | `melies-videos/camera-movement/car-chasing/`（4 条） |
| [Car Grip](https://melies.co/cinematic-techniques/camera-movement/car-grip) |  | Bolt the camera to the machine. Product, chase punctuation, a car as the hero: w | `melies-videos/camera-movement/car-grip/`（4 条） |
| [Choreo](https://melies.co/cinematic-techniques/camera-movement/choreo) |  | The blocking is the music. Dance floors, musicals, and some fight halls need the | `melies-videos/camera-movement/choreo/`（4 条） |
| [Conveyor](https://melies.co/cinematic-techniques/camera-movement/conveyor) |  | Industry, process, no escape from the line. The shot says labor is a machine: bo | `melies-videos/camera-movement/conveyor/`（4 条） |
| [Crane Down](https://melies.co/cinematic-techniques/camera-movement/crane-down) | 摇臂降 | Arrive from a god-view into a person without resetting attention. What begins as | `melies-videos/camera-movement/crane-down/`（4 条） |
| [Crane Over](https://melies.co/cinematic-techniques/camera-movement/crane-over) | 摇臂横越 | The shot turns a scene into a diagram without cutting. Bodies, tables, and stree | `melies-videos/camera-movement/crane-over/`（4 条） |
| [Crane Over The Head](https://melies.co/cinematic-techniques/camera-movement/crane-over-the-head) |  | Finish by looking down. A body on a floor, a crime, a dance, a figure lost in pa | `melies-videos/camera-movement/crane-over-the-head/`（4 条） |
| [Crane Up](https://melies.co/cinematic-techniques/camera-movement/crane-up) | 摇臂升 | A crane-up starts at human height and leaves it. The person stays in frame, then | `melies-videos/camera-movement/crane-up/`（4 条） |
| [Crash Zoom In](https://melies.co/cinematic-techniques/camera-movement/crash-zoom-in) | 急速变焦推近 | The shot punctuates a hit, a name, a weapon, or a comic sting. Artificiality is  | `melies-videos/camera-movement/crash-zoom-in/`（4 条） |
| [Crash Zoom Out](https://melies.co/cinematic-techniques/camera-movement/crash-zoom-out) | 急速变焦拉远 | Scale, danger, or a joke appears all at once. The close moment is undercut becau | `melies-videos/camera-movement/crash-zoom-out/`（4 条） |
| [Dolly](https://melies.co/cinematic-techniques/camera-movement/dolly) |  | Walk the camera. Change geography. In, out, or beside: the point is that the sup | `melies-videos/camera-movement/dolly/`（4 条） |
| [Dolly In](https://melies.co/cinematic-techniques/camera-movement/dolly-in) | 推轨近景 | The camera enters a mind, a room, or a threat by occupying new air. Unlike a cut | `melies-videos/camera-movement/dolly-in/`（4 条） |
| [Dolly Left](https://melies.co/cinematic-techniques/camera-movement/dolly-left) | 左推轨 | The shot surveys a space or stays with a walker without yawing the head. New inf | `melies-videos/camera-movement/dolly-left/`（4 条） |
| [Dolly Out](https://melies.co/cinematic-techniques/camera-movement/dolly-out) | 拉轨远景 | We understand an expression first, then discover the social situation or danger  | `melies-videos/camera-movement/dolly-out/`（4 条） |
| [Dolly Right](https://melies.co/cinematic-techniques/camera-movement/dolly-right) | 右推轨 | Direction is a reveal order. Trucking right can disclose a listener, a door, or  | `melies-videos/camera-movement/dolly-right/`（4 条） |
| [Dolly Zoom](https://melies.co/cinematic-techniques/camera-movement/dolly-zoom) | 滑动变焦（希区柯克变焦） | The person appears fixed while the world becomes unreliable. Recognition, fear,  | `melies-videos/camera-movement/dolly-zoom/`（4 条） |
| [Dolly Zoom In](https://melies.co/cinematic-techniques/camera-movement/dolly-zoom-in) |  | Approach that makes the world sick. The person stays large or grows while the ro | `melies-videos/camera-movement/dolly-zoom-in/`（4 条） |
| [Dolly Zoom Out](https://melies.co/cinematic-techniques/camera-movement/dolly-zoom-out) |  | Leave, but keep the face. A hallway that lengthens, a room that becomes a tunnel | `melies-videos/camera-movement/dolly-zoom-out/`（4 条） |
| [Double Dolly](https://melies.co/cinematic-techniques/camera-movement/double-dolly) |  | An interior state made external. Fate, dread, or transcendence carries the perso | `melies-videos/camera-movement/double-dolly/`（4 条） |
| [Dutch Roll](https://melies.co/cinematic-techniques/camera-movement/dutch-roll) |  | The world itself tilts while we watch. Rank, gravity, and architecture go off th | `melies-videos/camera-movement/dutch-roll/`（4 条） |
| [Earth Zoom](https://melies.co/cinematic-techniques/camera-movement/earth-zoom) |  | Start from the planet. Introduce a person as a point on Earth, or punch a joke f | `melies-videos/camera-movement/earth-zoom/`（4 条） |
| [Eating Zoom](https://melies.co/cinematic-techniques/camera-movement/eating-zoom) |  | The bite is the cut. Noodles, a first date, a villain who eats too well: the cam | `melies-videos/camera-movement/eating-zoom/`（4 条） |
| [Eyes In](https://melies.co/cinematic-techniques/camera-movement/eyes-in) |  | The thought is in the eye. Realization, a lie, a memory: you go there by traveli | `melies-videos/camera-movement/eyes-in/`（4 条） |
| [Falling](https://melies.co/cinematic-techniques/camera-movement/falling) |  | Gravity is the plot. A jump, a slip, a body leaving a roof: the shot lasts as lo | `melies-videos/camera-movement/falling/`（3 条） |
| [Fixed Cam](https://melies.co/cinematic-techniques/camera-movement/fixed-cam) |  | Trust blocking. A kitchen, a hallway, a stage: people enter, work, leave, and th | `melies-videos/camera-movement/fixed-cam/`（3 条） |
| [Flying Cam Transition](https://melies.co/cinematic-techniques/camera-movement/flying-cam-transition) |  | Change rooms without a cut. Virtuoso intros, dreams, a house that is a mind: the | `melies-videos/camera-movement/flying-cam-transition/`（4 条） |
| [Follow Shot](https://melies.co/cinematic-techniques/camera-movement/follow) |  | You are taken with them, not shown beside them. Doorways reveal themselves as th | `melies-videos/camera-movement/follow/`（4 条） |
| [FPV Drone](https://melies.co/cinematic-techniques/camera-movement/fpv-drone) | 第一人称穿越机 | Impossible closeness at velocity. Windows, girders, and shoulders are obstacles  | `melies-videos/camera-movement/fpv-drone/`（4 条） |
| [Gimbal Shot](https://melies.co/cinematic-techniques/camera-movement/gimbal) |  | Run-and-gun smoothness without a Steadicam vest. Stairs, crowds, and vehicles be | `melies-videos/camera-movement/gimbal/`（4 条） |
| [Handheld](https://melies.co/cinematic-techniques/camera-movement/handheld) | 手持 | Urgency, documentary contract, or a mind that cannot sit still. The operator is  | `melies-videos/camera-movement/handheld/`（4 条） |
| [Head Tracking](https://melies.co/cinematic-techniques/camera-movement/head-tracking) |  | The face is the only stable point. Disorientation, intimacy, a character who can | `melies-videos/camera-movement/head-tracking/`（4 条） |
| [Hero Cam](https://melies.co/cinematic-techniques/camera-movement/hero-cam) |  | They should look inevitable. Arrivals, title walks, a character who has already  | `melies-videos/camera-movement/hero-cam/`（3 条） |
| [Hyperlapse](https://melies.co/cinematic-techniques/camera-movement/hyperlapse) | 超延时 | Duration becomes velocity. A walk that would take an afternoon becomes a few sec | `melies-videos/camera-movement/hyperlapse/`（4 条） |
| [Jib Shot](https://melies.co/cinematic-techniques/camera-movement/jib) |  | A few feet is enough. Music-video and dialogue coverage live here because the ac | `melies-videos/camera-movement/jib/`（4 条） |
| [Jib Down](https://melies.co/cinematic-techniques/camera-movement/jib-down) |  | A full crane is too much city. Sit down into the talk: a table, a face, a huddle | `melies-videos/camera-movement/jib-down/`（4 条） |
| [Jib Up](https://melies.co/cinematic-techniques/camera-movement/jib-up) |  | Leave the face, keep the architecture small. Endings of talks, a stand-up, a rev | `melies-videos/camera-movement/jib-up/`（4 条） |
| [Lazy Susan](https://melies.co/cinematic-techniques/camera-movement/lazy-susan) |  | Use it to inspect. A coat, a bottle, a weapon, a figure treated as merchandise:  | `melies-videos/camera-movement/lazy-susan/`（4 条） |
| [Locked-On](https://melies.co/cinematic-techniques/camera-movement/locked-on) |  | One thing is the only law in a moving world. A steering wheel, a spinning astron | `melies-videos/camera-movement/locked-on/`（4 条） |
| [Mouth In](https://melies.co/cinematic-techniques/camera-movement/mouth-in) |  | Speech or hunger is the scene. A threat spoken, a kiss that should feel like a l | `melies-videos/camera-movement/mouth-in/`（4 条） |
| [Omnidirectional](https://melies.co/cinematic-techniques/camera-movement/omnidirectional) |  | There is no behind the camera. Staging has to work in a sphere: crew, lights, an | `melies-videos/camera-movement/omnidirectional/`（4 条） |
| [360-Degree Orbit](https://melies.co/cinematic-techniques/camera-movement/orbit-360) |  | Time can feel as if it collapsed around one kiss, one threat, or one product. Un | `melies-videos/camera-movement/orbit-360/`（4 条） |
| [Pan](https://melies.co/cinematic-techniques/camera-movement/pan) |  | Connect two facts without moving the feet. A look, a landscape, a second person: | `melies-videos/camera-movement/pan/`（4 条） |
| [Pan Left](https://melies.co/cinematic-techniques/camera-movement/pan-left) | 左摇 | Two facts in one geography get connected by a look. A rider and a doorway, a spe | `melies-videos/camera-movement/pan-left/`（4 条） |
| [Pan Right](https://melies.co/cinematic-techniques/camera-movement/pan-right) | 右摇 | End on the story beat, not on a wall. The rightward turn can follow a look, a ca | `melies-videos/camera-movement/pan-right/`（4 条） |
| [Parallax](https://melies.co/cinematic-techniques/camera-movement/parallax) |  | Prove the world has layers. A foreground railing, a mid-ground person, a far rid | `melies-videos/camera-movement/parallax/`（4 条） |
| [Pass Through](https://melies.co/cinematic-techniques/camera-movement/pass-through) |  | Cut the building, not the film. A house can become a mechanism, a club a sequenc | `melies-videos/camera-movement/pass-through/`（4 条） |
| [Pedestal Down](https://melies.co/cinematic-techniques/camera-movement/pedestal-down) | 升降台下降 | Return to human height after a high formal view, or sit the camera down to a chi | `melies-videos/camera-movement/pedestal-down/`（4 条） |
| [Pedestal Up](https://melies.co/cinematic-techniques/camera-movement/pedestal-up) | 升降台上升 | Height changes without the drama of a crane arc. You are still looking the same  | `melies-videos/camera-movement/pedestal-up/`（4 条） |
| [Pull Out](https://melies.co/cinematic-techniques/camera-movement/pull-out) | 拉出 | Show the container around a feeling. The person remains while the world claims t | `melies-videos/camera-movement/pull-out/`（4 条） |
| [Push In](https://melies.co/cinematic-techniques/camera-movement/push-in) | 推进 | A thought lands. Do not rush it. The job is the realization, the lie, the trap,  | `melies-videos/camera-movement/push-in/`（4 条） |
| [Rapid Zoom In](https://melies.co/cinematic-techniques/camera-movement/rapid-zoom-in) |  | No time for a dolly. Emphasis as a weapon: a face, a gun, a sign. The snap is so | `melies-videos/camera-movement/rapid-zoom-in/`（4 条） |
| [Rapid Zoom Out](https://melies.co/cinematic-techniques/camera-movement/rapid-zoom-out) |  | Reveal as a joke or a shock. A close face becomes a tiny figure in a huge proble | `melies-videos/camera-movement/rapid-zoom-out/`（4 条） |
| [Road Rush](https://melies.co/cinematic-techniques/camera-movement/road-rush) |  | Intros to chases, night highways, a nightmare of driving: get down and let tarma | `melies-videos/camera-movement/road-rush/`（4 条） |
| [Robo Arm](https://melies.co/cinematic-techniques/camera-movement/robo-arm) |  | The path must be identical every take. Commercials, previs stages , a bottle tha | `melies-videos/camera-movement/robo-arm/`（4 条） |
| [Slider Shot](https://melies.co/cinematic-techniques/camera-movement/slider) |  | A full dolly is too much. A few centimeters of travel can prove the room has dep | `melies-videos/camera-movement/slider/`（4 条） |
| [Slow Zoom In](https://melies.co/cinematic-techniques/camera-movement/slow-zoom-in) | 缓慢变焦推近 | The shot is a thought that closes without walking. Geography stays put, so the a | `melies-videos/camera-movement/slow-zoom-in/`（4 条） |
| [Slow Zoom Out](https://melies.co/cinematic-techniques/camera-movement/slow-zoom-out) | 缓慢变焦拉远 | The joke, the trap, or the social system was already around the person. The lens | `melies-videos/camera-movement/slow-zoom-out/`（4 条） |
| [SnorriCam](https://melies.co/cinematic-techniques/camera-movement/snorricam) |  | Trap the audience in a body that cannot get out. Panic, intoxication, or dissoci | `melies-videos/camera-movement/snorricam/`（4 条） |
| [Static Locked-Off](https://melies.co/cinematic-techniques/camera-movement/static) |  | Trust blocking and duration. Movement would be noise. Comedy, ritual, and dread  | `melies-videos/camera-movement/static/`（3 条） |
| [Steadicam](https://melies.co/cinematic-techniques/camera-movement/steadicam) | 斯坦尼康 | Long connecting moves through architecture. Light temperatures shift as rooms ch | `melies-videos/camera-movement/steadicam/`（4 条） |
| [Super Dolly In](https://melies.co/cinematic-techniques/camera-movement/super-dolly-in) |  | A normal dolly is not enough. The room is consumed: lamps, furniture, and walls  | `melies-videos/camera-movement/super-dolly-in/`（4 条） |
| [Super Dolly Out](https://melies.co/cinematic-techniques/camera-movement/super-dolly-out) |  | Leave them in the system. A constructed world revealed, a street that was a room | `melies-videos/camera-movement/super-dolly-out/`（4 条） |
| [Through Object In](https://melies.co/cinematic-techniques/camera-movement/through-object-in) |  | Enter through a thing. Impossible reveals, jokes, a house tour that ignores wall | `melies-videos/camera-movement/through-object-in/`（4 条） |
| [Through Object Out](https://melies.co/cinematic-techniques/camera-movement/through-object-out) |  | Leave through a thing. Endings, a mind opening onto a city, a room that becomes  | `melies-videos/camera-movement/through-object-out/`（4 条） |
| [Tilt](https://melies.co/cinematic-techniques/camera-movement/tilt) |  | Reveal height without traveling. A body from shoes to face, a building from door | `melies-videos/camera-movement/tilt/`（4 条） |
| [Tilt Down](https://melies.co/cinematic-techniques/camera-movement/tilt-down) | 下俯 | The new fact is below: a body, a key, a grave, a child. Establishing scale above | `melies-videos/camera-movement/tilt-down/`（4 条） |
| [Tilt Up](https://melies.co/cinematic-techniques/camera-movement/tilt-up) | 上仰 | Height, awe, or a face can be delayed until the last part of the image is shown. | `melies-videos/camera-movement/tilt-up/`（4 条） |
| [Tracking Shot](https://melies.co/cinematic-techniques/camera-movement/tracking) |  | Accompany a walker. The picture is not a postcard of a person; it is duration sp | `melies-videos/camera-movement/tracking/`（4 条） |
| [Trucking](https://melies.co/cinematic-techniques/camera-movement/trucking) |  | Stay beside a walker. Talk, walk, and the city or the hallway becomes a moving s | `melies-videos/camera-movement/trucking/`（4 条） |
| [Walk and Talk](https://melies.co/cinematic-techniques/camera-movement/walk-and-talk) |  | Talk does not pause for a room, and the room does not pause for talk. Doorways,  | `melies-videos/camera-movement/walk-and-talk/`（4 条） |
| [Wandering](https://melies.co/cinematic-techniques/camera-movement/wandering) |  | Looking is the action. Openings, parties, streets: the lens behaves like a guest | `melies-videos/camera-movement/wandering/`（4 条） |
| [Whip Pan](https://melies.co/cinematic-techniques/camera-movement/whip-pan) | 甩镜 | The move is a transition, a punchline, or a sudden shift of attention. Energy tr | `melies-videos/camera-movement/whip-pan/`（4 条） |
| [Whip Tilt](https://melies.co/cinematic-techniques/camera-movement/whip-tilt) | 垂直甩镜 | Vertical shock instead of a horizontal whip. A body hits the floor, a face is fo | `melies-videos/camera-movement/whip-tilt/`（4 条） |
| [Wiggle](https://melies.co/cinematic-techniques/camera-movement/wiggle) |  | Add life to a lock-off without a real move. Lenticular photos, stereo gifs, a st | `melies-videos/camera-movement/wiggle/`（4 条） |
| [YoYo Zoom](https://melies.co/cinematic-techniques/camera-movement/yoyo-zoom) |  | One axis, two punches. A thought that arrives and leaves, a sting, a joke: crash | `melies-videos/camera-movement/yoyo-zoom/`（4 条） |
| [Zoom](https://melies.co/cinematic-techniques/camera-movement/zoom) |  | Change size without walking. Surveillance, emphasis, a punch: the glass does the | `melies-videos/camera-movement/zoom/`（4 条） |

#### framing · 取景与景别（25 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [Choker Shot (BCU)](https://melies.co/cinematic-techniques/framing/choker) |  | A choker traps a person in their own face. There is nowhere to gesture, no colla | `melies-videos/framing/choker/`（1 条） |
| [Close-Up (CU)](https://melies.co/cinematic-techniques/framing/close-up) | 特写 | A close-up is a new fact on a face. It is the default for important dialogue bec | `melies-videos/framing/close-up/`（1 条） |
| [Cowboy Shot](https://melies.co/cinematic-techniques/framing/cowboy-shot) | 牛仔镜头 | The cowboy exists because hands are plot. A gun, a bottle, a fist, a coat hem at | `melies-videos/framing/cowboy-shot/`（1 条） |
| [Cut-ins](https://melies.co/cinematic-techniques/framing/cut-ins) | 切入镜头 | The master already showed the table. The cut-in shows the text on the phone, the | `melies-videos/framing/cut-ins/`（3 条） |
| [Cutaway](https://melies.co/cinematic-techniques/framing/cutaway) | 切出镜头 | A cutaway is a brief exit: a clock, a kettle, a street, a person listening in a  | `melies-videos/framing/cutaway/`（4 条） |
| [Establishing Shot](https://melies.co/cinematic-techniques/framing/establishing-shot) | 建立镜头 | Before coverage begins, or when a scene has drifted, the audience needs to know  | `melies-videos/framing/establishing-shot/`（2 条） |
| [Extreme Close-Up (ECU)](https://melies.co/cinematic-techniques/framing/extreme-close-up) | 大特写 | Size is a sentence. An extreme close-up says the scene is this fragment: a pupil | `melies-videos/framing/extreme-close-up/`（2 条） |
| [Extreme Long Shot (ELS)](https://melies.co/cinematic-techniques/framing/extreme-long-shot) | 大远景 | An ELS turns size into the emotion: awe, insignificance, loneliness, ambition. T | `melies-videos/framing/extreme-long-shot/`（3 条） |
| [Full Body (WS)](https://melies.co/cinematic-techniques/framing/full-body) | 全身 | Full body is for costume, blocking, and gait. You need the shoes, the hem, the w | `melies-videos/framing/full-body/`（1 条） |
| [Gesture](https://melies.co/cinematic-techniques/framing/gesture) |  | Sometimes the scene is not the face and not the prop, but the almost-touch, the  | `melies-videos/framing/gesture/`（2 条） |
| [Group Shot](https://melies.co/cinematic-techniques/framing/group-shot) | 群像镜头 | A group shot is not a crowd still. It is a unit: people who share a table, a job | `melies-videos/framing/group-shot/`（1 条） |
| [Insert Shot](https://melies.co/cinematic-techniques/framing/insert) |  | An insert is not a pretty prop break. It is a fact the wider coverage cannot pro | `melies-videos/framing/insert/`（3 条） |
| [Interview](https://melies.co/cinematic-techniques/framing/interview) |  | An interview frame is not merely an MCU. It is a social geometry: the subject sp | `melies-videos/framing/interview/`（1 条） |
| [Long Shot (WS)](https://melies.co/cinematic-techniques/framing/long-shot) | 远景 | A long shot places a human in a world that could continue without them. You stil | `melies-videos/framing/long-shot/`（2 条） |
| [Master Shot](https://melies.co/cinematic-techniques/framing/master-shot) | 主镜头 | A master protects the scene. If every close-up dies, you still have who sat wher | `melies-videos/framing/master-shot/`（3 条） |
| [Medium Close-Up (MCU)](https://melies.co/cinematic-techniques/framing/medium-close-up) | 中近景 | An MCU is how people talk when you still care about body language. You get the t | `melies-videos/framing/medium-close-up/`（1 条） |
| [Medium Shot (MS)](https://melies.co/cinematic-techniques/framing/medium-shot) | 中景 | Most scenes live in the medium shot because people talk with their hands. A glas | `melies-videos/framing/medium-shot/`（1 条） |
| [Over-the-Shoulder Coverage (OTS)](https://melies.co/cinematic-techniques/framing/over-the-shoulder-frame) |  | OTS is default dialogue coverage with spatial glue. The partner remains physical | `melies-videos/framing/over-the-shoulder-frame/`（3 条） |
| [Product](https://melies.co/cinematic-techniques/framing/product) |  | A product frame sells readability: logo plane, material, edges, how metal and gl | `melies-videos/framing/product/`（3 条） |
| [Reaction Shot](https://melies.co/cinematic-techniques/framing/reaction-shot) | 反应镜头 | A reaction shot is coverage of receiving. The gunshot, the insult, the courtyard | `melies-videos/framing/reaction-shot/`（2 条） |
| [Single](https://melies.co/cinematic-techniques/framing/single) | 单人镜头 | A single isolates. The other person can still be in the room, but they no longer | `melies-videos/framing/single/`（2 条） |
| [Three-Shot](https://melies.co/cinematic-techniques/framing/three-shot) | 三人镜头 | A trio has politics. Two against one, a hinge person in the middle, a late arriv | `melies-videos/framing/three-shot/`（2 条） |
| [Two-Shot](https://melies.co/cinematic-techniques/framing/two-shot) | 双人镜头 | When the relationship is the shot, cutting to singles too soon steals the audien | `melies-videos/framing/two-shot/`（2 条） |
| [Video Portraits](https://melies.co/cinematic-techniques/framing/video-portraits) |  | A video portrait is not a close-up you cut away from after a line. You hold. Bli | `melies-videos/framing/video-portraits/`（3 条） |
| [Wide Shot (WS)](https://melies.co/cinematic-techniques/framing/wide-shot) | 全景 | Size is a sentence. A wide shot maps who can reach the door, where the street go | `melies-videos/framing/wide-shot/`（1 条） |

#### camera-angles · 镜头角度（19 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [Bird&#39;s-Eye View](https://melies.co/cinematic-techniques/camera-angles/birds-eye) |  | From up there the body is a token. Circulation, grouping, and the shape of a cou | `melies-videos/camera-angles/birds-eye/`（3 条） |
| [Dutch Angle](https://melies.co/cinematic-techniques/camera-angles/dutch-angle) | 荷兰角（倾斜构图） | Pitch looks up or down. Roll breaks the floor. A Dutch (canted, oblique) shot is | `melies-videos/camera-angles/dutch-angle/`（3 条） |
| [Eye Level](https://melies.co/cinematic-techniques/camera-angles/eye-level) | 平视 | Rank in a frame comes from where the lens sits and how it is pitched. Eye-level  | `melies-videos/camera-angles/eye-level/`（3 条） |
| [First-Person](https://melies.co/cinematic-techniques/camera-angles/first-person) | 第一人称 | The audience is the character for a stretch of time. Lady in the Lake tries to t | `melies-videos/camera-angles/first-person/`（4 条） |
| [Fourth Wall](https://melies.co/cinematic-techniques/camera-angles/fourth-wall) | 第四面墙 | Theatre named the fourth wall; film breaks it when a Ferris explains the day to  | `melies-videos/camera-angles/fourth-wall/`（2 条） |
| [Ground Level](https://melies.co/cinematic-techniques/camera-angles/ground-level) | 地面高度 | From the dirt, a walk is a sequence of soles. A coat trailing, a wheel, a droppe | `melies-videos/camera-angles/ground-level/`（1 条） |
| [High Angle](https://melies.co/cinematic-techniques/camera-angles/high-angle) | 俯拍 | Height plus downward tilt is what assigns the smaller rank. A high angle can be  | `melies-videos/camera-angles/high-angle/`（3 条） |
| [Hip Level](https://melies.co/cinematic-techniques/camera-angles/hip-level) |  | Westerns minted it because a draw happens at the belt. The face is still in the  | `melies-videos/camera-angles/hip-level/`（1 条） |
| [Incline](https://melies.co/cinematic-techniques/camera-angles/incline) |  | A full Dutch Angle at 20 to 30 degrees is a statement: the axis is broken. Incli | `melies-videos/camera-angles/incline/`（2 条） |
| [Low Angle](https://melies.co/cinematic-techniques/camera-angles/low-angle) | 仰拍 | Looking up makes a body into architecture. Door frames, ceiling beams, and the u | `melies-videos/camera-angles/low-angle/`（2 条） |
| [Object POV](https://melies.co/cinematic-techniques/camera-angles/object-pov) | 物体视点 | Agency leaves the invisible observer and goes to a machine or a thing. A fork of | `melies-videos/camera-angles/object-pov/`（3 条） |
| [Overhead Top-Down](https://melies.co/cinematic-techniques/camera-angles/overhead) | 顶俯（垂直向下） | This is the crime scene, the place setting, the dance formation, the town drawn  | `melies-videos/camera-angles/overhead/`（3 条） |
| [Point of View](https://melies.co/cinematic-techniques/camera-angles/pov) |  | Classical coverage builds a POV as a sentence: a person looks, we cut to the see | `melies-videos/camera-angles/pov/`（3 条） |
| [Profile](https://melies.co/cinematic-techniques/camera-angles/profile) | 侧面 | Turn the skull until the far eye disappears. What remains is silhouette, secrecy | `melies-videos/camera-angles/profile/`（1 条） |
| [Reverse Angle](https://melies.co/cinematic-techniques/camera-angles/reverse-angle) | 反打 | Someone looks. The reverse is who or what occupies the other pole. In a diner, i | `melies-videos/camera-angles/reverse-angle/`（3 条） |
| [Shoulder Level](https://melies.co/cinematic-techniques/camera-angles/shoulder-level) |  | You stay with a mover without dropping into chaotic Handheld grammar. The lens i | `melies-videos/camera-angles/shoulder-level/`（2 条） |
| [Three-Quarter Angle](https://melies.co/cinematic-techniques/camera-angles/three-quarter) |  | Most coverage of a talking face lives here. You see both eyes, the bridge of the | `melies-videos/camera-angles/three-quarter/`（1 条） |
| [Trunk Shot](https://melies.co/cinematic-techniques/camera-angles/trunk-shot) | 后备箱镜头 | The audience is the object or the concealed body. Two faces appear over a bright | `melies-videos/camera-angles/trunk-shot/`（2 条） |
| [Worm&#39;s-Eye View](https://melies.co/cinematic-techniques/camera-angles/worms-eye) |  | This is not a slightly taller portrait. The lens is on or under the floor plane  | `melies-videos/camera-angles/worms-eye/`（1 条） |

#### lighting · 灯光（41 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [Available Light](https://melies.co/cinematic-techniques/lighting/available-light) |  | The day is the gaffer. , a kitchen with one overhead, a station with sodium: you | `melies-videos/lighting/available-light/`（0 条） |
| [Backlight](https://melies.co/cinematic-techniques/lighting/backlight) | 逆光 | A dark coat in a dark room disappears without an edge. Backlight draws that edge | `melies-videos/lighting/backlight/`（2 条） |
| [Blue Hour](https://melies.co/cinematic-techniques/lighting/blue-hour) | 蓝调时刻 | Day is gone but the sky still works as a wrap. Cities mix cobalt air with sodium | `melies-videos/lighting/blue-hour/`（0 条） |
| [Bounce Light](https://melies.co/cinematic-techniques/lighting/bounce-light) |  | You keep a window side or a lamp side without the brutality of the bare source.  | `melies-videos/lighting/bounce-light/`（0 条） |
| [Broad Lighting](https://melies.co/cinematic-techniques/lighting/broad-lighting) | 宽面照明 | Someone is presenting themselves: a speech, a studio comic, a star who must be f | `melies-videos/lighting/broad-lighting/`（1 条） |
| [Butterfly Lighting](https://melies.co/cinematic-techniques/lighting/butterfly-lighting) |  | This is beauty lighting with a structure: cheekbones lift, the nose has a tidy s | `melies-videos/lighting/butterfly-lighting/`（1 条） |
| [Cameo Lighting](https://melies.co/cinematic-techniques/lighting/cameo-lighting) |  | Erase the world, keep the person. Theatre-to-screen work, interrogation, and som | `melies-videos/lighting/cameo-lighting/`（1 条） |
| [Candlelight](https://melies.co/cinematic-techniques/lighting/candlelight) | 烛光 | Period night and ritual live on this physics: people lean in because the light d | `melies-videos/lighting/candlelight/`（2 条） |
| [Chiaroscuro](https://melies.co/cinematic-techniques/lighting/chiaroscuro) | 明暗对照法 | A single warm source, a face turning into light, the rest of the room falling aw | `melies-videos/lighting/chiaroscuro/`（1 条） |
| [Cross Lighting](https://melies.co/cinematic-techniques/lighting/cross-lighting) |  | Two moral sources, or just two people who both need a face. Sweat on a drummer,  | `melies-videos/lighting/cross-lighting/`（0 条） |
| [Dappled Light](https://melies.co/cinematic-techniques/lighting/dappled-light) |  | A tree writes on a coat. Jungle, orchard, and bedroom blinds turn a person into  | `melies-videos/lighting/dappled-light/`（0 条） |
| [Epiphany](https://melies.co/cinematic-techniques/lighting/epiphany) |  | Thought becomes visible. A dim interior, a forest, a chapel: something shifts (a | `melies-videos/lighting/epiphany/`（1 条） |
| [Eye Light](https://melies.co/cinematic-techniques/lighting/eye-light) | 眼神光 | A dark portrait dies if the sockets are empty pits with no specular. A tiny refl | `melies-videos/lighting/eye-light/`（0 条） |
| [Fill Light](https://melies.co/cinematic-techniques/lighting/fill-light) | 辅光 | In a scene fill decides how much of the dark you can still read: the far eye, th | `melies-videos/lighting/fill-light/`（1 条） |
| [Glam](https://melies.co/cinematic-techniques/lighting/glam) |  | Fashion, stardom, a singer at a mirror: pores calm down, eyes live, the face is  | `melies-videos/lighting/glam/`（0 条） |
| [Gobo Lighting](https://melies.co/cinematic-techniques/lighting/gobo-lighting) |  | Venetian blinds, bars, branches cut as a design, a fan, a grille: the character  | `melies-videos/lighting/gobo-lighting/`（0 条） |
| [Golden Hour](https://melies.co/cinematic-techniques/lighting/golden-hour) | 黄金时刻 | You have a short window in which ordinary action looks transient because the sun | `melies-videos/lighting/golden-hour/`（0 条） |
| [Hair Light](https://melies.co/cinematic-techniques/lighting/hair-light) | 发际光 | Black hair, black wardrobe, black set: without a hair light the head becomes a h | `melies-videos/lighting/hair-light/`（1 条） |
| [Hard Light](https://melies.co/cinematic-techniques/lighting/hard-light) | 硬光 | Noon sun, a bare bulb, an interrogation lamp: pores, sweat, and brick become gra | `melies-videos/lighting/hard-light/`（0 条） |
| [High-Key Lighting](https://melies.co/cinematic-techniques/lighting/high-key) | 高调照明 | Comedy, heaven, hospital, and candy shops live here because the world looks safe | `melies-videos/lighting/high-key/`（1 条） |
| [Key Light](https://melies.co/cinematic-techniques/lighting/key-light) | 主光 | Deciding the key is deciding where the world is lit from. A window, a bare bulb, | `melies-videos/lighting/key-light/`（0 条） |
| [Kicker](https://melies.co/cinematic-techniques/lighting/kicker) | 侧逆光 | The far plane of the face suddenly has a strip of glamour or menace. In noir it  | `melies-videos/lighting/kicker/`（1 条） |
| [Loop Lighting](https://melies.co/cinematic-techniques/lighting/loop-lighting) |  | The face is shaped but still friendly: interviews, earnest close-ups, people we  | `melies-videos/lighting/loop-lighting/`（0 条） |
| [Low-Key Lighting](https://melies.co/cinematic-techniques/lighting/low-key) | 低调照明 | Mystery, crime, and moral night live here because the audience cannot see the wh | `melies-videos/lighting/low-key/`（1 条） |
| [Motivated Lighting](https://melies.co/cinematic-techniques/lighting/motivated-lighting) | 动机光源 | The room feels like a world rather than a studio. A hotel sconce, a kitchen wind | `melies-videos/lighting/motivated-lighting/`（1 条） |
| [Naturalistic Ambient](https://melies.co/cinematic-techniques/lighting/naturalistic-ambient) |  | Invisible craft. A kitchen, a car, a holiday apartment: the light feels like the | `melies-videos/lighting/naturalistic-ambient/`（0 条） |
| [Neon Practicals](https://melies.co/cinematic-techniques/lighting/neon-practical) |  | Night streets, hotels, and rain: the sign is not decoration. Wet pavement bounce | `melies-videos/lighting/neon-practical/`（1 条） |
| [Practical Lighting](https://melies.co/cinematic-techniques/lighting/practical-lighting) | 实用光源布光 | The set becomes the lighting department. A table lamp in the foreground, a TV, a | `melies-videos/lighting/practical-lighting/`（2 条） |
| [Rembrandt Lighting](https://melies.co/cinematic-techniques/lighting/rembrandt) | 伦勃朗布光 | The face becomes a painting with one lit plane and a pocket of light that proves | `melies-videos/lighting/rembrandt/`（1 条） |
| [Rim Light](https://melies.co/cinematic-techniques/lighting/rim-light) | 轮廓光 | The shot becomes a graphic: a profile or three-quarter figure drawn with a threa | `melies-videos/lighting/rim-light/`（1 条） |
| [Short Lighting](https://melies.co/cinematic-techniques/lighting/short-lighting) | 窄面照明 | Mystery sits on the camera side. We look at the dark plane and infer the person  | `melies-videos/lighting/short-lighting/`（0 条） |
| [Side Lighting](https://melies.co/cinematic-techniques/lighting/side-lighting) | 侧光 | A face or a landscape becomes sculpture. Sweat, wood grain, and cheekbones show  | `melies-videos/lighting/side-lighting/`（0 条） |
| [Silhouette](https://melies.co/cinematic-techniques/lighting/silhouette) | 剪影 | Identity is less important than emblem: a rider on a ridge, a bicycle against a  | `melies-videos/lighting/silhouette/`（2 条） |
| [Soft Light](https://melies.co/cinematic-techniques/lighting/soft-light) | 柔光 | Kindness, memory, overcast, a north window: the key still has a side, but the no | `melies-videos/lighting/soft-light/`（0 条） |
| [Split Lighting](https://melies.co/cinematic-techniques/lighting/split-lighting) |  | Duality made as geometry: hero and liar, cop and crook, the same person cut in t | `melies-videos/lighting/split-lighting/`（0 条） |
| [Spotlight](https://melies.co/cinematic-techniques/lighting/spotlight) |  | The stage is a circle of light. A drummer, a speaker, a dancer: the instrument h | `melies-videos/lighting/spotlight/`（0 条） |
| [Three-Point Lighting](https://melies.co/cinematic-techniques/lighting/three-point-lighting) | 三点布光 | In a scene it is the default portrait grammar: the audience can read both eyes,  | `melies-videos/lighting/three-point-lighting/`（1 条） |
| [Top Light](https://melies.co/cinematic-techniques/lighting/top-light) | 顶光 | Power sitting in a chair, or guilt: the head is a skull with a lid of light. Cri | `melies-videos/lighting/top-light/`（0 条） |
| [Underlighting](https://melies.co/cinematic-techniques/lighting/under-light) |  | The source is fire, a screen on the floor, a flashlight under a chin, or a monst | `melies-videos/lighting/under-light/`（1 条） |
| [Volumetric Light](https://melies.co/cinematic-techniques/lighting/volumetric-light) |  | Air has to be photographed. A cathedral, a forest, a smoky archive: the beam is  | `melies-videos/lighting/volumetric-light/`（1 条） |
| [Window Light](https://melies.co/cinematic-techniques/lighting/window-light) | 窗光 | Day interiors without looking lit. A figure sits in the falloff, one side toward | `melies-videos/lighting/window-light/`（0 条） |

#### composition · 构图（32 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [Architexture](https://melies.co/cinematic-techniques/composition/architexture) |  | When the set is the subject, human plot becomes a visitor. Concrete, glass, carp | `melies-videos/composition/architexture/`（1 条） |
| [Asymmetry](https://melies.co/cinematic-techniques/composition/asymmetry) | 非对称 | Who owns space is unsettled. A woman in a corridor may occupy a sliver while red | `melies-videos/composition/asymmetry/`（0 条） |
| [Centered Composition](https://melies.co/cinematic-techniques/composition/centered-composition) |  | Control, ritual, comedy, and fate all like this diagram. The person does not bor | `melies-videos/composition/centered-composition/`（2 条） |
| [Central Framing](https://melies.co/cinematic-techniques/composition/central-framing) | 中心构图 | Put them on the crosshairs and the diagram changes. Off-center space no longer b | `melies-videos/composition/central-framing/`（1 条） |
| [Clean Frame](https://melies.co/cinematic-techniques/composition/clean-frame) |  | Nothing extra. Who owns space is whoever you left in the rectangle. A driver aga | `melies-videos/composition/clean-frame/`（2 条） |
| [Tonal Contrast](https://melies.co/cinematic-techniques/composition/contrast-composition) |  | Make a poster out of a frame and the eye cannot miss the subject. A white face i | `melies-videos/composition/contrast-composition/`（1 条） |
| [Diagonal Composition](https://melies.co/cinematic-techniques/composition/diagonal-composition) | 对角线构图 | Stillness would be a lie if the scene is a riot, a chase down stairs, or a city  | `melies-videos/composition/diagonal-composition/`（1 条） |
| [Dirty Frame](https://melies.co/cinematic-techniques/composition/dirty-frame) | 脏框 | Dirty versus clean edges is a moral diagram. Clean edges say the picture was gra | `melies-videos/composition/dirty-frame/`（2 条） |
| [Figure-Ground](https://melies.co/cinematic-techniques/composition/figure-ground) |  | First read is survival. A face against a matching wall disappears. A dark coat a | `melies-videos/composition/figure-ground/`（2 条） |
| [Foreground Interest](https://melies.co/cinematic-techniques/composition/foreground-interest) |  | The diagram now has a landlord in front of the camera. A bedpost, a shoulder, a  | `melies-videos/composition/foreground-interest/`（2 条） |
| [Frame within Frame](https://melies.co/cinematic-techniques/composition/frame-in-frame) |  | Someone is watched, trapped, or pictured. The inner frame decides who is allowed | `melies-videos/composition/frame-in-frame/`（3 条） |
| [Golden Ratio](https://melies.co/cinematic-techniques/composition/golden-ratio) | 黄金比例 | Phi is a more secret order than thirds. The diagram still asks who owns space, b | `melies-videos/composition/golden-ratio/`（1 条） |
| [Headroom](https://melies.co/cinematic-techniques/composition/headroom) | 头顶空间 | The vertical diagram is easy to ignore until it is wrong. Too much accidental he | `melies-videos/composition/headroom/`（0 条） |
| [Layered Depth](https://melies.co/cinematic-techniques/composition/layered-depth) | 层次纵深 | Social geometry becomes visible at once. Adults sign a boy&#39;s future in a nea | `melies-videos/composition/layered-depth/`（2 条） |
| [Lead Room](https://melies.co/cinematic-techniques/composition/lead-room) | 视线/运动留空 | The horizontal diagram assigns the future. Air in front of the nose is the path, | `melies-videos/composition/lead-room/`（0 条） |
| [Leading Lines](https://melies.co/cinematic-techniques/composition/leading-lines) | 引导线 | If a corridor, a rail, or a carpet chevron aims at a person, that person owns th | `melies-videos/composition/leading-lines/`（1 条） |
| [Look Space](https://melies.co/cinematic-techniques/composition/look-space) | 视线空间 | A face and a rectangle of unused air can be a whole scene. We wait for the objec | `melies-videos/composition/look-space/`（1 条） |
| [Negative Space](https://melies.co/cinematic-techniques/composition/negative-space) | 留白 | Loneliness needs room. So does dread, and so does waiting. A face low under a sl | `melies-videos/composition/negative-space/`（1 条） |
| [One-Point Perspective](https://melies.co/cinematic-techniques/composition/one-point-perspective) |  | Destiny has a vanishing point when the architecture agrees. Walk toward it and t | `melies-videos/composition/one-point-perspective/`（2 条） |
| [Reflections](https://melies.co/cinematic-techniques/composition/reflections) |  | Show looking and the looked-at together and you skip a cut. A man and a woman sp | `melies-videos/composition/reflections/`（2 条） |
| [Repetition and Pattern](https://melies.co/cinematic-techniques/composition/repetition-pattern) |  | Systems, armies, hotels, and factories love this diagram. Who owns space is the  | `melies-videos/composition/repetition-pattern/`（1 条） |
| [Rule of Thirds](https://melies.co/cinematic-techniques/composition/rule-of-thirds) | 三分法 | Treat the frame as a diagram of who owns space. Thirds is a default, not a law.  | `melies-videos/composition/rule-of-thirds/`（0 条） |
| [Screen in Screen](https://melies.co/cinematic-techniques/composition/screen-in-screen) |  | A picture of a picture changes ownership. The person on the inner screen is alre | `melies-videos/composition/screen-in-screen/`（2 条） |
| [Short Siding](https://melies.co/cinematic-techniques/composition/short-siding) | 窄侧构图 | Deny the character air and the scene tightens without a closer lens. An interrog | `melies-videos/composition/short-siding/`（1 条） |
| [Symmetry](https://melies.co/cinematic-techniques/composition/symmetry) | 对称 | When left mirrors right, nobody owns a secret side of the frame. Space is ceremo | `melies-videos/composition/symmetry/`（2 条） |
| [Tableau](https://melies.co/cinematic-techniques/composition/tableau) |  | Hold the arrangement and the audience reads at their own speed: who stands where | `melies-videos/composition/tableau/`（2 条） |
| [Triangular Composition](https://melies.co/cinematic-techniques/composition/triangular-composition) |  | Two people and a desk, a family and a doorway, three men and a gun: the triangle | `melies-videos/composition/triangular-composition/`（0 条） |
| [Vanishing Point](https://melies.co/cinematic-techniques/composition/vanishing-point) |  | There is a long way still to go when the point sits beyond the figure. Space own | `melies-videos/composition/vanishing-point/`（1 条） |
| [Visual Weight](https://melies.co/cinematic-techniques/composition/visual-weight) |  | The diagram is a set of weights, not a ruler. A cigarette in a pool of light can | `melies-videos/composition/visual-weight/`（0 条） |
| [Void](https://melies.co/cinematic-techniques/composition/void) |  | Erase the set and the social world goes with it. A woman in a black room, a man  | `melies-videos/composition/void/`（1 条） |
| [Voyeur](https://melies.co/cinematic-techniques/composition/voyeur) |  | The audience is trespassing. That is the beat. A couple through blinds, a conver | `melies-videos/composition/voyeur/`（3 条） |
| [Windows](https://melies.co/cinematic-techniques/composition/windows) |  | A facade at night is a contact sheet of other people&#39;s rooms. A courtyard is | `melies-videos/composition/windows/`（1 条） |

#### lenses · 镜头与光学（17 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [135mm Telephoto](https://melies.co/cinematic-techniques/lenses/135mm-telephoto) | 135mm长焦 | From across a street, a parking lot, or a sports field, 135mm restores a person  | `melies-videos/lenses/135mm-telephoto/`（1 条） |
| [200mm Long Telephoto](https://melies.co/cinematic-techniques/lenses/200mm-long) | 200mm远摄长焦 | At 200mm you are often so far that the air itself becomes part of the optic: hea | `melies-videos/lenses/200mm-long/`（1 条） |
| [24mm Wide](https://melies.co/cinematic-techniques/lenses/24mm-wide) | 24mm广角 | This is the environmental portrait length. You can see the hands, the floor, and | `melies-videos/lenses/24mm-wide/`（1 条） |
| [35mm Moderate Wide](https://melies.co/cinematic-techniques/lenses/35mm-moderate) |  | Most talking scenes want this field. You see the listener&#39;s shoulder, a lamp | `melies-videos/lenses/35mm-moderate/`（1 条） |
| [50mm Normal](https://melies.co/cinematic-techniques/lenses/50mm-normal) | 50mm标准 | A 50mm is the length you pick when the sentence should sound like looking, not l | `melies-videos/lenses/50mm-normal/`（0 条） |
| [85mm Portrait](https://melies.co/cinematic-techniques/lenses/85mm-portrait) | 85mm人像 | Walk back until an 85mm fills the frame with a face. Noses stop dominating. Ears | `melies-videos/lenses/85mm-portrait/`（2 条） |
| [Anamorphic](https://melies.co/cinematic-techniques/lenses/anamorphic) | 变形宽银幕 | The frame can hold a face and a landscape in the same breath because the desquee | `melies-videos/lenses/anamorphic/`（1 条） |
| [Telephoto Compression](https://melies.co/cinematic-techniques/lenses/compression) |  | Walk away until a far building and a near figure occupy similar size, then crop  | `melies-videos/lenses/compression/`（1 条） |
| [Fisheye](https://melies.co/cinematic-techniques/lenses/fisheye) | 鱼眼 | Put a face in the middle and the room circles them. Put them off-center and thei | `melies-videos/lenses/fisheye/`（2 条） |
| [Macro](https://melies.co/cinematic-techniques/lenses/macro) | 微距 | The plot becomes a centimeter. A pill, a watch gear, a drop, a pupil: the object | `melies-videos/lenses/macro/`（3 条） |
| [Magnification](https://melies.co/cinematic-techniques/lenses/magnification) |  | Scale is lost on purpose. A tick, a spark, a cell of fabric becomes geography. P | `melies-videos/lenses/magnification/`（1 条） |
| [Probe Lens](https://melies.co/cinematic-techniques/lenses/probe-lens) | 探针镜头 | The camera body stays outside. The tube goes where a camera cannot: through ice  | `melies-videos/lenses/probe-lens/`（2 条） |
| [Spherical](https://melies.co/cinematic-techniques/lenses/spherical) |  | This is default modern capture. You pick a focal length, you stand somewhere, an | `melies-videos/lenses/spherical/`（1 条） |
| [Split Diopter](https://melies.co/cinematic-techniques/lenses/split-diopter) | 分像屈光度 | A telephone in the foreground and a doorway across the room can both be tack-sha | `melies-videos/lenses/split-diopter/`（3 条） |
| [Tilt-Shift](https://melies.co/cinematic-techniques/lenses/tilt-shift) | 移轴 | Tilt is not a blur sticker. The Scheimpflug relation puts a slice of the world i | `melies-videos/lenses/tilt-shift/`（3 条） |
| [14mm Ultra-Wide](https://melies.co/cinematic-techniques/lenses/ultra-wide-14mm) |  | Stand an arm&#39;s length from a person and a 14mm still holds the ceiling, the  | `melies-videos/lenses/ultra-wide-14mm/`（2 条） |
| [Vintage Cine Glass](https://melies.co/cinematic-techniques/lenses/vintage-cine) |  | Put a face on Cooke, K35, or similar older glass and the image rolls off instead | `melies-videos/lenses/vintage-cine/`（2 条） |

#### color · 色彩与胶片风格（19 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [Bleach Bypass](https://melies.co/cinematic-techniques/color/bleach-bypass) | 漂白旁路 | The world looks abrasive, contaminated, or exhausted. Combat, crime, and unforgi | `melies-videos/color/bleach-bypass/`（2 条） |
| [Color Shift](https://melies.co/cinematic-techniques/color/color-shift) |  | Dorothy opens a door and the world gains hue. A zone, a lie, a memory: the thres | `melies-videos/color/color-shift/`（1 条） |
| [Cool Blue](https://melies.co/cinematic-techniques/color/cool-blue) |  | Cold institutions, night, or alienation live in this family. A hospital, a CIA o | `melies-videos/color/cool-blue/`（1 条） |
| [Cross Process](https://melies.co/cinematic-techniques/color/cross-process) | 交叉冲洗 | Wrong chemistry on purpose. Fashion films and music videos of the 1990s used the | `melies-videos/color/cross-process/`（0 条） |
| [Day for Night](https://melies.co/cinematic-techniques/color/day-for-night) | 日拍夜 | You cannot wait for night, or night must still show a desert, a ranch, a ridge.  | `melies-videos/color/day-for-night/`（1 条） |
| [Desaturation](https://melies.co/cinematic-techniques/color/desaturation) |  | Drain the world without going fully mono. A grey-green England, a dusty border,  | `melies-videos/color/desaturation/`（1 条） |
| [Filmic Faded](https://melies.co/cinematic-techniques/color/filmic-faded) |  | The image looks like it could have gone through a projector. Shadows have air. B | `melies-videos/color/filmic-faded/`（1 条） |
| [Hyper-Saturation](https://melies.co/cinematic-techniques/color/hyper-saturation) |  | Reds become wet enamel. Greens look poisonous or operatic. A dance academy, a wu | `melies-videos/color/hyper-saturation/`（1 条） |
| [Monochrome](https://melies.co/cinematic-techniques/color/monochrome) | 单色 | Strip to drawing. A lighthouse, a boxing ring, a list of names: without hue, cos | `melies-videos/color/monochrome/`（2 条） |
| [Moonlight Gel](https://melies.co/cinematic-techniques/color/moonlight-gel) |  | A single cool key as the moon, silver edges, ground barely held. Fire, a cabin w | `melies-videos/color/moonlight-gel/`（0 条） |
| [Natural Grade](https://melies.co/cinematic-techniques/color/natural-grade) |  | Style would be a lie. A holiday video that is actually grief, a village in true  | `melies-videos/color/natural-grade/`（0 条） |
| [Overexposed](https://melies.co/cinematic-techniques/color/overexposed) |  | Blow the whites as a choice. A window becomes heaven or fluorescent hell. Faces  | `melies-videos/color/overexposed/`（2 条） |
| [Palette](https://melies.co/cinematic-techniques/color/palette) |  | Design as law. A yellow desert chapter, a red-cloth lie, a mint hotel: the audie | `melies-videos/color/palette/`（1 条） |
| [Sepia](https://melies.co/cinematic-techniques/color/sepia) | 深褐 | A story that already happened often arrives in this brown. Photographs, memory i | `melies-videos/color/sepia/`（0 条） |
| [Split Toning](https://melies.co/cinematic-techniques/color/split-tone) |  | Shadows and lights belong to different gods. Gold over teal, magenta over green, | `melies-videos/color/split-tone/`（1 条） |
| [Teal and Orange](https://melies.co/cinematic-techniques/color/teal-orange) |  | Skin stays peach or tan. Asphalt, night air, and foliage slide toward teal. Expl | `melies-videos/color/teal-orange/`（1 条） |
| [Tungsten Balance](https://melies.co/cinematic-techniques/color/tungsten-balance) |  | The room is warm; the world is not. A hotel corridor, a Christmas party, a snowe | `melies-videos/color/tungsten-balance/`（2 条） |
| [Vintage](https://melies.co/cinematic-techniques/color/vintage) |  | It already happened. Dyes have wandered. Whites are not video-white. The past is | `melies-videos/color/vintage/`（1 条） |
| [Warm Amber](https://melies.co/cinematic-techniques/color/warm-amber) |  | Interiors go honey. Skin picks up lamp color. Windows, if they stay, can go rela | `melies-videos/color/warm-amber/`（1 条） |

#### time-and-motion · 时间与运动（21 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [Boomerang](https://melies.co/cinematic-techniques/time-and-motion/boomerang) |  | Use it to weaponize a small motion: hair toss, splash, a jump&#39;s peak, a door | `melies-videos/time-and-motion/boomerang/`（4 条） |
| [Bullet Time](https://melies.co/cinematic-techniques/time-and-motion/bullet-time) | 子弹时间 | Use it when a split-second decision should become architecture. The audience see | `melies-videos/time-and-motion/bullet-time/`（4 条） |
| [Fast Motion](https://melies.co/cinematic-techniques/time-and-motion/fast-motion) | 快动作 | Use it when real time cannot hold the life in front of the lens: a factory that  | `melies-videos/time-and-motion/fast-motion/`（4 条） |
| [Freeze Frame](https://melies.co/cinematic-techniques/time-and-motion/freeze-frame) | 定格 | Use it when the fact is the picture itself: a boy at the edge of the sea, a narr | `melies-videos/time-and-motion/freeze-frame/`（3 条） |
| [Frozen in Motion](https://melies.co/cinematic-techniques/time-and-motion/frozen-in-motion) |  | Use it to separate a mind from consequence: superhuman perception, a wish to ste | `melies-videos/time-and-motion/frozen-in-motion/`（4 条） |
| [Infinite Loop](https://melies.co/cinematic-techniques/time-and-motion/infinite-loop) |  | As a picture machine, design a motion whose end state matches its start: positio | `melies-videos/time-and-motion/infinite-loop/`（4 条） |
| [Long Take](https://melies.co/cinematic-techniques/time-and-motion/long-take) | 长镜头 | Use it when incompatible facts must coexist in one geography: boredom beside dan | `melies-videos/time-and-motion/long-take/`（4 条） |
| [Low Shutter](https://melies.co/cinematic-techniques/time-and-motion/low-shutter) |  | Use it when impact and sensory stress should feel exposed: rain as beads, limbs  | `melies-videos/time-and-motion/low-shutter/`（4 条） |
| [Moonwalk](https://melies.co/cinematic-techniques/time-and-motion/moonwalk) |  | Use it when gait itself is the spectacle: dance, a villain who does not obey flo | `melies-videos/time-and-motion/moonwalk/`（4 条） |
| [Motion Blur](https://melies.co/cinematic-techniques/time-and-motion/motion-blur) |  | Use it when speed or trauma should smear: headlights as ribbons, a body that can | `melies-videos/time-and-motion/motion-blur/`（4 条） |
| [Oner](https://melies.co/cinematic-techniques/time-and-motion/one-er) |  | Use it when geography, breath, and choreography should feel like one continuous  | `melies-videos/time-and-motion/one-er/`（4 条） |
| [Reverse Motion](https://melies.co/cinematic-techniques/time-and-motion/reverse-motion) | 倒放 | Use it for trick photography, grief that wants an undo, or a world whose physics | `melies-videos/time-and-motion/reverse-motion/`（4 条） |
| [Slow Motion](https://melies.co/cinematic-techniques/time-and-motion/slow-motion) | 慢动作 | Use it when a second already contains a scene: a fall, a look that decides, a hi | `melies-videos/time-and-motion/slow-motion/`（4 条） |
| [Speed Ramp](https://melies.co/cinematic-techniques/time-and-motion/speed-ramp) | 变速（速度斜坡） | Treat it as temporal close-up. The shot walks up in real time, lands on the fact | `melies-videos/time-and-motion/speed-ramp/`（4 条） |
| [Step Printing](https://melies.co/cinematic-techniques/time-and-motion/step-printing) |  | Use it for longing that cannot move at normal speed: a walk through rain, a purs | `melies-videos/time-and-motion/step-printing/`（4 条） |
| [Stop Motion](https://melies.co/cinematic-techniques/time-and-motion/stop-motion) |  | Use it when motion should feel made: puppets, replacement faces, dinosaurs that  | `melies-videos/time-and-motion/stop-motion/`（3 条） |
| [Stutter / Stop-Stutter](https://melies.co/cinematic-techniques/time-and-motion/stutter) |  | Use it when thought itself is damaged: obsession, panic, a headache that cuts ti | `melies-videos/time-and-motion/stutter/`（4 条） |
| [Time-Lapse](https://melies.co/cinematic-techniques/time-and-motion/time-lapse) | 延时摄影 | Use it to reveal a pattern no one can stand still long enough to see. Weather, c | `melies-videos/time-and-motion/time-lapse/`（4 条） |
| [Timelapse Glam](https://melies.co/cinematic-techniques/time-and-motion/timelapse-glam) |  | Use it to show transformation as labor rather than as a cut to a new costume. St | `melies-videos/time-and-motion/timelapse-glam/`（3 条） |
| [Timelapse Human](https://melies.co/cinematic-techniques/time-and-motion/timelapse-human) |  | Use it when isolation is a rate difference: the subject decides, waits, or griev | `melies-videos/time-and-motion/timelapse-human/`（4 条） |
| [Timelapse Landscape](https://melies.co/cinematic-techniques/time-and-motion/timelapse-landscape) |  | Use it when the story is a sky, a desert, a city grid as climate, a ridge that m | `melies-videos/time-and-motion/timelapse-landscape/`（4 条） |

#### effects · 机内与光学效果（57 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [Altered State](https://melies.co/cinematic-techniques/effects/altered-state) |  | Edges trail. Hue unhooks from the room. A face leaves a stain. Focus and speed r | `melies-videos/effects/altered-state/`（2 条） |
| [Anamorphic Flare](https://melies.co/cinematic-techniques/effects/anamorphic-flare) | 变形镜头光晕 | Night lamps and headlights write a bar across the frame because the front optic  | `melies-videos/effects/anamorphic-flare/`（3 条） |
| [Anthropo](https://melies.co/cinematic-techniques/effects/anthropo) |  | A red balloon waits, follows, sulks. A robot tilts its head at a trash cube. The | `melies-videos/effects/anthropo/`（3 条） |
| [Argus](https://melies.co/cinematic-techniques/effects/argus) |  | Surveillance becomes anatomy. A wall of cameras. A god covered in irises. Use it | `melies-videos/effects/argus/`（4 条） |
| [Bokeh](https://melies.co/cinematic-techniques/effects/bokeh) | 焦外成像 | A city, a string of practicals, or a wet street becomes a field of discs. Circul | `melies-videos/effects/bokeh/`（3 条） |
| [Bubbles](https://melies.co/cinematic-techniques/effects/bubbles) |  | A face repeats in a drifting sphere. Joy or threat depends on the light. Use it  | `melies-videos/effects/bubbles/`（3 条） |
| [Chromatic Aberration](https://melies.co/cinematic-techniques/effects/chromatic-aberration) | 色差 | Cheap, wide, or vintage glass fails to put all colors on the same plane. A branc | `melies-videos/effects/chromatic-aberration/`（2 条） |
| [Cinemagraph](https://melies.co/cinematic-techniques/effects/cinemagraph) |  | The picture looks dead, then a kettle breathes. A coat is still. Only the rain t | `melies-videos/effects/cinemagraph/`（4 条） |
| [Collage](https://melies.co/cinematic-techniques/effects/collage) |  | A head from one still, a building from another, newsprint, a painted sky. You ca | `melies-videos/effects/collage/`（2 条） |
| [Cyclope](https://melies.co/cinematic-techniques/effects/cyclope) |  | A machine stares. A lighthouse stares. A god stares. Distortion is the character | `melies-videos/effects/cyclope/`（4 条） |
| [Datamosh](https://melies.co/cinematic-techniques/effects/datamosh) |  | The I-frame never arrives. P-frames keep describing motion that no longer has a  | `melies-videos/effects/datamosh/`（3 条） |
| [Deep Focus](https://melies.co/cinematic-techniques/effects/deep-focus) | 深焦 | A hand stamps a form near the lens. A visitor waits in a distant doorway. Both a | `melies-videos/effects/deep-focus/`（4 条） |
| [Diorama](https://melies.co/cinematic-techniques/effects/diorama) |  | A city, a ship, a hotel wing sits on a table or a stage, built at an inch to the | `melies-videos/effects/diorama/`（4 条） |
| [Distortions](https://melies.co/cinematic-techniques/effects/distortions) |  | Walls lean. Faces balloon as they near the glass. A hallway breathes. Space is n | `melies-videos/effects/distortions/`（3 条） |
| [Double Exposure](https://melies.co/cinematic-techniques/effects/double-exposure) | 双重曝光 | A face in a city. A ghost in rain. Fireplace flames laid over a locked interior. | `melies-videos/effects/double-exposure/`（3 条） |
| [Duplication](https://melies.co/cinematic-techniques/effects/duplication) |  | One person is not a single self. Two performances share a kitchen. They argue, p | `melies-videos/effects/duplication/`（3 条） |
| [Echo Print](https://melies.co/cinematic-techniques/effects/echo-print) |  | Use it when a gesture has already happened and the present cannot shake it. A he | `melies-videos/effects/echo-print/`（3 条） |
| [Feedback](https://melies.co/cinematic-techniques/effects/feedback) |  | The medium stares at itself. A face on a tube is recaptured, recaptured again, a | `melies-videos/effects/feedback/`（3 条） |
| [Film Grain](https://melies.co/cinematic-techniques/effects/film-grain) | 胶片颗粒 | The image is made of particles that change every frame. Shadows crawl. Midtones  | `melies-videos/effects/film-grain/`（3 条） |
| [Floating Fall](https://melies.co/cinematic-techniques/effects/floating-fall) |  | Someone has left the roof. The coat opens late. Hair hangs. The street is still  | `melies-videos/effects/floating-fall/`（4 条） |
| [Floating UI](https://melies.co/cinematic-techniques/effects/floating-ui) |  | A hand reaches into a diagram. Callouts hang beside a face. The camera can dolly | `melies-videos/effects/floating-ui/`（3 条） |
| [Focal Shift](https://melies.co/cinematic-techniques/effects/focal-shift) |  | Someone in the foreground owns the frame, then the helix turns and a face in the | `melies-videos/effects/focal-shift/`（4 条） |
| [Focus Change](https://melies.co/cinematic-techniques/effects/focus-change) |  | A glass goes soft. A face snaps true. Attention relocates. Use it when the point | `melies-videos/effects/focus-change/`（4 条） |
| [Forced Perspective](https://melies.co/cinematic-techniques/effects/forced-perspective) | 强迫透视 | A small adult sits at a table with a full-sized host. The table is built in two  | `melies-videos/effects/forced-perspective/`（4 条） |
| [Generative](https://melies.co/cinematic-techniques/effects/generative) |  | A body, a city, or a cloud is not posed. It is grown. Cells, grains, or agents i | `melies-videos/effects/generative/`（4 条） |
| [Halation](https://melies.co/cinematic-techniques/effects/halation) | 光晕溢出 | A lamp, a window, or a candle does not clip to a hard video edge. The highlight  | `melies-videos/effects/halation/`（3 条） |
| [Infrared](https://melies.co/cinematic-techniques/effects/infrared) |  | The woods are white. The sky is near black. Faces are wrong in a quiet way: vein | `melies-videos/effects/infrared/`（2 条） |
| [Kaleidoscope](https://melies.co/cinematic-techniques/effects/kaleidoscope) |  | A shard repeats. A face, a limb, a lamp becomes an ornament. Busby Berkeley buil | `melies-videos/effects/kaleidoscope/`（2 条） |
| [Lens Flare](https://melies.co/cinematic-techniques/effects/lens-flare) | 镜头光晕 | When a hard source sits near or inside the frame, the camera admits it cannot co | `melies-videos/effects/lens-flare/`（3 条） |
| [Levitation](https://melies.co/cinematic-techniques/effects/levitation) |  | Someone leaves the floor and stays. The room does not drop away. The camera ofte | `melies-videos/effects/levitation/`（4 条） |
| [Light Flash](https://melies.co/cinematic-techniques/effects/light-flash) |  | The picture goes. For a few frames there is only density failure: a bulb, a muzz | `melies-videos/effects/light-flash/`（3 条） |
| [Light Leak](https://melies.co/cinematic-techniques/effects/light-leak) | 漏光 | The frame is wounded at the border. A wash of orange, red, or white eats density | `melies-videos/effects/light-leak/`（3 条） |
| [Masking](https://melies.co/cinematic-techniques/effects/masking) |  | The audience is made to look as a character looks. A circle of night, a door slo | `melies-videos/effects/masking/`（4 条） |
| [Morph](https://melies.co/cinematic-techniques/effects/match-morph) |  | A face does not cut to another face. Vertices travel. The nose, the jaw, the sil | `melies-videos/effects/match-morph/`（3 条） |
| [Mixed Media](https://melies.co/cinematic-techniques/effects/mixed-media) |  | A face is a photograph. The wall is a drawing. A headline sits on the glass. Use | `melies-videos/effects/mixed-media/`（3 条） |
| [Morphing](https://melies.co/cinematic-techniques/effects/morphing) |  | A face becomes another face while the eyes stay aligned. A body interpolates tow | `melies-videos/effects/morphing/`（4 条） |
| [Night Vision](https://melies.co/cinematic-techniques/effects/night-vision) |  | Someone is hunting or hiding. The world is a tube. Speculars bloom. Resolution i | `melies-videos/effects/night-vision/`（2 条） |
| [Object Portal](https://melies.co/cinematic-techniques/effects/object-portal) |  | A filing cabinet leads to a tunnel. A mirror becomes a corridor. A phone swallow | `melies-videos/effects/object-portal/`（3 条） |
| [Particles](https://melies.co/cinematic-techniques/effects/particles) |  | A shaft becomes a census. Embers drift. Flour hangs. Use it when the air should  | `melies-videos/effects/particles/`（2 条） |
| [Photogrammetry](https://melies.co/cinematic-techniques/effects/photogrammetry) |  | The camera can orbit a courtyard that was photographed, not built. Faces of ston | `melies-videos/effects/photogrammetry/`（4 条） |
| [Projections](https://melies.co/cinematic-techniques/effects/projection-mapping) |  | Actors stand on a rocky foreground. Behind them a desert plate is thrown, coaxia | `melies-videos/effects/projection-mapping/`（2 条） |
| [Rack Focus](https://melies.co/cinematic-techniques/effects/rack-focus) | 移焦 | A brass key is sharp on a desk. The woman in the doorway is soft. Over about two | `melies-videos/effects/rack-focus/`（4 条） |
| [Ratio Switch](https://melies.co/cinematic-techniques/effects/ratio-switch) |  | A square world learns it can become a wide one. A scope picture suddenly sits in | `melies-videos/effects/ratio-switch/`（3 条） |
| [Scale Shift](https://melies.co/cinematic-techniques/effects/scale-shift) |  | A person stands in a kitchen and the table is a landscape. Or a hand is a buildi | `melies-videos/effects/scale-shift/`（3 条） |
| [Selfie Twin](https://melies.co/cinematic-techniques/effects/selfie-twin) |  | They posed with themselves. One is slightly closer. Both share the same cheap ke | `melies-videos/effects/selfie-twin/`（4 条） |
| [Shadow Box](https://melies.co/cinematic-techniques/effects/shadow-box) |  | A procession of blacks: a rider, a tree, a palace, each on its own plane. Use it | `melies-videos/effects/shadow-box/`（4 条） |
| [Shallow Focus](https://melies.co/cinematic-techniques/effects/shallow-focus) | 浅景深 | The near eye is true. Ears, wallpaper, and the street outside go. Isolation is o | `melies-videos/effects/shallow-focus/`（3 条） |
| [Slit-Scan](https://melies.co/cinematic-techniques/effects/slit-scan) |  | A slit is the only open part of the gate. Artwork or a light source moves relati | `melies-videos/effects/slit-scan/`（3 条） |
| [Smash and Grab](https://melies.co/cinematic-techniques/effects/smash-and-grab) |  | A pane goes. A hand already leaves. Flash or streetlight strobes the shards. Use | `melies-videos/effects/smash-and-grab/`（4 条） |
| [Sticker Peel](https://melies.co/cinematic-techniques/effects/sticker-peel) |  | A corner of the frame rolls. Underneath is another layer or the street. Use it w | `melies-videos/effects/sticker-peel/`（3 条） |
| [Thermal](https://melies.co/cinematic-techniques/effects/thermal) |  | You are not lighting the scene. You are reading temperature. A body is a mask. A | `melies-videos/effects/thermal/`（1 条） |
| [Transformation](https://melies.co/cinematic-techniques/effects/transformation) |  | A kiss turns the restaurant into a memory. A man becomes an animal in stages. A  | `melies-videos/effects/transformation/`（3 条） |
| [Typography](https://melies.co/cinematic-techniques/effects/typography) |  | A name walks the street. A credit is scratched into a notebook. Type pursues a f | `melies-videos/effects/typography/`（3 条） |
| [Vignette](https://melies.co/cinematic-techniques/effects/vignette) | 暗角 | The corners lose stop. Attention pools in the center without a spotlight on the  | `melies-videos/effects/vignette/`（1 条） |
| [Wigglegram](https://melies.co/cinematic-techniques/effects/wigglegram) |  | A postcard comes alive as a cheap lenticular. The subject stays almost still. Th | `melies-videos/effects/wigglegram/`（4 条） |
| [X-Ray](https://melies.co/cinematic-techniques/effects/x-ray) |  | Skin becomes a veil. The interior is the subject. Use it when the story needs to | `melies-videos/effects/x-ray/`（1 条） |
| [Zoetrope](https://melies.co/cinematic-techniques/effects/zoetrope) |  | A horse&#39;s legs become a ring of stills. A spinning body is a drum of slices. | `melies-videos/effects/zoetrope/`（4 条） |

#### editing · 剪辑与转场（23 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [Axial Cut](https://melies.co/cinematic-techniques/editing/axial-cut) |  | A farmhouse kitchen, then the same kitchen larger, then an eye socket you were n | `melies-videos/editing/axial-cut/`（4 条） |
| [Crash Cut](https://melies.co/cinematic-techniques/editing/crash-cut) |  | A trunk, a man, a knife already in play, then the story will explain how we got  | `melies-videos/editing/crash-cut/`（4 条） |
| [Cross-Cutting](https://melies.co/cinematic-techniques/editing/cross-cut) |  | A baptism in one room. Killings in others. The film does not wait for one to fin | `melies-videos/editing/cross-cut/`（4 条） |
| [Dissolve](https://melies.co/cinematic-techniques/editing/dissolve) | 叠化 | A face thins. A landscape thickens through it. Time has passed, or memory has, a | `melies-videos/editing/dissolve/`（3 条） |
| [Fade In / Fade Out](https://melies.co/cinematic-techniques/editing/fade) |  | The room goes. Red remains, or black does, long enough to feel like a closed boo | `melies-videos/editing/fade/`（4 条） |
| [Flash Cut](https://melies.co/cinematic-techniques/editing/flash-cut) |  | A face in a room. Three frames of a well, a tape, a child. The room again. You c | `melies-videos/editing/flash-cut/`（4 条） |
| [Fragments](https://melies.co/cinematic-techniques/editing/fragments) |  | You never get the master. You get a sleeve, a missed catch, a face, ceramic alre | `melies-videos/editing/fragments/`（3 条） |
| [Graphic Match](https://melies.co/cinematic-techniques/editing/graphic-match) |  | You leave a drain, circular, centered. You arrive on an eye, circular, centered. | `melies-videos/editing/graphic-match/`（4 条） |
| [Invisible Cut](https://melies.co/cinematic-techniques/editing/invisible-cut) | 隐形剪辑 | A coat fills the lens. When it leaves, the room is later, or the body is gone, o | `melies-videos/editing/invisible-cut/`（4 条） |
| [Iris](https://melies.co/cinematic-techniques/editing/iris) | 光圈转场 | The hall is there. The circle tightens on a satisfied face, then opens a little  | `melies-videos/editing/iris/`（3 条） |
| [Jump Cut](https://melies.co/cinematic-techniques/editing/jump-cut) | 跳切 | The car is the same. The road is the same. The speaker has jumped three sentence | `melies-videos/editing/jump-cut/`（4 条） |
| [J-Cut / L-Cut (Visual Setup)](https://melies.co/cinematic-techniques/editing/l-cut-visual) |  | We hear the next room before we see it (J-cut): the picture stays on the walker, | `melies-videos/editing/l-cut-visual/`（4 条） |
| [Match on Action](https://melies.co/cinematic-techniques/editing/match-action) |  | A hand reaches for a handle in a wide. In the close shot the same hand, same spe | `melies-videos/editing/match-action/`（4 条） |
| [Match Cut](https://melies.co/cinematic-techniques/editing/match-cut) | 匹配剪辑 | One side of the join is complete. The other side is complete. What they share is | `melies-videos/editing/match-cut/`（4 条） |
| [Match Motion](https://melies.co/cinematic-techniques/editing/match-motion) |  | A fall toward a mattress becomes a fall toward grass. A dive into a pool complet | `melies-videos/editing/match-motion/`（4 条） |
| [Match Split](https://melies.co/cinematic-techniques/editing/match-split) |  | A table edge runs from a 1960s kitchen into a present-day diner. A face is halve | `melies-videos/editing/match-split/`（4 条） |
| [Montage](https://melies.co/cinematic-techniques/editing/montage) | 蒙太奇 | Workers, then a slaughterhouse. The cut is an argument. Or: sweat, rope, steps,  | `melies-videos/editing/montage/`（4 条） |
| [Quick Cuts](https://melies.co/cinematic-techniques/editing/quick-cuts) |  | Eyes, hands, a kit, a face, the room, the stick, faster. You feel a release comi | `melies-videos/editing/quick-cuts/`（4 条） |
| [Set Transition](https://melies.co/cinematic-techniques/editing/set-transition) |  | A dressing room wall slides and you are in a nightclub. A theatre door is a stre | `melies-videos/editing/set-transition/`（4 条） |
| [Smash Cut](https://melies.co/cinematic-techniques/editing/smash-cut) | 硬切 | A night walk tightens. A bus door hisses into the frame. The scare was a vehicle | `melies-videos/editing/smash-cut/`（4 条） |
| [Split Screen](https://melies.co/cinematic-techniques/editing/split-screen) | 分屏 | A phone call places two apartments in one picture. A party splits into the night | `melies-videos/editing/split-screen/`（4 条） |
| [Transitions](https://melies.co/cinematic-techniques/editing/transitions) |  | A wipe turns a page. A match claims an idea. A dissolve remembers. A whip throws | `melies-videos/editing/transitions/`（4 条） |
| [Wipe](https://melies.co/cinematic-techniques/editing/wipe) | 划像 | A vertical line walks left to right and a village becomes a mountain pass. Geogr | `melies-videos/editing/wipe/`（4 条） |

#### atmosphere · 氛围与天气（13 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [Dust Motes](https://melies.co/cinematic-techniques/atmosphere/dust-motes) | 浮尘 | A window cuts a wedge through a closed parlor. Specks drift, rise, fall. Stillne | `melies-videos/atmosphere/dust-motes/`（1 条） |
| [Dust and Sand](https://melies.co/cinematic-techniques/atmosphere/dust-storm) |  | A rider is a cutout. The sun is a disk you can look at. Grit crawls across metal | `melies-videos/atmosphere/dust-storm/`（0 条） |
| [Fog](https://melies.co/cinematic-techniques/atmosphere/fog) | 雾 | A sodium lamp becomes a ball. A platform ends in nothing. A coat arrives late, a | `melies-videos/atmosphere/fog/`（0 条） |
| [Atmospheric Haze](https://melies.co/cinematic-techniques/atmosphere/haze) |  | A citadel sits in a paler key than the rider. The next cliff is paler still. Sho | `melies-videos/atmosphere/haze/`（0 条） |
| [Mist](https://melies.co/cinematic-techniques/atmosphere/mist) | 薄雾 | Ridges stack as paler copies of themselves. A horse is readable, then a second r | `melies-videos/atmosphere/mist/`（0 条） |
| [Ocean](https://melies.co/cinematic-techniques/atmosphere/ocean) |  | A mole, a boat, a body: small. The horizon is a line that can kill you. Swell ha | `melies-videos/atmosphere/ocean/`（2 条） |
| [Rain](https://melies.co/cinematic-techniques/atmosphere/rain) | 雨 | Silver needles between a lamp and the lens. Shoulders darken. Puddles double the | `melies-videos/atmosphere/rain/`（0 条） |
| [Smoke](https://melies.co/cinematic-techniques/atmosphere/smoke) | 烟 | A practical lamp becomes a wedge through grey air. A drag on a cigarette writes  | `melies-videos/atmosphere/smoke/`（0 条） |
| [Snow](https://melies.co/cinematic-techniques/atmosphere/snow) | 雪 | Flakes cross a sodium lamp like slow sparks that do not burn. Shoulders collect  | `melies-videos/atmosphere/snow/`（0 条） |
| [Sparks and Embers](https://melies.co/cinematic-techniques/atmosphere/sparks) |  | A welder writes a fountain. A collapsing floor throws embers that hang, then die | `melies-videos/atmosphere/sparks/`（1 条） |
| [Steam](https://melies.co/cinematic-techniques/atmosphere/steam) |  | A locomotive writes a column that the platform wind tears. A manhole breathes. A | `melies-videos/atmosphere/steam/`（0 条） |
| [Underwater](https://melies.co/cinematic-techniques/atmosphere/underwater) | 水下 | Hair and cloth delay. Light arrives as moving lattice from a surface that is now | `melies-videos/atmosphere/underwater/`（2 条） |
| [Wet-Down](https://melies.co/cinematic-techniques/atmosphere/wet-down) |  | Sodium, neon, a traffic headlamp: each finds a second copy on blacktop. Night ex | `melies-videos/atmosphere/wet-down/`（0 条） |

#### genre-looks · 类型风格（27 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [Animation](https://melies.co/cinematic-techniques/genre-looks/animation) |  | A drawing can hold a smear. A painted film can ignore a 180-degree shutter. Spid | `melies-videos/genre-looks/animation/`（1 条） |
| [Arthouse](https://melies.co/cinematic-techniques/genre-looks/arthouse) | 艺术电影 | Someone sits. The room keeps being a room. Headroom is a little wrong. The light | `melies-videos/genre-looks/arthouse/`（2 条） |
| [Blockbuster Gloss](https://melies.co/cinematic-techniques/genre-looks/blockbuster-gloss) |  | Adventure as a still that could sell the film. Faces are shaped. Horizons are cl | `melies-videos/genre-looks/blockbuster-gloss/`（0 条） |
| [BTS](https://melies.co/cinematic-techniques/genre-looks/bts) |  | The shot admits the apparatus. An actor holds a mark. A boom dips. The apartment | `melies-videos/genre-looks/bts/`（0 条） |
| [Cinéma Vérité](https://melies.co/cinematic-techniques/genre-looks/cinema-verite) |  | Life is not staged for a key light. Someone talks, the zoom finds them, a window | `melies-videos/genre-looks/cinema-verite/`（1 条） |
| [Cosmic Horror](https://melies.co/cinematic-techniques/genre-looks/cosmic-horror-look) |  | The frame makes the person a mistake. A horizon does not match. A structure has  | `melies-videos/genre-looks/cosmic-horror-look/`（0 条） |
| [Documentary](https://melies.co/cinematic-techniques/genre-looks/documentary-look) |  | The camera claims evidence. A sit-down by a window. A wide of work being done. A | `melies-videos/genre-looks/documentary-look/`（1 条） |
| [Dreamcore](https://melies.co/cinematic-techniques/genre-looks/dreamcore) |  | A corridor continues too far. A fluorescent is a little green. A window is over- | `melies-videos/genre-looks/dreamcore/`（1 条） |
| [Dystopian](https://melies.co/cinematic-techniques/genre-looks/dystopian) | 废土/反乌托邦 | A checkpoint. A tower. A crowd compressed by a long lens, or a handheld walk thr | `melies-videos/genre-looks/dystopian/`（1 条） |
| [Film Noir](https://melies.co/cinematic-techniques/genre-looks/film-noir) | 黑色电影 | The shot withholds the room. A face is half a mask. Guilt has to live in the sli | `melies-videos/genre-looks/film-noir/`（0 条） |
| [Found Footage](https://melies.co/cinematic-techniques/genre-looks/found-footage-look) |  | Knowledge is limited to what the operator can point at. What the camera misses i | `melies-videos/genre-looks/found-footage-look/`（2 条） |
| [French New Wave](https://melies.co/cinematic-techniques/genre-looks/french-new-wave) | 法国新浪潮 | Youth and impatience with studio polish. A character talks to the lens. A walk i | `melies-videos/genre-looks/french-new-wave/`（2 条） |
| [German Expressionism](https://melies.co/cinematic-techniques/genre-looks/german-expressionism) | 德国表现主义 | Psychology is built, not implied. A staircase leans. A shadow is bigger than the | `melies-videos/genre-looks/german-expressionism/`（1 条） |
| [Giallo](https://melies.co/cinematic-techniques/genre-looks/giallo-look) |  | Horror here is also wardrobe. A cobalt window, a red hallway, black leather in t | `melies-videos/genre-looks/giallo-look/`（1 条） |
| [Magical Realism](https://melies.co/cinematic-techniques/genre-looks/magical-realism) | 魔幻现实主义 | A girl sees a monster and the exposure does not change. Snow falls in a kitchen  | `melies-videos/genre-looks/magical-realism/`（0 条） |
| [Maximalism](https://melies.co/cinematic-techniques/genre-looks/maximalism) |  | Wallpaper fights the costume. A pastry fights the uniform. Pink fights purple. T | `melies-videos/genre-looks/maximalism/`（0 条） |
| [Neo-Noir](https://melies.co/cinematic-techniques/genre-looks/neo-noir) | 新黑色 | The city is still a trap, but the trap has a hue. Rain carries magenta and cyan. | `melies-videos/genre-looks/neo-noir/`（0 条） |
| [Photography](https://melies.co/cinematic-techniques/genre-looks/photography) |  | Hold. This is the picture. A candlelit room is arranged like a painting. A river | `melies-videos/genre-looks/photography/`（1 条） |
| [Pixel Art](https://melies.co/cinematic-techniques/genre-looks/pixel-art) | 像素艺术 | The world is tiles. If the beat is actually Video Game , change the setup instea | `melies-videos/genre-looks/pixel-art/`（1 条） |
| [Southern Gothic](https://melies.co/cinematic-techniques/genre-looks/southern-gothic) |  | Beauty is rotting. A house peels. Sweat holds on skin. Sun through moss becomes  | `melies-videos/genre-looks/southern-gothic/`（0 条） |
| [Spaghetti Western](https://melies.co/cinematic-techniques/genre-looks/spaghetti-western) | 意大利西部片 | Myth is dirt, sweat, and a horizon that refuses shade. The sun is a weapon. A Co | `melies-videos/genre-looks/spaghetti-western/`（1 条） |
| [Stylistic Suck](https://melies.co/cinematic-techniques/genre-looks/stylistic-suck) |  | Auto-exposure pumps. A zoom overshoots a face. Fluorescent kitchens go green. Hi | `melies-videos/genre-looks/stylistic-suck/`（2 条） |
| [Tech Noir](https://melies.co/cinematic-techniques/genre-looks/tech-noir) |  | The future is wet and guilty. A detective, a fugitive, or a machine walks rain t | `melies-videos/genre-looks/tech-noir/`（0 条） |
| [Vaporwave](https://melies.co/cinematic-techniques/genre-looks/vaporwave-look) |  | Nostalgia for a catalog that closed. A bust, a grid floor, Japanese retail signa | `melies-videos/genre-looks/vaporwave-look/`（0 条） |
| [Video Game](https://melies.co/cinematic-techniques/genre-looks/video-game) | 游戏风格 | The world is playable. A character moves and the camera booms behind at a fixed  | `melies-videos/genre-looks/video-game/`（2 条） |
| [Weirdcore](https://melies.co/cinematic-techniques/genre-looks/weirdcore) |  | A face is cut by the frame edge. A caption sits in a default font. JPEG blocks c | `melies-videos/genre-looks/weirdcore/`（1 条） |
| [Wuxia](https://melies.co/cinematic-techniques/genre-looks/wuxia-look) |  | The fight is a poem in a real (or studio-built) landscape. A body travels a wire | `melies-videos/genre-looks/wuxia-look/`（0 条） |

#### viral-looks · 病毒式流行风格（44 项）

| 英文术语 | 中文 | 叙事功能一句话 | 本地视频 |
|---|---|---|---|
| [2000s Paparazzi](https://melies.co/cinematic-techniques/viral-looks/2000s-paparazzi) |  | Scandal, youth, a character hunted by attention: club rope, sidewalk, car door,  | `melies-videos/viral-looks/2000s-paparazzi/`（3 条） |
| [3D Render](https://melies.co/cinematic-techniques/viral-looks/3d-render) |  | Fashion that wants to be a toy, ads, a character who is not quite flesh: studio  | `melies-videos/viral-looks/3d-render/`（1 条） |
| [Acid](https://melies.co/cinematic-techniques/viral-looks/acid) |  | Nights that went wrong, posters, a memory that chemically failed: a face still h | `melies-videos/viral-looks/acid/`（2 条） |
| [Action Figure](https://melies.co/cinematic-techniques/viral-looks/action-figure) |  | Satire, kid myth, a hero reduced to product: one figure, diorama base, rivets, p | `melies-videos/viral-looks/action-figure/`（2 条） |
| [Agamemnon](https://melies.co/cinematic-techniques/viral-looks/agamemnon) |  | Use it on a beat where the person is already doomed and the sky agrees. A rider  | `melies-videos/viral-looks/agamemnon/`（1 条） |
| [Akrill](https://melies.co/cinematic-techniques/viral-looks/akrill) |  | Pop, a kids&#39; myth, a poster that came alive: graphic shapes, a face still mo | `melies-videos/viral-looks/akrill/`（1 条） |
| [Blue Depth](https://melies.co/cinematic-techniques/viral-looks/blue-depth) |  | Isolation, awe, a swim, a skyline: a body, a pier, a tower that proves scale. Fo | `melies-videos/viral-looks/blue-depth/`（2 条） |
| [Broken Mirror](https://melies.co/cinematic-techniques/viral-looks/broken-mirror) |  | Breakdowns, vanity, a lie: bathroom or dressing-room practical, silver in the ne | `melies-videos/viral-looks/broken-mirror/`（2 条） |
| [Canvas](https://melies.co/cinematic-techniques/viral-looks/canvas) |  | Portraits that should feel made by hand, credits, a memory: you still compose a  | `melies-videos/viral-looks/canvas/`（0 条） |
| [Casual Monster Slayer](https://melies.co/cinematic-techniques/viral-looks/casual-monster-slayer) |  | Keep the tote bag. Make the dragon expensive. A person in a hoodie or an undersh | `melies-videos/viral-looks/casual-monster-slayer/`（2 条） |
| [Cold Vision](https://melies.co/cinematic-techniques/viral-looks/cold-vision) |  | Hunts, winter war, a stalker POV: faces become warmer than walls if you are in t | `melies-videos/viral-looks/cold-vision/`（1 条） |
| [Comic](https://melies.co/cinematic-techniques/viral-looks/comic) |  | Origin stories, punchlines, a city that should look published: the person still  | `melies-videos/viral-looks/comic/`（2 条） |
| [Dolphin Ride](https://melies.co/cinematic-techniques/viral-looks/dolphin-ride) |  | Vacation myths, dream logistics, a postcard that cannot be true: the face is ser | `melies-videos/viral-looks/dolphin-ride/`（3 条） |
| [Fairytale Castle](https://melies.co/cinematic-techniques/viral-looks/fairytale-castle) |  | The arrival, the exile, the love story that needs a kingdom: a causeway, window  | `melies-videos/viral-looks/fairytale-castle/`（1 条） |
| [Fallen Angel](https://melies.co/cinematic-techniques/viral-looks/fallen-angel) |  | The fall already happened. You are photographing the minute after: a nave, a cli | `melies-videos/viral-looks/fallen-angel/`（1 条） |
| [Flash Comic](https://melies.co/cinematic-techniques/viral-looks/flash-comic) |  | Punches, reveals, a joke that should look published and stolen: subject mid-gest | `melies-videos/viral-looks/flash-comic/`（3 条） |
| [Hand Paint](https://melies.co/cinematic-techniques/viral-looks/hand-paint) |  | Making, memory, a portrait being invented: photographic underlayer, color still  | `melies-videos/viral-looks/hand-paint/`（0 条） |
| [Ink Riot](https://melies.co/cinematic-techniques/viral-looks/ink-riot) |  | The shot is a page that fought back. Hold the person. Let ink do the violence: a | `melies-videos/viral-looks/ink-riot/`（2 条） |
| [Knight&#39;s Diary](https://melies.co/cinematic-techniques/viral-looks/knights-diary) |  | Quest, confession, a modern person dressed by a medieval grade: gold in the high | `melies-videos/viral-looks/knights-diary/`（1 条） |
| [Lava](https://melies.co/cinematic-techniques/viral-looks/lava) |  | Ends of worlds, rage, a love that burns the set: night helps, a small figure, in | `melies-videos/viral-looks/lava/`（1 条） |
| [Lost in a Book](https://melies.co/cinematic-techniques/viral-looks/lost-in-a-book) |  | Childhood, grief, a story that eats the teller: hands and paper close to lens, a | `melies-videos/viral-looks/lost-in-a-book/`（2 条） |
| [LSD](https://melies.co/cinematic-techniques/viral-looks/lsd) |  | Altered nights, music, a breakdown: one street or one room that will not stay pu | `melies-videos/viral-looks/lsd/`（4 条） |
| [Magazine](https://melies.co/cinematic-techniques/viral-looks/magazine) |  | Arrivals, identity as product, fashion: beauty key, clean edges, negative space  | `melies-videos/viral-looks/magazine/`（1 条） |
| [Marble](https://melies.co/cinematic-techniques/viral-looks/marble) |  | Myths, fashion, a character already monumentalized: museum cold, a body that cou | `melies-videos/viral-looks/marble/`（1 条） |
| [Mighty Fighter](https://melies.co/cinematic-techniques/viral-looks/mighty-fighter) |  | Title cards, arrivals, comic action: one figure, three-quarter low, stance wider | `melies-videos/viral-looks/mighty-fighter/`（2 条） |
| [Modern](https://melies.co/cinematic-techniques/viral-looks/modern) |  | Alienation, wealth, a talk that should feel like a showroom: large planes, dayli | `melies-videos/viral-looks/modern/`（1 条） |
| [Monet Muse](https://melies.co/cinematic-techniques/viral-looks/monet-muse) |  | Idylls, memory, a picnic that should feel painted: a high sun, a garden or a riv | `melies-videos/viral-looks/monet-muse/`（0 条） |
| [Multiverse](https://melies.co/cinematic-techniques/viral-looks/multiverse) |  | Choice, regret, comic overload: two or three worlds sharing a frame, identity lo | `melies-videos/viral-looks/multiverse/`（3 条） |
| [Noir](https://melies.co/cinematic-techniques/viral-looks/noir) |  | Crime, conscience, a city that judges: one practical in the deep, smoke optional | `melies-videos/viral-looks/noir/`（0 条） |
| [Orbital Presence](https://melies.co/cinematic-techniques/viral-looks/orbital-presence) |  | Awe, exile, a god complex: the body is small on purpose, black air, planet occup | `melies-videos/viral-looks/orbital-presence/`（3 条） |
| [Origami](https://melies.co/cinematic-techniques/viral-looks/origami) |  | Myths, titles, a delicate threat: visible creases, hard studio or sun, edges sha | `melies-videos/viral-looks/origami/`（1 条） |
| [Paper](https://melies.co/cinematic-techniques/viral-looks/paper) |  | Titles, stop-motion paper , a figure that has been scissored from stock: hard or | `melies-videos/viral-looks/paper/`（0 条） |
| [Pearl Earring](https://melies.co/cinematic-techniques/viral-looks/pearl-earring) |  | Portraits, hush, a character who should feel studied. The head turns. Eyes go to | `melies-videos/viral-looks/pearl-earring/`（0 条） |
| [Penguin Ride](https://melies.co/cinematic-techniques/viral-looks/penguin-ride) |  | Gags and dream logistics: documentary camera, horizon honest, face committed. Ic | `melies-videos/viral-looks/penguin-ride/`（3 条） |
| [Pigeons](https://melies.co/cinematic-techniques/viral-looks/pigeons) |  | City punctuation: a meeting that scatters, a fashion frame that needs weather, a | `melies-videos/viral-looks/pigeons/`（3 条） |
| [Puffin Ride](https://melies.co/cinematic-techniques/viral-looks/puffin-ride) |  | Gags and dream travel: documentary camera, cliffs, surf, a flying or perched sea | `melies-videos/viral-looks/puffin-ride/`（3 条） |
| [Race Track](https://melies.co/cinematic-techniques/viral-looks/race-track) |  | Sport, pursuit, a character who only feels alive on a lap: the camera is wide en | `melies-videos/viral-looks/race-track/`（3 条） |
| [Random Glow](https://melies.co/cinematic-techniques/viral-looks/random-glow) |  | Dreams, nightlife, a memory with bad film: some orbs, some clean skin, a face st | `melies-videos/viral-looks/random-glow/`（2 条） |
| [Skatedog](https://melies.co/cinematic-techniques/viral-looks/skatedog) |  | Street comedy, animals in human sports, youth: hard sun or sodium night, motion  | `melies-videos/viral-looks/skatedog/`（2 条） |
| [Sketch](https://melies.co/cinematic-techniques/viral-looks/sketch) |  | Process, memory, a story being invented: hands and eyes can be tighter than the  | `melies-videos/viral-looks/sketch/`（0 条） |
| [Superstar](https://melies.co/cinematic-techniques/viral-looks/superstar) |  | Arrivals, stages, a character who wins by being seen. Hold the eyeline. Do not d | `melies-videos/viral-looks/superstar/`（2 条） |
| [Toxic](https://melies.co/cinematic-techniques/viral-looks/toxic) |  | Hell, industry, a joke about a city: wet industrial ground, drums optional as ob | `melies-videos/viral-looks/toxic/`（2 条） |
| [Two Color](https://melies.co/cinematic-techniques/viral-looks/two-color) |  | Posters, fables, a political still: assign the two hues to shadow and light, or  | `melies-videos/viral-looks/two-color/`（1 条） |
| [Ultraviolet](https://melies.co/cinematic-techniques/viral-looks/ultraviolet) |  | Clubs, forensics, a dream of a poster: teeth and cotton go radioactive, surround | `melies-videos/viral-looks/ultraviolet/`（1 条） |
