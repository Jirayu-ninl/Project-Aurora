/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import jwtDefaultConfig from './jwtDefaultConfig'

export default class JwtService {
  jwtConfig = { ...jwtDefaultConfig }

  isAlreadyFetchingAccessToken = false

  subscribers = []

  constructor(jwtOverrideConfig: {
    loginEndpoint: string
    registerEndpoint: string
    refreshEndpoint: string
    logoutEndpoint: string
    tokenType: string
    storageTokenKeyName: string
    storageRefreshTokenKeyName: string
  }) {
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig }

    axios.interceptors.request.use(
      (config) => {
        const accessToken = this.getToken()

        if (accessToken) {
          config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`
        }
        return config
      },
      (error) => Promise.reject(error),
    )

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const { config, response } = error
        const originalRequest = config

        if (response && response.status === 401) {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true
            this.refreshToken().then((r) => {
              this.isAlreadyFetchingAccessToken = false

              this.setToken(r.data.accessToken)
              this.setRefreshToken(r.data.refreshToken)

              this.onAccessTokenFetched(r.data.accessToken)
            })
          }
          const retryOriginalRequest = new Promise((resolve) => {
            this.addSubscriber((accessToken: any) => {
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`
              resolve(this.axios(originalRequest))
            })
          })
          return retryOriginalRequest
        }
        return Promise.reject(error)
      },
    )
  }

  onAccessTokenFetched(accessToken: any) {
    this.subscribers = this.subscribers.filter((callback) =>
      callback(accessToken),
    )
  }

  addSubscriber(callback: (accessToken: any) => void) {
    this.subscribers.push(callback)
  }

  getToken() {
    return localStorage.getItem(this.jwtConfig.storageTokenKeyName)
  }

  getRefreshToken() {
    return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)
  }

  setToken(value: string) {
    localStorage.setItem(this.jwtConfig.storageTokenKeyName, value)
  }

  setRefreshToken(value: string) {
    localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value)
  }

  login(...args: any[]) {
    return axios.post(this.jwtConfig.loginEndpoint, ...args)
  }

  register(...args: any[]) {
    return axios.post(this.jwtConfig.registerEndpoint, ...args)
  }

  refreshToken() {
    return axios.post(this.jwtConfig.refreshEndpoint, {
      refreshToken: this.getRefreshToken(),
    })
  }
}
