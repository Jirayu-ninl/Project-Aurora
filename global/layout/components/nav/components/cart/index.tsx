import { useRouter } from 'next/navigation'
import { User } from '@global/store'
import { eNavDropdownState } from '@global/store/ui.store'
import { Cart as CartIcon } from '@aurora/assets/icons'

import ListPopupDropdown from '../listPopupDropdown'

const CartBlock = ({
  _setNavDropdown,
  _navDropdown,
}: {
  _setNavDropdown: (dropdown: eNavDropdownState) => void
  _navDropdown: eNavDropdownState
}) => {
  const _cart = User((state) => state.cart)
  const router = useRouter()

  return (
    <ListPopupDropdown
      _setNavDropdown={_setNavDropdown}
      _navDropdown={_navDropdown}
      state={eNavDropdownState.CART}
      icon={<CartIcon className='Anim AnimScale' />}
      items={_cart}
      buttonText='view cart'
      buttonCallback={() => router.push('/shop/cart')}
    />
  )
}

export default CartBlock
