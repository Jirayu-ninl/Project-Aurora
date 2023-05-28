'use client'
import { UI } from '@app/store'

const UiState = () => {
  const _showNav = UI((state) => state.showNav)
  const _showFooter = UI((state) => state.showFooter)
  return { _dark, _showNav, _showFooter, _navShowCanvas, _setNavShowCanvas }
}

const { _dark, _showNav, _showFooter, _navShowCanvas, _setNavShowCanvas } =
  UiState()

const UiStateSetup = {
  _dark,
  _showNav,
  _showFooter,
  _navShowCanvas,
  _setNavShowCanvas,
}

export default UiStateSetup

// export default UiState
