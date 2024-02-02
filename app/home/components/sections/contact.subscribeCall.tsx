'use server'
import { prisma } from '@aurora/libs/database/prisma'

const subscribeCall = async (data: { email: string }) => {
  try {
    const subscribeList: any = await prisma.iceJiVerse.findUnique({
      where: { title: 'newsletter' },
    })

    if (subscribeList) {
      if (subscribeList.content) {
        await prisma.iceJiVerse.update({
          where: { title: 'newsletter' },
          data: {
            content: {
              users: [...subscribeList.content['users'], data.email],
            },
          },
        })
      }
    } else {
      await prisma.iceJiVerse.create({
        data: {
          title: 'newsletter',
          content: {
            users: [data.email],
          },
        },
      })
    }
  } catch (e) {
    throw new Error("Database/IceJiVerse/Newsletter: Can't add user email")
  }
}
export { subscribeCall }
