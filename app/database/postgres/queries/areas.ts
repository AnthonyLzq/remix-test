import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getAllAreas = async () => {
  const members = await prisma.area.findMany({})

  return members
}

export { getAllAreas }
