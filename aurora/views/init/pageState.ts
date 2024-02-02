import type { tNavSecondaryRoute } from '@global/config/routes'
import type { tNavRoute } from '@global/store/state.extend'

const InitPageState = (
  _setPage: (p: string) => void,
  _setBackRoute: (r: string) => void,
  _setNavRoute: (p: tNavRoute | []) => void,
  routeData: tNavSecondaryRoute,
) => {
  _setPage(routeData.title)
  _setBackRoute(routeData.setBackRoute)
  _setNavRoute(routeData.route)
}

export default InitPageState
