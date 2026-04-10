# Portfolio Nuxt 3

## 本番URL

https://portfolio-nuxt4-jet.vercel.app

## 環境構築

### アプリ

- Docker Desktop
- VS Code

### VS Code拡張機能

- [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Githubのssh接続対応

- MACの場合は少し修正をします
- .devcountainer/devcountainer.json内のmountのsourceをlocalEnv:HOMEに修正してください

```json
"mounts": ["source=${localEnv:HOME}/.ssh,target=/home/node/.ssh,type=bind"],
```

### 起動

1. Docker Desktop立ち上げ
1. VS Code立ち上げ
1. 本プロジェクトをVS Codeにワークスペースとして読み込み
1. Ctrl + Shift + PでVS Codeのコマンドを探して実行

   ```text
   Dev Containers: Reopen in Container
   ```

1. コンテナ内のターミナルでnuxtを起動

   ```bash
   pnpm run dev
   ```

## デプロイ

- Vercelでデプロイしているので、mainマージで自動デプロイされます

## Git運用

### 開発ブランチルール

- GitHub Flowでいきます
- mainとfeatureだけで
  - main
  - feature/hoge
  - feature/huga

### コミットコメント

- prefixをつけます
  - feat: ユーザに目に見えた機能の変更
  - fix: バグの修正
  - refactor: 挙動を変えない整理
  - chore: 開発体験・環境・補助的変更・その他
- ※以前のコミットでaddを使いまくっちゃってますけど、一旦気にしない
