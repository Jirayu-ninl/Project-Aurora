import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    // ** ENVIRONMENT
    NODE_ENV: z.enum(['development', 'test', 'production']),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === 'production'
        ? z.string().min(1)
        : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
      // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
      // Since NextAuth.js automatically uses the VERCEL_URL if present.
      (str) => process.env.VERCEL_URL ?? str,
      // VERCEL_URL doesn't include `https` so it cant be validated as a URL
      process.env.VERCEL ? z.string().min(1) : z.string().url(),
    ),
    // ** DATABASE
    GRAPHQL_CONTENT_URL: z.string().url(),
    GRAPHQL_PROJECT_URL: z.string().url(),
    GRAPHQL_SHOP_URL: z.string().url(),
    MONGODB_URI: z.string().url(),
    SQL_URL: z.string().url(),
    SQL_PSC_URL: z.string().url(),
    REDIS_URL: z.string().url(),
    // ** API
    AUTH_FB_APP_ID: z.string(),
    AUTH_FB_APP_SECRET: z.string(),
    AUTH_GITHUB_CLIENT_ID: z.string(),
    AUTH_GITHUB_CLIENT_SECRET: z.string(),
    AUTH_GOOGLE_CLIENT_ID: z.string(),
    AUTH_GOOGLE_CLIENT_SECRET: z.string(),
    AUTH_DISCORD_CLIENT_ID: z.string(),
    AUTH_DISCORD_CLIENT_SECRET: z.string(),
    // ** S3
    S3_ORIGINS: z.preprocess((value) => {
      const str = String(value)
      return str.split(',')
    }, z.array(z.string().url()).optional()),
    S3_UPLOAD_ENDPOINT: z.string().url(),
    S3_UPLOAD_KEY: z.string(),
    S3_UPLOAD_SECRET: z.string(),
    S3_UPLOAD_REGION: z.string(),
    S3_UPLOAD_BUCKET: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    // ** ENVIRONMENT
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    // ** DATABASE
    GRAPHQL_CONTENT_URL: process.env.GRAPHQL_CONTENT_URL,
    GRAPHQL_PROJECT_URL: process.env.GRAPHQL_PROJECT_URL,
    GRAPHQL_SHOP_URL: process.env.GRAPHQL_SHOP_URL,
    MONGODB_URI: process.env.MONGODB_URI,
    SQL_URL: process.env.SQL_URL,
    SQL_PSC_URL: process.env.SQL_PSC_URL,
    REDIS_URL: process.env.REDIS_URL,
    // ** API
    AUTH_FB_APP_ID: process.env.AUTH_FB_APP_ID,
    AUTH_FB_APP_SECRET: process.env.AUTH_FB_APP_SECRET,
    AUTH_GITHUB_CLIENT_ID: process.env.AUTH_GITHUB_CLIENT_ID,
    AUTH_GITHUB_CLIENT_SECRET: process.env.AUTH_GITHUB_CLIENT_SECRET,
    AUTH_GOOGLE_CLIENT_ID: process.env.AUTH_GOOGLE_CLIENT_ID,
    AUTH_GOOGLE_CLIENT_SECRET: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    AUTH_DISCORD_CLIENT_ID: process.env.AUTH_DISCORD_CLIENT_ID,
    AUTH_DISCORD_CLIENT_SECRET: process.env.AUTH_DISCORD_CLIENT_SECRET,
    // ** S3
    S3_ORIGINS: process.env.S3_ORIGINS,
    S3_UPLOAD_ENDPOINT: process.env.S3_UPLOAD_ENDPOINT,
    S3_UPLOAD_KEY: process.env.S3_UPLOAD_KEY,
    S3_UPLOAD_SECRET: process.env.S3_UPLOAD_SECRET,
    S3_UPLOAD_REGION: process.env.S3_UPLOAD_REGION,
    S3_UPLOAD_BUCKET: process.env.S3_UPLOAD_BUCKET,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})
