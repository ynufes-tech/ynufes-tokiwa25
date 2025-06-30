FROM node:22-slim AS builder
#nodeのイメージをベースにする

ENV NUXT_PUBLIC_BASE_URL=/25/tokiwa/

WORKDIR /app
#作業ディレクトリの指定

COPY ./ ./
#ynu-fes...の下を/appの下にコピー

RUN yarn install --frozen-lockfile

RUN yarn build

FROM node:22-slim AS production

ENV NUXT_PUBLIC_BASE_URL=/25/tokiwa/

WORKDIR /app

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/.nuxt ./.nuxt
#最小限のファイルをコピー

ENV HOST=0.0.0.0

ENV PORT=8082
#環境変数の設定

CMD ["node" ,"./.output/server/index.mjs"]
#--containerを作成するときに実行されるコマンド

EXPOSE 8082
