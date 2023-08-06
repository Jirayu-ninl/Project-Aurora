import { State } from '@global/store'
import { tCallbackReturnValue } from '@aurora/libs/hooks/animations/index'

const useScrollState = (id: number) => {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  return {
    handleScroll: ({ motionValue }: tCallbackReturnValue) => {
      _setNavRouteActiveState({
        id: id,
        scrollable: true,
        motionValue: motionValue,
      })
    },
  }
}

export { useScrollState }
