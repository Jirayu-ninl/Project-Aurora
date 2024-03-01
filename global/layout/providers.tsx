import { TrpcProvider } from './provider.trpc'
import { NextUIProvider } from './provider.nextUI'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TrpcProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </TrpcProvider>
  )
}
