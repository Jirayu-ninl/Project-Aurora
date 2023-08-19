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
    <div className='flex h-full flex-col'>
      {items.length === 0 ? (
        <div className='flex h-24 items-center justify-center'>
          <p className='text-center text-xs font-light opacity-60'>
            {title} is empty
          </p>
        </div>
      ) : (
        <>
          <div className='NSB grow overflow-scroll'>
            <Items list={items} />
          </div>
          <p
            className='cursor-pointer py-2 text-center text-xs font-light opacity-60'
            onClick={() => buttonCallback()}
          >
            {buttonText}
          </p>
        </>
      )}
    </div>
  </>
)

export default SubPanel
