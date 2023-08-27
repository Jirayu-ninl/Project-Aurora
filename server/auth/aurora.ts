/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaAdapter } from '@auth/prisma-adapter'
import type { NextAuthOptions, DefaultSession } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from 'next-auth/providers/github'
// import DiscordProvider from 'next-auth/providers/discord'
import { env } from '@aurora/env.mjs'
import Prisma from '@aurora/libs/database/prisma'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      role: 'USER' | 'ADMIN' | 'SUPER_ADMIN'
      plane: 'FREE' | 'PLUS' | 'PRO' | 'ELITE'
      balance: number
    } & DefaultSession['user']
  }
}

export const authOptions: NextAuthOptions | { adapter: any } = {
  pages: {
    signIn: '/portal',
    signOut: '/',
    error: '/portal',
    newUser: '/app/dashboard?newUser=true',
  },
  callbacks: {
    session: ({ session, user }: any) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          role: user.role,
          plane: user.plan,
          balance: user.balance,
        },
      }
    },
    // signIn: async ({ user, account }) => SignInProvider(user, account),
  },
  adapter: PrismaAdapter(Prisma),
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.AUTH_GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: env.AUTH_FB_APP_ID,
      clientSecret: env.AUTH_FB_APP_SECRET,
    }),
    GithubProvider({
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    }),
    // DiscordProvider({
    //   clientId: env.AUTH_DISCORD_CLIENT_ID,
    //   clientSecret: env.AUTH_DISCORD_CLIENT_SECRET,
    // }),
  ],
  secret: env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}
