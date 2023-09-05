import { theme } from './global/config/defineConfig'
import { DefaultTailwindConfig } from './aurora/views/theme'
import PluginTypography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

const TailwindConfig = {
  ...DefaultTailwindConfig.Extend(theme.color, [PluginTypography]),
} as Config

export default TailwindConfig
