import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getAllMembers = async () => {
  const members = await prisma.member.findMany({})

  return members
}

export { getAllMembers }
