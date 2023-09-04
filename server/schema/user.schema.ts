import { z } from 'zod'

export const usernameValidationSchema = z
  .string()
  .regex(
    /^[A-Za-z0-9_]*$/,
    'The "username" field can only contain letters, numbers, and _.',
  )

export const updateUserProfileSchema = z.object({
  name: z.string(),
  username: usernameValidationSchema,
  bio: z.string(),
  image: z.object({
    avatar: z.object({
      name: z.string(),
      imageId: z.string(),
    }),
    cover: z.object({
      name: z.string(),
      imageId: z.string(),
    }),
  }),
})
export type updateUserProfileInput = z.input<typeof updateUserProfileSchema>
