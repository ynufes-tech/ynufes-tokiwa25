FROM node:22-slim AS base
# ベースイメージに Node.js 22-slim を使用

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# pnpm のパスを設定

RUN corepack enable
# corepack を有効化して pnpm を利用可能に

WORKDIR /app
# 作業ディレクトリを /app に設定

FROM base AS prod-deps
# 本番環境用依存パッケージをインストール

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --prod --frozen-lockfile
# キャッシュを活用して本番依存だけを高速インストール

FROM base AS build
# ビルド用ステージ

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile
# キャッシュを活用して全依存をインストール

COPY . .
RUN pnpm run build
# ソースコードをビルド

FROM node:22-slim AS runner
# 実行環境ステージ

COPY --from=prod-deps /app/node_modules ./node_modules
# 本番依存をコピー

COPY --from=build /app/.output /app/
# ビルド成果物をコピー

EXPOSE 8000
# アプリケーションのリスニングポート

CMD ["node", "/app/server/index.mjs"]
# サーバーを起動
