import useJwt from '../hooks/useJwt'

export const isUserLoggedIn = () => {
  return (
    localStorage.getItem('userData') &&
    localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)
  )
}

export const getUserData = () => JSON.parse(localStorage.getItem('userData'))

export const getHomeRouteForLoggedInUser = (userRole) => {
  if (userRole === 'admin') return '/'
  if (userRole === 'client') return { name: 'access-control' }
  return { name: 'auth-login' }
}
