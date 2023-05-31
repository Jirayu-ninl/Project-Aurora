/* eslint-disable prettier/prettier */
import { Init } from '@aurora/views'
import defineConfig from './defineConfig'

export const app = { ...defineConfig.app }
export const metaData = Init.MetaData(defineConfig.metaData)
export const contacts = Init.Contacts(defineConfig.contacts)

const Config = {
  app: { ...defineConfig.app },
  metaData: metaData,
  contacts: contacts,
}

export default Config
