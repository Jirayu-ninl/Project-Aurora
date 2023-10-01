import clsx from 'clsx'

function ArtScapeLogo({ brandColor }: { brandColor?: boolean }) {
  return (
    <>
      <svg viewBox='0 0 57.324 24.19' className='h-full w-full fill-inherit'>
        <g transform='translate(0 0.005)'>
          <path
            className={clsx(brandColor && 'fill-[#07ebb5]')}
            d='M1109.241,8.2h-17.217a4.1,4.1,0,1,1,0-8.207h17.217a4.1,4.1,0,1,1,0,8.207Z'
            transform='translate(-1062.17)'
          />
          <path
            d='M1369.061,683.472h-17.218a4.1,4.1,0,1,1,0-8.207h17.218a4.1,4.1,0,1,1,0,8.207Z'
            transform='translate(-1315.84 -659.287)'
          />
          <path
            d='M366.781,24.2a4.1,4.1,0,0,1-3.606-2.139L354.458,6.075a4.1,4.1,0,0,1,7.2-3.929l8.717,15.982a4.1,4.1,0,0,1-3.6,6.069Z'
            transform='translate(-345.579 -0.011)'
          />
          <circle
            cx='4.189'
            cy='4.189'
            r='4.189'
            transform='translate(0 15.807)'
            className={clsx(brandColor && 'fill-[#07ebb5]')}
          />
        </g>
      </svg>
    </>
  )
}

export { ArtScapeLogo }
