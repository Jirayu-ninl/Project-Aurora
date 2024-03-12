ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json ./
RUN yarn


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# Specify the variable you need
ARG NODE_ENV
ARG EXPORT
ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL
ARG TOKEN
ARG NEXT_PUBLIC_SENTRY_DSN
ARG GRAPHQL_CONTENT_URL
ARG GRAPHQL_PROJECT_URL
ARG GRAPHQL_SHOP_URL
ARG MONGODB_URI
ARG ACCELERATE_URI
ARG SQL_URL
ARG REDIS_URL
ARG AUTH_FB_APP_ID
ARG AUTH_FB_APP_SECRET
ARG AUTH_GITHUB_CLIENT_ID
ARG AUTH_GITHUB_CLIENT_SECRET
ARG AUTH_GOOGLE_CLIENT_ID
ARG AUTH_GOOGLE_CLIENT_SECRET
ARG AUTH_DISCORD_CLIENT_ID
ARG AUTH_DISCORD_CLIENT_SECRET
ARG S3_ORIGINS
ARG S3_UPLOAD_ENDPOINT
ARG S3_UPLOAD_KEY
ARG S3_UPLOAD_SECRET
ARG S3_UPLOAD_REGION
ARG S3_UPLOAD_BUCKET
ARG EMAIL_HOST
ARG EMAIL_PORT
ARG EMAIL_SECURE
ARG EMAIL_USER
ARG EMAIL_PASS
ARG EMAIL_FROM
ARG STRIPE_SECRET_KEY
ARG STRIPE_WEBHOOK_SECRET
ARG STRIPE_DONATE_ID
ARG STRIPE_METADATA_KEY
ARG NEXT_PUBLIC_APP_NAME
ARG NEXT_PUBLIC_GTM
ARG NEXT_PUBLIC_S3_DOWNLOAD_ENDPOINT
ARG NEXT_PUBLIC_S3_UPLOAD_ENDPOINT
# Generate prisma schema
RUN yarn db
# Build application
RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]