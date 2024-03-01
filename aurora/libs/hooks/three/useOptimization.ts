const useOptimization = (value: number, type: string, option = { mult: 1 }) => {
  let drp: [number, number] = [0.7, 0.7]

  switch (type) {
    case 'tier':
      {
        drp =
          value >= 3
            ? [1 * option.mult, 1.5 * option.mult]
            : value === 2
              ? [0.7 * option.mult, 1 * option.mult]
              : value === 1
                ? [0.5 * option.mult, 0.7 * option.mult]
                : [0.2 * option.mult, 0.5 * option.mult]
      }
      break
    case 'fps':
      {
        drp =
          value >= 400
            ? [1.2 * option.mult, 2.5 * option.mult]
            : value >= 300
              ? [1 * option.mult, 2 * option.mult]
              : value >= 200
                ? [0.7 * option.mult, 1 * option.mult]
                : value >= 100
                  ? [0.5 * option.mult, 0.7 * option.mult]
                  : [0.2 * option.mult, 0.5 * option.mult]
      }
      break
    default:
      drp = [1, 1]
      break
  }

  return { status: 'done', drp }
}

export { useOptimization }
