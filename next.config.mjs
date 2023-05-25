// @ts-check

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { createRequire } from 'node:module'
import withPWA from 'next-pwa'
import runtimeCaching from 'next-pwa/cache.js'
import plugins from 'next-compose-plugins'
import { withSentryConfig } from '@sentry/nextjs'
import bundleAnalyzer from '@next/bundle-analyzer'
// import SentryCliPlugin from '@sentry/webpack-plugin'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

const nextConfig = {
  webpack: (config, { webpack, dev, isServer }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    )

    config.resolve.alias['@aurora'] = path.join(__dirname, 'aurora')
    config.resolve.alias['@app'] = path.join(__dirname, 'app')
    config.resolve.alias['@server'] = path.join(__dirname, 'server')
    // config.resolve.alias['public'] = path.join(__dirname, 'public')

    // audio support
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    })

    return config
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'media.graphcms.com',
      'media.hygraph.com',
      'media.graphassets.com',
      'images.prismic.io',
      'avatars.githubusercontent.com',
      'platform-lookaside.fbsbx.com',
      'lh3.googleusercontent.com',
    ],
  },
  pwa: {
    dest: 'public',
    register: true,
    runtimeCaching,
  },
  experimental: {
    appDir: true,
  },
  sentry: {
    hideSourceMaps: true,
  },
}

const sentryWebpackPluginOptions = {
  silent: true,
}

// manage i18n
if (process.env.EXPORT !== 'true') {
  nextConfig.i18n = {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  }
}

export default plugins(
  [[withSentryConfig, sentryWebpackPluginOptions], withBundleAnalyzer, withPWA],
  nextConfig,
)
