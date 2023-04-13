export const LOGIN = 'AUTH_LOGIN'
export const LOGOUT = 'AUTH_LOGOUT'

export const login = (data) => async (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: data,
  })
  return true
}
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
}
