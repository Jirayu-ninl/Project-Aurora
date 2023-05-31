import { theme } from './app/config/defineConfig'
import TailwindDefaultConfig from './aurora/default/theme/tailwind'
import PluginTypography from '@tailwindcss/typography'

// import type { Config } from 'tailwindcss'

const TailwindConfig = {
  ...TailwindDefaultConfig.Extend(theme.color, [PluginTypography]),
} /* satisfies Config */

export default TailwindConfig
