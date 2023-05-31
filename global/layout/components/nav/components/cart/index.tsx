import { useRouter } from 'next/navigation'
import { User } from '@global/store'
import type { tUI } from '@global/store'
import { Cart as CartIcon } from '../../assets'

import ListPopupDropdown from '../listPopupDropdown'

const CartBlock = ({
  _setNavDropdown,
  _navDropdown,
  NavDropdownState,
}: {
  _setNavDropdown: (dropdown: string) => void
  _navDropdown: string
  NavDropdownState: tUI.tNavDropdownState
}) => {
  const _cart = User((state) => state.cart)
  const router = useRouter()

  return (
    <ListPopupDropdown
      _setNavDropdown={_setNavDropdown}
      _navDropdown={_navDropdown}
      navDropdownState={NavDropdownState}
      state='cart'
      icon={<CartIcon />}
      items={_cart}
      buttonText='view cart'
      buttonCallback={() => router.push('/shop/cart')}
    />
  )
}

export default CartBlock
