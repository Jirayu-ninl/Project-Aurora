const formatSegment = (segment: number) => {
  return segment < 10 ? `0${segment}` : segment
}

const getHours = (hours: number) => {
  return hours % 12 === 0 ? 12 : hours % 12
}

const getTime = (date: Date) => {
  const hours = getHours(date.getHours()),
    minutes = date.getMinutes(),
    seconds = date.getSeconds()

  return `${formatSegment(hours)}:${formatSegment(minutes)}:${formatSegment(
    seconds,
  )}`
}

export { getTime }
