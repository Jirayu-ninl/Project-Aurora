const useOptimization = (value: number, type: string) => {
  // const drp: [number, number] =
  // value >= 3
  //     ? [1, 1]
  //     : value === 2
  //     ? [0.7, 0.7]
  //     : value === 1
  //     ? [0.5, 0.5]
  //     : [0.1, 0.1]
  let drp: [number, number] = [0.1, 0.1]

  switch (type) {
    case 'tier':
      {
        drp =
          value >= 3
            ? [1, 1]
            : value === 2
            ? [0.7, 0.7]
            : value === 1
            ? [0.5, 0.5]
            : [0.1, 0.1]
      }
      break
    case 'fps':
      {
        drp =
          value >= 400
            ? [1.3, 1.3]
            : value >= 300
            ? [1, 1]
            : value >= 200
            ? [0.7, 0.7]
            : value >= 100
            ? [0.5, 0.5]
            : [0.1, 0.1]
      }
      break
    default:
      drp = [1, 1]
      break
  }

  return { status: 'done', drp }
}

export default useOptimization
