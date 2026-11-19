FROM node:26.13.1-alpine@sha256:6bd9ab43c0ec0190ca7b2d193906cb8b7edf6e7f4afa43ddeccd6452710bffb5 AS builder
WORKDIR /app
ENV NUXT_TELEMETRY_DISABLED=1 HUSKY=0
ENV BASE_URL=/25/tokiwa/ NUXT_PUBLIC_BASE_URL=/25/tokiwa/
RUN npm install --global pnpm@10.13.1
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts
COPY . .
RUN pnpm run build

FROM node:26.13.1-alpine@sha256:6bd9ab43c0ec0190ca7b2d193906cb8b7edf6e7f4afa43ddeccd6452710bffb5 AS production
# Apply OS security updates and omit build/package-management tools from the server.
RUN apk upgrade --no-cache \
    && rm -rf /usr/local/lib/node_modules /opt/yarn* \
    && rm -f /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/yarn /usr/local/bin/yarnpkg /usr/local/bin/corepack
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=8080
ENV BASE_URL=/25/tokiwa/ NUXT_PUBLIC_BASE_URL=/25/tokiwa/
COPY --from=builder --chown=node:node /app/.output ./.output
USER node
EXPOSE 8080
CMD ["node", ".output/server/index.mjs"]
