import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { User } from '@store'
import { CartIcon } from '../../assets'

const CartBlock = ({ OpenCart, setNavPopupState, _Cart }) => (
  <span
    className='relative flex h-full cursor-pointer items-center'
    onClick={() => {
      setNavPopupState('cart')
    }}
  >
    <div className='Anim AnimScale h-6 w-6'>
      <CartIcon />
      {_Cart !== 0 && _Cart && (
        <span className='NotiBadge-primary'>{_Cart}</span>
      )}
    </div>
    <AnimatePresence>{OpenCart && <Cart key='NAV_Cart' />}</AnimatePresence>
  </span>
)

const Cart = () => {
  const _CartItems = User((state) => state.cartItems)

  const Amount = typeof _CartItems === 'boolean' ? 0 : _CartItems.length

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className='Card-back-md-60 absolute top-14 flex max-h-64 w-48 flex-col py-4  drop-shadow-md md:right-0 '
    >
      <h5 className='mb-2 text-center text-base font-semibold'>Cart</h5>
      {Amount === 0 || !_CartItems ? (
        <div className='flex h-24 items-center justify-center'>
          <p className='text-center text-xs font-light opacity-60'>
            shop will coming soon <br /> in next version
          </p>
        </div>
      ) : (
        <>
          <CartItems list={_CartItems} />
          <p className='Anim AnimOpacity-60 cursor-pointer pt-2 text-center text-xs font-light'>
            open cart
          </p>
        </>
      )}
    </motion.div>
  )
}

const CartItems = ({ list }) => (
  <div className='h-full overflow-scroll'>
    {list.map((v, i) => (
      <Link href={v.link} passHref key={i}>
        <div className='Anim AnimOpacity-80 mt-1 w-full cursor-pointer border-2 border-transparent border-l-primary-0 bg-black/20 p-2'>
          <h6 className='text-xs'>{v.title}</h6>
          <p className='mt-1 text-xs font-light opacity-80'>{v.description}</p>
          <p className='mt-1 -mb-1 text-right text-2xs font-light opacity-80'>
            {v.time}
          </p>
        </div>
      </Link>
    ))}
  </div>
)

export default CartBlock
