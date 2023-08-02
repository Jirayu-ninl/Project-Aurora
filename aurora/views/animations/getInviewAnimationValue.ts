const getInviewAnimationValue = (
  rangeValue: [number, number] | [number, number, number, number],
  currentValue: number,
  defaultValue = 0,
) => {
  let animatedValue = 0
  if (rangeValue.length === 4) {
    if (currentValue < rangeValue[0]) {
      animatedValue = 0
    } else if (rangeValue[0] <= currentValue && currentValue <= rangeValue[1]) {
      animatedValue =
        (currentValue - rangeValue[0]) / (rangeValue[1] - rangeValue[0])
    } else if (rangeValue[1] < currentValue && currentValue < rangeValue[2]) {
      animatedValue = 1
    } else if (rangeValue[2] <= currentValue && currentValue <= rangeValue[3]) {
      animatedValue =
        1 - (currentValue - rangeValue[2]) / (rangeValue[3] - rangeValue[2])
    } else {
      animatedValue = defaultValue
    }
  } else {
    if (currentValue < rangeValue[0]) {
      animatedValue = 0
    } else if (rangeValue[0] <= currentValue && currentValue <= rangeValue[1]) {
      animatedValue =
        (currentValue - rangeValue[0]) / (rangeValue[1] - rangeValue[0])
    } else {
      animatedValue = defaultValue
    }
  }

  return animatedValue
}

export default getInviewAnimationValue
