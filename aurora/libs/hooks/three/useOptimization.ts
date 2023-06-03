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
            ? [1, 2]
            : value === 2
            ? [0.7, 1]
            : value === 1
            ? [0.5, 0.7]
            : [0.2, 0.5]
      }
      break
    case 'fps':
      {
        drp =
          value >= 400
            ? [1.2, 2.5]
            : value >= 300
            ? [1, 2]
            : value >= 200
            ? [0.7, 1]
            : value >= 100
            ? [0.5, 0.7]
            : [0.2, 0.5]
      }
      break
    default:
      drp = [1, 1]
      break
  }

  return { status: 'done', drp }
}

export default useOptimization
