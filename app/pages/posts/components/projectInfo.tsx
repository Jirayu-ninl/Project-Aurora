function ProjectInfo({ content }) {
  return (
    <div className='mt-24 mb-0 grid grid-cols-2 gap-4 md:mt-48 md:mb-24 lg:grid-cols-4 lg:gap-8'>
      {content.map((v: any, i: number) => (
        <div
          key={i}
          className='Anim-1 AnimTranslate-4 rounded-md border border-primary-0
          bg-black/30 py-2 text-primary-0 backdrop-blur-md hover:bg-primary-0 hover:text-black lg:py-4'
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

export default ProjectInfo
