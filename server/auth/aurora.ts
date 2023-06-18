import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { type GetServerSidePropsContext } from 'next'
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from 'next-auth'
// import SignInProvider from '@aurora/libs/auth/signIn/provider'
// import SignInCredentials from '@aurora/libs/auth/signIn/credentials'

import CredentialsProvider from 'next-auth/providers/credentials'
// import GoogleProvider from 'next-auth/providers/google'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GithubProvider from 'next-auth/providers/github'
// import DiscordProvider from 'next-auth/providers/discord'
import { env } from '@aurora/env.mjs'
import { prisma } from '@server/db'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      // ...other properties
      // role: UserRole;
    } & DefaultSession['user']
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

export const authOptions: NextAuthOptions = {
  // pages: {
  //   signIn: '/app/portal',
  //   signOut: '/app/portal',
  //   error: '/app/portal',
  //   newUser: '/app/user',
  // },
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
    // signIn: async ({ user, account }) => SignInProvider(user, account),
    // redirect: async ({ baseUrl }) => {
    //   const appUrl = baseUrl + '/app/user'
    //   return appUrl
    // },
    // jwt: async ({ token, user }) => {
    //   if (user) {
    //     token.userID = user.userID
    //     token.userRole = user.userRole
    //   }
    //   return token
    // },
    // session: ({ session, token }) => {
    //   session.user.userRole = token.userRole
    //   return session
    // },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    // GoogleProvider({
    //   clientId: env.AUTH_GOOGLE_CLIENT_ID,
    //   clientSecret: env.AUTH_GOOGLE_CLIENT_SECRET,
    // }),
    // GithubProvider({
    //   clientId: env.AUTH_GITHUB_CLIENT_ID,
    //   clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: env.AUTH_FB_APP_ID,
    //   clientSecret: env.AUTH_FB_APP_SECRET,
    // }),
    // DiscordProvider({
    //   clientId: env.AUTH_DISCORD_CLIENT_ID,
    //   clientSecret: env.AUTH_DISCORD_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = { id: '1', name: 'Admin', email: 'admin@admin.com' }
        return user
      },
    }),
    // CredentialsProvider({
    //   name: 'Email',
    //   id: 'theiceji-login',
    //   type: 'credentials',
    //   credentials: {
    //     email: { label: 'E-mail', type: 'text', placeholder: 'E-mail' },
    //     password: {
    //       label: 'Password',
    //       type: 'password',
    //       placeholder: 'Password',
    //     },
    //   },
    //   async authorize(credentials) {
    //     return SignInCredentials(credentials)
    //   },
    // }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
}

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions)
}
