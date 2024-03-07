import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  const req = await request.json()
  if (!req.body) {
    throw new Error('Debug: Throw error (API) from TheIceJi-AURORA')
  }
  return NextResponse.json({ status: 'ok' })
}
