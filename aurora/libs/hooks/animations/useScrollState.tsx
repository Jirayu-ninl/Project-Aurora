import { State } from '@global/store'

const useScrollState = (id: number) => {
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  return {
    handleScroll: ({ motionValue }: any) => {
      _setNavRouteActiveState({
        id: id,
        scrollable: true,
        motionValue: motionValue,
      })
    },
  }
}

export { useScrollState }
