import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('homepage-api-check-1', {
  name: 'Fetch Book List',
  alertChannels: [],
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    url: 'https://beta.theiceji.com/api/home',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$[0].id').isNotNull(),
    ],
  },
})
