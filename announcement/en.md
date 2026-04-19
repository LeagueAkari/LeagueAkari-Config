---
comment: If you can see this, it means you need to update your version (v1.3.7+)
alertLevel: low
summary: Official group rebuilt: 1097069247, passcode akari
---

## Announcement Board (Updated on 2026-04-19 23:59)

League Akari is currently at v1.4.3.

### (New) One of the gathering places & feedback channels

The old QQ Group 1 and the newer group were both banned. Looks like the name still was not ideal, so the new group is now Group 3.

|                                 | Portal                                       | Notes                                         |
| ------------------------------- | -------------------------------------------- | --------------------------------------------- |
| QQ Group (New · Base 3 / 2000)  | [1097069247](https://qm.qq.com/q/CQThVuJLlm) | Passcode: **akari**                           |
| QQ Group (Base 2 / 2000)        | [543703181](https://qm.qq.com/q/WEmiNuHBuY)  | Passcode: **akari**                           |
| Telegram                        | [@KawaiiAkari](https://t.me/KawaiiAkari)     | Backup group and shelter, usually not active. |

1. Group chats will periodically remove **long-term inactive** members, and usually without prior notice.
2. Please make sure you have basic computer knowledge. For example: using archive tools correctly, knowing the difference between a shortcut and the main executable, knowing how to send log files, and being able to describe problems efficiently and precisely.
3. Do not post explicit content. It really can get the group banned.

#### 1. Features currently confirmed to possibly cause account bans

- Timer Overlay Window - can lead to bans, with the reason shown as "unauthorized software loading"
- Match Overlay Window - can lead to bans, with the reason shown as "unauthorized software loading"
- In-Game Send - can lead to chat restrictions

**Please disable these features immediately.**

Timer Overlay Window and Match Overlay Window: located at `Settings` -> `Window Management` -> `Timer Overlay Window` and `Match Overlay Window`.

In-Game Send: located at `Toolkit` -> `In-Game Send`.

These features are disabled by default.

We are still verifying and investigating other features that may also cause bans.

#### 2. Currently confirmed issues

- After the Tencent server update (the February 4 update, version 26.3), due to API changes, the spectate feature (checking whether a player is currently in game from their profile, plus related players in that match) no longer works and cannot be fixed.
  > By the way: this has long been unavailable on Riot servers too.
- The feature for sending red/blue side also stopped working after the version update.

---

### To ensure you can receive future update notifications, please update to v1.4.3

<div class="akari-markdown download-link-container">
  <div class="akari-markdown download-link-title flow-gradient-text ">Don't Miss Out!</div>
  <div class="akari-markdown download-link-body">In v1.4.2 and earlier, due to some issues, automatic updates to newer versions no longer work. 😭</div>
  <div class="akari-markdown download-link-body">So 😀, if you want to use the latest version and keep receiving automatic updates in future releases, you need to <span class="akari-markdown flow-gradient-text">manually download</span> the latest build. 😘💕 Here are three ways to get it:</div>

  <div class="akari-markdown download-link-buttons">
    <a target="_blank" href="https://hanxven.lanzoum.com/b0mc8n1re" class="akari-markdown download-link-button">Lanzou (Passcode: miku)</a>  
    <a target="_blank" href="https://akari-static.hanxven.cc/League%20Akari-1.4.3-win.7z" class="akari-markdown download-link-button">Direct Download</a>
    <a target="_blank" href="https://github.com/LeagueAkari/LeagueAkari/releases/download/v1.4.3/League.Akari-1.4.3-win.7z" class="akari-markdown download-link-button">GitHub Download</a>
  </div>
</div>

### About League Akari

It is **free** and **open source**, licensed under GPL-3.0. It is not sold through any channel (such as Douyin, XianYu, Taobao, or other platforms).

Like the project? Visit [GitHub](https://github.com/LeagueAkari/LeagueAkari) and leave a free ⭐ to support continued development.

#### Open Source Strategy Change Notice

The League Akari project has always upheld the spirit of open source and sharing, and we remain committed to providing high-quality tools for League of Legends players. However, we recently found unauthorized repackaging and resale in the market. Some individuals or groups have even modified our work and distributed it for money. This seriously harms the legitimate rights and interests of both the project team and the broader user community.

Starting now, the League Akari source code will only be published for versions that are several releases behind. The latest source code will no longer be made public immediately; instead, some updates will be released selectively after a period of time.

<style>
.akari-markdown.flow-gradient-text, .akari-markdown .flow-gradient-text {
  background-size: 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  animation: akari-markdown-gradient-move 8s ease-in-out infinite;
  font-weight: bold;
}

@media (prefers-color-scheme: dark) {
  .akari-markdown.flow-gradient-text, .akari-markdown .flow-gradient-text {
    background-image: linear-gradient(
      90deg,
      #91dcff 0%,
      #91dcff 10%,
      #ff59cb 55%,
      #ffc1eb 100%
    );
  }
}

@media (prefers-color-scheme: light) {
  .akari-markdown.flow-gradient-text, .akari-markdown .flow-gradient-text {
    background-image: linear-gradient(
      90deg,
      #0891b2 0%,
      #0891b2 10%,
      #db2777 55%,
      #ec4899 100%
    );
  }
}

.akari-markdown.download-link-container {
  padding: 16px;
  border-radius: 8px;
  border: 2px solid;
  animation: akari-border-blink 0.5s steps(1) infinite;

  .akari-markdown.download-link-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .akari-markdown.download-link-body {
    font-size: 14px;
    
    & + & {
      margin-top: 8px;
    }
  }

  .akari-markdown.download-link-buttons {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-top: 16px;
  

    .akari-markdown.download-link-button {
      padding: 8px 16px;
      background-color: #f83f6f;
      border-radius: 4px;
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.2s ease;

      &:hover {
        background-color: #e61d4f;
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
}

@media (prefers-color-scheme: light) {
  .akari-markdown.download-link-container {
    background-color: #e5e7eb;
  }
  .akari-markdown.download-link-title {
    color: #1f2328;
  }
}

@media (prefers-color-scheme: dark) {
  .akari-markdown.download-link-container {
    background-color: #252a34;
  }
  .akari-markdown.download-link-title {
    color: #f0f6fc;
  }
}

@keyframes akari-markdown-gradient-move {
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

@keyframes akari-border-blink {
  0% {
    border-color: #f83f6f;
  }
  50% {
    border-color: #fbbf24;
  }
}
</style>
