# F-DAILY-REPORT-AUTO

<img src="https://user-images.githubusercontent.com/39949564/159270823-43b3f8a2-63d1-4ffa-be41-9d3313204977.png" width="100" />

> 该应用即将处于稳定阶段

**重要提醒：此脚本有意设计为用于上报准确的信息，若使用此应用上报，请再三确保严肃如实地上报准确信息！！**

如果您不需要 GitHub Action 自动排程，建议使用这个应用：https://github.com/h0gan1ee/sheep-cover

## 使用方法

1. 为了保障您的隐私，建议 import 该仓库到您的个人 private 仓库（**可点击 'Use this template' 按钮来完成**） ，详见[ GitHub 文档](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer)。（值得注意的是，与 fork 相比，这种方法与上游仓库更新时需要手动操作）
2. 自定义 `config.js` 和 GitHub Action。（必须修改的配置项：`username`、`geolocation`，其他配置项可按需修改）
4. 添加「统一身份认证」密码到仓库的 secret 中（secret 名为 `PSWD`）。
5. 大功告成！
