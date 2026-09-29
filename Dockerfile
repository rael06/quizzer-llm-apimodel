# syntax=docker/dockerfile:1

# Build: the React UI (the API URL is fixed at build time) and the API bundled once with esbuild,
# then only the production dependencies of the API are kept.
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY ui/package.json ui/package-lock.json ui/
COPY api/package.json api/package-lock.json api/
RUN npm ci --prefix ui && npm ci --prefix api
COPY ui ui
COPY api api
ARG REACT_APP_API_URL
RUN npm run build --prefix ui \
  && npm run bundle --prefix api \
  && cp -r ui/build api/dist/public \
  && npm prune --omit=dev --prefix api

# Runtime: the bundled API, its dependencies and the UI it serves; files belong to root, the app
# runs as `node` and writes nothing (sessions live in memory).
FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/api/package.json ./
COPY --from=build /app/api/node_modules ./node_modules
COPY --from=build /app/api/dist ./dist
USER node
EXPOSE 3099
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s \
  CMD ["node", "-e", "fetch('http://127.0.0.1:' + (process.env.PORT || 3099) + '/api/health').then(r => process.exit(r.ok ? 0 : 1), () => process.exit(1))"]
CMD ["node", "dist/index.mjs"]
