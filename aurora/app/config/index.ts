/* eslint-disable prettier/prettier */
import { Init } from '../../views'
import defineConfig from './defineConfig'

const config = {
  app: { ...defineConfig.app },
  metaData: Init.MetaData(defineConfig.metaData),
  contacts: Init.Contacts(defineConfig.contacts),
}

export default config
