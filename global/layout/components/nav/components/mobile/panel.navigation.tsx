import { motion } from 'framer-motion'
import { State } from '@global/store'

import NavMenuItem from '../navMenuItem'

const NavigationPanel = () => {
  const _navRoute = State((state) => state.navRoute)
  const _navRouteActiveState = State((state) => state.navRouteActiveState)

  return (
    <motion.ul>
      {_navRoute.map((v, i) => (
        <NavMenuItem
          key={i}
          index={i}
          menuItem={v}
          _navRouteActiveState={_navRouteActiveState}
        />
      ))}
    </motion.ul>
  )
}

export default NavigationPanel
