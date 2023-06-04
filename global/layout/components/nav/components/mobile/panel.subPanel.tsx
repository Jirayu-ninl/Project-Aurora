import Items from '../listPopupDropdown/items'

const SubPanel = ({
  items,
  title,
  buttonCallback,
  buttonText,
}: {
  items: any[]
  title: string
  buttonCallback: () => void
  buttonText: string
}) => (
  <>
    {items.length === 0 ? (
      <div className='flex h-24 items-center justify-center'>
        <p className='text-center text-xs font-light opacity-60'>
          {title} is empty
        </p>
      </div>
    ) : (
      <>
        <Items list={items} />
        <p
          className='cursor-pointer pt-2 text-center text-xs font-light opacity-60'
          onClick={() => buttonCallback()}
        >
          {buttonText}
        </p>
      </>
    )}
  </>
)

export default SubPanel
