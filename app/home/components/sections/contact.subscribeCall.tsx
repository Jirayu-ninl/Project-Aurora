'use server'
import Prisma from '@aurora/libs/database/prisma'

const subscribeCall = async (data: { email: string }) => {
  try {
    const subscribeList: any = await Prisma.iceJiVerse.findUnique({
      where: { title: 'newsletter' },
    })

    if (subscribeList) {
      if (subscribeList.content) {
        await Prisma.iceJiVerse.update({
          where: { title: 'newsletter' },
          data: {
            content: {
              users: [...subscribeList.content['users'], data.email],
            },
          },
        })
      }
    } else {
      await Prisma.iceJiVerse.create({
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
