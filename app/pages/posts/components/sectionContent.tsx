function SectionContent({ content, refElement }) {
  return (
    <div className='flex flex-col justify-between py-48 md:flex-row'>
      <h2 className='text-base font-semibold uppercase'>
        <span className='pr-2 text-xs text-primary-0'>/{content.number}</span>
        {content.title}
      </h2>
      <div
        className='Project-header mt-4 md:-mt-2 md:w-9/12 lg:w-3/5'
        ref={refElement}
      ></div>
    </div>
  )
}

export default SectionContent
