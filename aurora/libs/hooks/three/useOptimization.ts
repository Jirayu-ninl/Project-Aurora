const useOptimization = (tier: number) => {
  const drp: [number, number] =
    tier >= 3
      ? [1, 1]
      : tier === 2
      ? [0.7, 0.7]
      : tier === 1
      ? [0.5, 0.5]
      : [0.1, 0.1]

  //   return { status: 'done', AA: AA, tier, isMobile }
  return { status: 'done', drp }
}

export default useOptimization
