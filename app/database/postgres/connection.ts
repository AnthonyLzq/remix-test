import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
let dbConnected = false

const dbConnection = async (): Promise<{
  connect: () => Promise<boolean>
  disconnect: () => Promise<boolean>
}> => {
  return {
    connect: async () => {
      if (!dbConnected) {
        dbConnected = true
        await prisma.$connect()
        console.log('Postgres connection established.')
      }

      return dbConnected
    },
    disconnect: async () => {
      if (dbConnected) {
        dbConnected = false
        await prisma.$disconnect()
        console.log('Postgres connection closed.')
      }

      return dbConnected
    }
  }
}

export { dbConnection }
