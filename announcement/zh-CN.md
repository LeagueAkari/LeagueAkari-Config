---
comment: 如果你能看到这个，说明你需要更新版本了 (v1.3.7+)
alertLevel: medium
---

## <span class="flow-gradient-text-9e2b3c0b">(新)</span> 公告板 (发布于 2025-10-04 16：46)

在使用 TCLS 启动腾讯服客户端时，其会自动将 `startup_runner.exe` 加入到自启项，导致开机启动。此问题与 League Akari 无关。

解决方案：可以使用 **任务管理器** 中的 **启动** 选项卡，手动将 `startup_runner.exe` 从自启项禁用。

## 当前已知问题 & 版本发布时间线

目前最新版本是 v1.3.7。下个主要版本将**最晚**在今年 12 月之前发布。

- 一些地方错误地展示英文 (如 「自动选择」 在聊天框中提示 `auto-select-main.delayed-ban` 等)
- 在**空载**时，应用仍大量占用 CPU。此现象暂无法在开发侧复现，若有可稳定复现的案例，请务必进入群聊反馈。
- 目前玩家标记导出和导入逻辑存在问题。已知导入逻辑、导出逻辑在数据量过大（或其他情况）的时候会失败。
- 目前 wmic 已被微软弃用，导致依赖 wmic 查询命令行的途径失效，影响与客户端连接、安装位置检测等相关功能。下个版本将使用现代 WMI API。

### 聚集地 & 反馈渠道之一

|                       | 传送门                                      | 备注                                                                                               |
| --------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| QQ 群 (一号据点)      | [301157623](https://qm.qq.com/q/F1Xv85etlm) | 口令 **akari**，会定期清理潜水人员，为了更好地交流，请务必掌握一些电脑基础知识。本群不欢迎作弊者。 |
| QQ 群 (二号据点 · 新) | [543703181](https://qm.qq.com/q/WEmiNuHBuY) | 口令 **akari**，新的据点，为了更好地交流，请务必掌握一些电脑基础知识。本群不欢迎作弊者。           |
| Telegram              | [@LeagueAkari](https://t.me/leagueakari)    | 分身群兼避难所，通常不活跃。                                                                       |

### 关于 League Akari

它是**免费**、**开源**的，许可证是 GPL-3.0。

觉得这个项目不错？去 [GitHub](https://github.com/LeagueAkari/LeagueAkari) 点一颗免费的 ⭐，以支持我们继续开发。

#### 开源策略变更须知

League Akari 项目自始至终秉持开源与分享精神，致力于为广大英雄联盟玩家提供优质的工具。然而，近期我们发现市场上出现了未经授权的二次包装及售卖行为，甚至存在部分个人或组织在我们的基础上加以修改并以收费形式进行分发。这种行为严重损害了项目团队及广大用户的合法权益。

从即日起，League Akari 项目源代码将仅同步发布至几个版本之前的历史版本。最新版本的源代码将不再第一时间公开，仅会在经过一段时间后，选择性地发布部分更新内容。

<style>
  .flow-gradient-text-9e2b3c0b {
    background-image: linear-gradient(
      90deg,
      #91dcff 0%,
      #91dcff 10%,
      #ff59cb 55%,
      #ffc1eb 100%
    );
    background-size: 400% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    animation: gradientMove-9e2b3c0b 8s ease-in-out infinite;
    font-weight: bold;
  }
  @keyframes gradientMove-9e2b3c0b {
    0% {
      background-position: 0% 0;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0% 0;
    }
  }
</style>
