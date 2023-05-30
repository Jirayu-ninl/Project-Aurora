import clsx from 'clsx'
function IceJiLoading(props: {
  style?: any
  dark?: boolean
  fillInner?: boolean
  pathClassName?: string
  glow?: boolean
}) {
  return (
    <>
      <svg
        style={{ ...props.style }}
        viewBox='0 0 212 212'
        fill='none'
        className='h-full w-full overflow-visible'
      >
        <path
          opacity='0.05'
          d='M106.087 39.3193L164.648 73.1296V140.752L106.087 174.562L47.5243 140.752V73.1296L106.087 39.3193ZM106.087 7.88574L20.3018 57.4118V156.468L106.087 205.996L191.871 156.468V57.4118L106.087 7.88574Z'
          fill={props.dark && !props.fillInner ? 'white' : 'black'}
        />
        <path
          d='M105.977 209.93L16.749 158.414V55.3828L105.979 3.86719L195.21 55.3828V158.414L105.977 209.93ZM23.5624 154.48L105.977 202.062L188.399 154.48V59.3164L105.977 11.7344L23.5624 59.3164V154.48Z'
          stroke={props.dark && !props.fillInner ? 'white' : 'black'}
          className={clsx(props.pathClassName && props.pathClassName)}
        />
        {props.glow && (
          <>
            <path
              d='M105.977 209.93L16.749 158.414V55.3828L105.979 3.86719L195.21 55.3828V158.414L105.977 209.93ZM23.5624 154.48L105.977 202.062L188.399 154.48V59.3164L105.977 11.7344L23.5624 59.3164V154.48Z'
              style={{ strokeWidth: 2 }}
              className='stroke-primary-0 blur-sm'
            />
            <path
              d='M105.977 209.93L16.749 158.414V55.3828L105.979 3.86719L195.21 55.3828V158.414L105.977 209.93ZM23.5624 154.48L105.977 202.062L188.399 154.48V59.3164L105.977 11.7344L23.5624 59.3164V154.48Z'
              style={{ strokeWidth: 5 }}
              className='stroke-primary-0 blur-md'
            />
          </>
        )}
        <path
          d='M20.3018 57.4121L47.5243 73.1299V140.753L20.3018 156.468V57.4121Z'
          fill={props.dark && props.fillInner ? 'white' : 'black'}
          fillOpacity='0.2'
        />
        <path
          d='M164.648 73.1299L191.87 57.4121V156.468L106.087 205.996V174.563L164.907 141.018L164.648 73.1299Z'
          fill={props.dark && props.fillInner ? 'white' : 'black'}
          fillOpacity='0.2'
        />
        <path
          d='M106.828 106.859H105.124V204.369H106.828V106.859Z'
          fill={props.dark && props.fillInner ? 'white' : 'black'}
        />
        <path
          d='M21.9896 57.4248L21.1377 58.9004L105.589 107.658L106.441 106.183L21.9896 57.4248Z'
          fill={props.dark && props.fillInner ? 'white' : 'black'}
        />
        <path
          d='M189.964 57.4262L105.618 106.123L106.47 107.599L190.816 58.9018L189.964 57.4262Z'
          fill={props.dark && props.fillInner ? 'white' : 'black'}
        />
      </svg>
    </>
  )
}

export default IceJiLoading
