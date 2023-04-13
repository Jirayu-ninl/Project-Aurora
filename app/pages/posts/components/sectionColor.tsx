function SectionColor({ content }) {
  return (
    <div className='grid h-[500px] grid-cols-1 gap-8 md:h-[300px] md:grid-cols-3 xl:h-[400px]'>
      {content.map((v: any, i: number) => (
        <div
          className='Anim AnimTranslate-10 AnimRotate-1 relative overflow-hidden rounded-md'
          key={i}
          style={{ backgroundColor: v.codeColor }}
        >
          <div className='absolute bottom-0 left-0 flex w-full flex-col items-center justify-center bg-white/60 py-3 backdrop-blur-md md:py-4'>
            <button className='pointer-events-none rounded-md border border-black/40 bg-white/60 py-0 px-2 text-xs text-black md:text-base'>
              {v.codeColor}
            </button>
            <h6 className='mt-2 text-xs font-semibold uppercase tracking-wide text-black md:text-base'>
              {v.name}
            </h6>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectionColor
