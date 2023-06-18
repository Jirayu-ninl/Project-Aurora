// import Config from '@global/config'
import Component from './component'

const GoogleAnalytics = () => {
  //   const GOOGLE_TAG_MANAGER = Config.app.GOOGLE_TAG_MANAGER
  const GOOGLE_TAG_MANAGER = process.env.GOOGLE_TAG_MANAGER
  return <Component gtm={GOOGLE_TAG_MANAGER as string} />
}

export default GoogleAnalytics
