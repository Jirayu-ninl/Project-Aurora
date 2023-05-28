import { defineConfig as setAnimationConfig } from '@aurora/views/animations/config'

const WrongCurve: number[] = [0.43, 0.13, 0.23, 0.96]

export const aNav = (_showNav: boolean) =>
  setAnimationConfig(
    { y: '-100%' },
    { y: _showNav ? 0 : '-100%' },
    { y: '-100%' },
    WrongCurve,
    0.8,
  )
export const aNavChildren = setAnimationConfig(
  { y: '-100%', visibility: 'hidden' },
  { y: 0, visibility: 'visible' },
  { y: '-100%', visibility: 'hidden' },
  WrongCurve,
  0.2,
)

export const aFooter = setAnimationConfig(
  { visibility: 'hidden', y: 100 },
  { visibility: 'visible', y: 0 },
  { visibility: 'hidden', y: 100 },
  WrongCurve,
  0.5,
)

export const aFooterSocialIcon = setAnimationConfig(
  { visibility: 'hidden', y: 100 },
  { visibility: 'visible', y: 0 },
  { visibility: 'hidden', y: 100 },
  WrongCurve,
  0.5,
)
