FROM node:18-alpine AS base

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY public ./public
COPY --chown=nextjs:nodejs /build/standalone ./
COPY --chown=nextjs:nodejs /build/static ./build/static


USER nextjs

ENV PORT 80

EXPOSE 80

CMD ["node", "server.js"]