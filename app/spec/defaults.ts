export const defaults = {
  pageUrl: process.env.ENVIRONMENT_URL || 'https://beta.theiceji.com',
  playwright: {
    viewportSize: { width: 1920, height: 1080 },
  },
}
