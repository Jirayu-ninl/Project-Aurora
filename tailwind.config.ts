import { theme } from './app/config/defineConfig'
import TailwindDefaultConfig from './aurora/default/theme/tailwind'
import PluginTypography from '@tailwindcss/typography'

import type { Config } from 'tailwindcss'

export default {
  ...TailwindDefaultConfig.Extend(theme.color, [PluginTypography]),
} /* satisfies Config */
