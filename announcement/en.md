---
comment: If you can see this, it means you need to update your version (v1.3.7+)
alertLevel: low
---

## Known Issues & Release Timeline

The latest version is v1.3.7. The next major version will be released **no later than December 2025**.

1. Some places incorrectly display English (e.g., "Auto-select" in chat prompts `auto-select-main.delayed-ban`).
2. The application still consumes a significant amount of CPU even when idle. This phenomenon cannot be reproduced on the development side, please give feedback if you have a stable reproduction case.
3. Currently, the player mark export and import logic is problematic. Known to fail when the data volume is too large (or in other cases).
4. Currently, wmic has been deprecated by Microsoft, causing the method of querying the command line using wmic to become invalid, affecting the relevant functions of connecting to the client and detecting the installation location. The next version will use modern WMI APIs.

### Community & Feedback Channels

|                           | Portal                                      | Notes                                                          |
| ------------------------- | ------------------------------------------- | -------------------------------------------------------------- |
| QQ Group (1st Base)       | [301157623](https://qm.qq.com/q/F1Xv85etlm) | Passcode: **akari**, inactive users will be removed regularly. |
| QQ Group (2nd Base · New) | [543703181](https://qm.qq.com/q/WEmiNuHBuY) | Passcode: **akari**, new gathering spot.                       |
| Telegram                  | [@LeagueAkari](https://t.me/leagueakari)    | Backup group and haven, not very active.                       |

### About League Akari

It is **free** and **open source**, licensed under GPL-3.0.

Like this project? Go to [GitHub](https://github.com/LeagueAkari/LeagueAkari) and give us a free ⭐ to support our ongoing development!

#### Delayed Open Source Notice

The League Akari project has always upheld the spirit of open source and sharing, striving to provide high-quality tools for League of Legends players. However, we have recently discovered unauthorized repackaging and sales in the market. Some individuals or organizations have even modified our work and distributed it for a fee. Such actions seriously undermine the legitimate rights and interests of both our team and the wider user community.

From now on, the League Akari project’s source code will only be released up to a few versions behind the latest. The most recent versions will no longer be made public immediately, and only selected updates will be released after a period of time.

Thank you for your understanding and continued support!

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
