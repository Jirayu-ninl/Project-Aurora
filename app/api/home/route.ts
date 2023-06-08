import { NextResponse } from 'next/server'

export async function GET() {
  const res = { text: 'hello' }
  return NextResponse.json({ res })
}
