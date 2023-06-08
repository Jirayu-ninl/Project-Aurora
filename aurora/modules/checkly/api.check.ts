import { ApiCheck, AssertionBuilder, Frequency } from 'checkly/constructs'

const API = new ApiCheck('hello-api', {
  name: 'Hello API',
  locations: ['ap-south-1'], // overrides the locations property
  frequency: Frequency.EVERY_30M, // overrides the frequency property
  request: {
    method: 'GET',
    url: 'https://api.checklyhq.com/public-stats',
    assertions: [AssertionBuilder.statusCode().equals(200)],
  },
})

const publicResources = ['/public-stats', '/v1/runtimes']

for (const publicResource of publicResources) {
  new ApiCheck(`public-resource_${publicResource}`, {
    name: `Public Resource ${publicResource}`,
    request: {
      url: `https://api.checkly.com${publicResource}`,
      method: 'GET',
      followRedirects: true,
      assertions: [AssertionBuilder.statusCode().equals(200)],
    },
  })
}
