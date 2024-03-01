import { theme } from './global/config/defineConfig'
import { DefaultTailwindConfig } from './aurora/views/theme'
import PluginTypography from '@tailwindcss/typography'
import { nextui } from '@nextui-org/react'
// import PluginDaisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const TailwindConfig = {
  ...DefaultTailwindConfig.Extend(theme.color, [
    PluginTypography,
    nextui(),
    // PluginDaisyui,
  ]),
} as Config

export default TailwindConfig
