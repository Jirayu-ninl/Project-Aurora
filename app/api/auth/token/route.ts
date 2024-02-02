// import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import cryptoRandomString from 'crypto-random-string'
import { setResponse as setRes } from '@aurora/utils/server/response.status'
import cookie from 'cookie'

const POST = async (request: Request) => {
  const req = await request.json()
  try {
    if (req.setHeader === true) {
      const csrfToken = cryptoRandomString({
        length: 32,
        type: 'alphanumeric',
      })

      return new NextResponse(csrfToken, {
        status: 200,
        headers: {
          'Set-Cookie': cookie.serialize('tempToken', csrfToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/',
            maxAge: 60, // 1 min
          }),
        },
      })
    } else {
      setRes.invalidHeader('Invalid Header')
    }
  } catch (e) {
    setRes.internalError('Authorization failed')
  }
}

export { POST }
