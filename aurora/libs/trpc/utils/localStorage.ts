/* eslint-disable @typescript-eslint/no-var-requires */
import { AsyncLocalStorage } from 'async_hooks'

// https://github.com/vercel/next.js/blob/canary/packages/next/client/components/request-async-storage.ts
export const asyncStorage: AsyncLocalStorage<any> | any =
  require('next/dist/client/components/request-async-storage').requestAsyncStorage

function throwError(msg: string) {
  throw new Error(msg)
}
export function getRequestStorage<T>(): T {
  if ('getStore' in asyncStorage) {
    return asyncStorage.getStore() ?? throwError("Couldn't get async storage")
  }

  return asyncStorage as T
}
