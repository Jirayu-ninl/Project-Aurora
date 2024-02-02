const Grid4 = ({ infoData }: { infoData: any }) => {
  return (
    <div className='mb-0 mt-24 grid grid-cols-2 gap-4 md:mb-24 md:mt-48 lg:grid-cols-4 lg:gap-8'>
      {infoData.map((v: any, i: number) => (
        <div
          key={i}
          className='Anim-1 AnimTranslate-4 rounded-md border border-quaternary-2 bg-white/10
          py-2 text-quaternary-2 backdrop-blur-md hover:bg-quaternary-2 hover:text-white dark:border-primary-0 dark:bg-black/30 dark:text-primary-0 dark:hover:bg-primary-0 dark:hover:text-black lg:py-4'
        >
          <h4 className='text-center text-xs font-bold sm:text-base'>
            {v.title} :
          </h4>
          <p className='text-center text-xs sm:text-base'>{v.description}</p>
        </div>
      ))}
    </div>
  )
}

export { Grid4 }
