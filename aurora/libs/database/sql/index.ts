/* eslint-disable @typescript-eslint/no-explicit-any */
import mysql from 'mysql2'

class SQL {
  URL: string
  connection: any
  isConnected: boolean
  constructor(URL: string) {
    this.URL = URL
    this.connection
    this.isConnected = false
  }
  connect() {
    this.connection = mysql.createConnection(process.env.DATABASE_URL)
  }
  end() {
    this.connection.end()
  }
}

export default SQL
