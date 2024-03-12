import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      name: 'TheIceJi STELLA',
      env: process.env.NODE_ENV,
      status: 'ok',
      isRunning: true,
    },
    { status: 200 },
  )
}
