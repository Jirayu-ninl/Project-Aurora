/* eslint-disable prettier/prettier */
import { Init } from '@aurora/views'
import defineConfig from './defineConfig'

const Config = {
  app: { ...defineConfig.app },
  metaData: Init.MetaData(defineConfig.metaData),
  contacts: Init.Contacts(defineConfig.contacts),
}

export default Config
