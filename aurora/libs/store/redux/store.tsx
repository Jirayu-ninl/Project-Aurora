import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const middleware = [thunk]

export const makeStore = (initialState = {}) =>
  createStore(rootReducer, initialState, applyMiddleware(...middleware))
