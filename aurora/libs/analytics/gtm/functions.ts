export const pageviewEvent = (url: string) => {
  window.dataLayer?.push({
    event: 'pageview',
    page: url,
  })
}

export const searchParamsEvent = (params: string) => {
  window.dataLayer?.push({
    event: 'searchParams',
    params: params,
  })
}
