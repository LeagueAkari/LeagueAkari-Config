# League Akari Config

Config Repository for League Akari.

## releases/{version}/overrides.json

This file is used to override the default behavior of the release process.

It is a JSON file that contains the following fields:

- `version`: The version of the release. Start with `v`.
- `publishAt`: The date and time of the release. ISO 8601 format.
- `descriptionZhCn`: The description of the release in zh-CN. Override for zh-CN.md
- `descriptionEn`: The description of the release in en. Override for en.md
- `archiveFileGitee`: The archive file for the release in Gitee.
- `archiveFileGitHub`: The archive file for the release in GitHub.
