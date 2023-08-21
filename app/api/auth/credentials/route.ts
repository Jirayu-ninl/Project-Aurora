import { CredentialsSignUp } from '@aurora/libs/auth/signIn'

export const POST = async (req: Request) => await CredentialsSignUp(req)
