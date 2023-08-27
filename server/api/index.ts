import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from './routers'

export const trpc = createTRPCReact<AppRouter>({
  unstable_overrides: {
    useMutation: {
      async onSuccess(opts) {
        await opts.originalFn()
        await opts.queryClient.invalidateQueries()
      },
    },
  },
})

export type Inputs = inferRouterInputs<AppRouter>
export type Outputs = inferRouterOutputs<AppRouter>
