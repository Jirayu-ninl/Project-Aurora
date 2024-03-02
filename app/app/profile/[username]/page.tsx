import { Client } from './page.client'

async function Page({
  params: { username },
}: {
  params: { username: string }
}) {
  return (
    <>
      <Client username={username} />
    </>
  )
}

export default Page
