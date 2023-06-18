/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client'

class Prisma {
  URL: string
  connection: any
  isConnected: boolean
  constructor(URL: string) {
    this.URL = URL
    this.connection
    this.isConnected = false
  }

  connect() {
    const prisma = new PrismaClient()
    return prisma.$connect()
  }
  end() {
    this.connection.end()
  }
}

export default Prisma
