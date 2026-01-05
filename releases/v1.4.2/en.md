# v1.4.2 (2026-01-05)

This update is a for v1.4.1, addressing an issue where the ongoing game window was unusable.

The following content **also** includes all updates from v1.4.1.

## 1. New Features

- The "Lock-in Immediately" option has returned for automatic champion selection and banning.

## 2. Bug Fixes

- **[v1.4.2] Fixed an issue where the ongoing game window was unusable.**

- Fixed an issue where the client could not be launched from the startup page.

- Fixed an issue where the OP.GG window failed to open.

- The match history page will no longer reset page size when navigating between pages.

- Fixed player card labels on the ongoing game page that were not correctly mapped to their corresponding settings.

- Fixed an issue where premade detection could incorrectly identify players across different teams.

- Fixed an issue where the automatic champion swap feature was forcibly enabled in ARAM-like modes. It is now correctly bound to the setting.

- Fixed an issue where the OP.GG window would not automatically switch to the corresponding champion when a champion was selected (as opposed to locked in).

- Position assignment information is now populated for anonymous players.

- Some components have been adapted for light mode.

- In the rank display component on the match history page, Solo/Duo Queue will now always appear before Flex Queue.

- Fixed an issue where the summoner experience bar in the sidebar was displayed incorrectly.

- Fixed some potential startup failures. Errors will now only be logged instead of causing the application to crash.

- Fixed an issue where the window size changed after multiple application startups.

## 3. Adjustments

- For 5v5 matches, if there is sufficient horizontal space, the player card height on the ongoing game page will now adapt within a certain range.

- Adjusted some color schemes and removed the green color.

- Temporarily removed the adaptive timing adjustment logic for automatic champion selection and banning to avoid delay calculation errors caused by edge cases. A better solution will be implemented in a future version.

- Removed the "Ignore Teammates' Pick Intent" option from the automatic ban feature.

## 4. Disclaimer

This software is a tool developed based on Riot's League Client Update (LCU) API. It does not use invasive technology and theoretically will not directly interfere with or modify game data. However, please note the possible compatibility issues or risks related to game updates or anti-cheat systems.

Furthermore, this application is not officially supported or endorsed by Riot Games, and Riot Games reserves all rights. Use this application at your own risk, as it may violate the game's terms of service.
