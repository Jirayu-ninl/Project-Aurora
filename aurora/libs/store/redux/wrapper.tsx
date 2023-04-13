import { createWrapper } from 'next-redux-wrapper'
import { makeStore } from './store'

export const Wrapper = createWrapper(makeStore)