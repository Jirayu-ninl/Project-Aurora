/* eslint-disable @typescript-eslint/no-explicit-any */
import JwtService from '../functions/jwtService'

export default function useJwt(jwtOverrideConfig: any) {
  const jwt = new JwtService(jwtOverrideConfig)

  return {
    jwt,
  }
}
