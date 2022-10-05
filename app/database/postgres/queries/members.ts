import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getAllMembers = async () => {
  const members = await prisma.member.findMany({
    include: {
      Status: true
    }
  })

  return members
}

export { getAllMembers }
