# 環境構築

ルートの`.env`ファイルに以下を作成

```env
MYSQL_USER=root
MYSQL_PORT=3306
MYSQL_PASSWORD=password
MYSQL_DATABASE=my_db
EXPRESS_PORT=8080
REACT_PORT=3000
CORS_URL=http://localhost:3000
PROXY_URL=http://localhost:8080
```

依存関係のインストール

```sh
docker compose run --rm app npm i
docker compose down
```

コンテナの起動

```sh
docker compose up -d
```

コンテナの終了

```sh
docker compose down
```