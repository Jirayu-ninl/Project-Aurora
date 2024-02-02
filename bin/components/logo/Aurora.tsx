import clsx from 'clsx'

function AuroraLogo({ brandColor }: { brandColor?: boolean }) {
  return (
    <>
      <svg viewBox='0 0 512 512' className='h-full w-full fill-inherit'>
        <g>
          <polygon
            className={clsx(brandColor && 'fill-[#FECFBB]')}
            points='264.6,0 98.6,362.5 337.4,181.3 	'
          />
          <path
            className={clsx(brandColor && 'fill-[#B23948]')}
            d='M489.9,512H370.4c-31.3-28.6-71.6-44.2-114.3-44.2s-83,15.6-114.3,44.2H22.1c44.8-83.3,132.8-140,234.1-140
		c24.5,0,48.3,3.3,70.9,9.6l-26.3-58.8l87.1-39L489.9,512L489.9,512z'
          />
        </g>
      </svg>
    </>
  )
}

export { AuroraLogo }
