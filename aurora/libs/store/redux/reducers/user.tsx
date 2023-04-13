import * as UserActions from '../actions/user'

const initialState = {
  name: 'John',
  email: '',
  provider: '',
  isLogin: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case UserActions.LOGIN: {
    const { email, name, provider } = action.payload
    return {
      ...state,
      name: name,
      email: email,
      provider: provider,
      isLogin: true,
    }
    break
  }
  case UserActions.LOGOUT: {
    return {
      ...state,
      name: '',
      email: '',
      provider: '',
      isLogin: false,
    }
    break
  }
  default:
    return state
  }
}

export default userReducer