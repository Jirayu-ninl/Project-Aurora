import { defineConfig } from 'checkly'
// import { Frequency } from 'checkly/constructs'

const config = defineConfig({
  projectName: 'TheIceJi Aurora',
  logicalId: 'theiceji-aurora',
  repoUrl: 'https://github.com/Jirayu-ninl/project-aurora',
  checks: {
    activated: true,
    muted: false,
    runtimeId: '2023.02',
    frequency: 10,
    locations: ['us-east-1', 'eu-west-1', 'ap-south-1'],
    tags: ['website', 'api'],
    alertChannels: [],
    checkMatch: '**/*.check.js',
    browserChecks: {
      frequency: 10,
      testMatch: '**/*.spec.js',
    },
  },
  cli: {
    runLocation: 'eu-west-1',
    privateRunLocation: 'private-dc1',
    reporters: ['list'],
  },
})

export default config
