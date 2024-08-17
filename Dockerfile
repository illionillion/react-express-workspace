# ベースイメージとしてNode.jsを使用
FROM node:lts-alpine

# pnpmをグローバルにインストール
RUN npm install -g pnpm

# 作業ディレクトリを設定
# WORKDIR /app

# # 依存関係をインストール
# COPY package.json pnpm-lock.yaml ./
# RUN pnpm install

# # ソースコードをコピー
# COPY . .

# # サービスごとに実行
# CMD ["pnpm", "run", "dev:app"]
