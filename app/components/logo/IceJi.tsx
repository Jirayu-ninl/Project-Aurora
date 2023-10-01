const IceJiLogo = (props: { type?: string; dark?: boolean; style?: JSON }) => {
  if (props.type === 'stroke') {
    const solid = { fill: props.dark ? '#FFF' : '#262626', opacity: 0.1 }
    const stroke = { stroke: props.dark ? '#FFF' : '#262626' }
    return (
      <>
        <svg
          viewBox='0 0 1024 1024'
          style={{ fill: 'none', ...props.style }}
          className='h-full w-full'
        >
          <path
            style={stroke}
            d='M512.42,189.92,795.28,353.23V679.86L512.42,843.17,229.55,679.86V353.23L512.42,189.92m0-151.83L98.06,277.31V755.77L512.42,995,926.77,755.77V277.31L512.42,38.09Z'
          />
          <path
            style={stroke}
            d='M511.89,1014,80.9,765.17V267.51l431-248.83,431,248.83V765.17ZM113.81,746.17,511.89,976,910,746.17V286.51L511.89,56.68,113.81,286.51Z'
          />
          <polygon
            style={stroke}
            points='98.06 277.31 229.55 353.23 229.55 679.86 98.06 755.77 98.06 277.31'
          />
          <polygon
            style={stroke}
            points='795.28 353.23 926.77 277.31 926.77 755.77 512.42 995 512.42 843.17 796.53 681.14 795.28 353.23'
          />
          <rect
            style={solid}
            x='507.77'
            y='516.15'
            width='8.23'
            height='470.99'
          />
          <rect
            style={solid}
            x='304'
            y='163.18'
            width='8.23'
            height='471.02'
            transform='translate(-191.22 466.18) rotate(-60)'
          />
          <rect
            style={solid}
            x='480.7'
            y='394.43'
            width='470.43'
            height='8.23'
            transform='translate(-103.36 411.36) rotate(-30)'
          />
        </svg>
      </>
    )
  } else {
    const cls1 = { opacity: 0.1 }
    const cls2 = { fill: props.dark ? '#FFF' : '#262626' }

    return (
      <svg
        viewBox='0 0 1024 1024'
        style={{ fill: props.dark ? '#FFF' : '#262626', ...props.style }}
        className='h-full w-full'
      >
        <path
          style={cls1}
          d='M512.42,189.92,795.28,353.23V679.86L512.42,843.17,229.55,679.86V353.23L512.42,189.92m0-151.83L98.06,277.31V755.77L512.42,995,926.77,755.77V277.31L512.42,38.09Z'
        />
        <path
          style={cls2}
          d='M511.89,1014,80.9,765.17V267.51l431-248.83,431,248.83V765.17ZM113.81,746.17,511.89,976,910,746.17V286.51L511.89,56.68,113.81,286.51Z'
        />
        <polygon
          style={cls2}
          points='98.06 277.31 229.55 353.23 229.55 679.86 98.06 755.77 98.06 277.31'
        />
        <polygon
          style={cls2}
          points='795.28 353.23 926.77 277.31 926.77 755.77 512.42 995 512.42 843.17 796.53 681.14 795.28 353.23'
        />
        <rect style={cls2} x='507.77' y='516.15' width='8.23' height='470.99' />
        <rect
          style={cls2}
          x='304'
          y='163.18'
          width='8.23'
          height='471.02'
          transform='translate(-191.22 466.18) rotate(-60)'
        />
        <rect
          style={cls2}
          x='480.7'
          y='394.43'
          width='470.43'
          height='8.23'
          transform='translate(-103.36 411.36) rotate(-30)'
        />
      </svg>
    )
  }
}

export { IceJiLogo }
