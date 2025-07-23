FROM node:22-slim AS base
#nodeのイメージをベースにする

ENV PNPM_HOME="/pnpm"
#pnpmのホームディレクトリを設定
ENV PATH="$PNPM_HOME:$PATH"
#pnpmの環境変数を設定

RUN corepack enable
#corepackを有効化

WORKDIR /app
#作業ディレクトリの指定

COPY . /app
#ynu-fes...の下を/appの下にコピー


FROM base AS prod-deps
#依存関係のインストール用のステージ
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile
#pnpmを使って依存関係をインストール

FROM base AS build
#ビルド用のステージ
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
#依存関係をインストール
RUN pnpm run build
#ビルドコマンドを実行

FROM base
#実行環境のステージ
COPY --from=prod-deps /app/node_modules ./node_modules
#依存関係をコピー
COPY --from=build /app/dist /app/dist
#ビルドされたファイルをコピー
EXPOSE 8000
CMD [ "pnpm", "start" ]
#--コンテナを起動するときに実行されるコマンド
