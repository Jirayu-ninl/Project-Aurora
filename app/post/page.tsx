import Client from './page.client'
import * as FALLBACK from '@components/post/error'
import { getAllPosts } from './functions'
import { FETCH } from './post.d'

export const metadata = {
  title: 'Posts',
}

async function Page() {
  const data = await getAllPosts()

  if (data.status === FETCH.ERROR) {
    console.log(data)
    return (
      <FALLBACK.ConnectionError
        title='POST'
        backURL='/post'
        error={data.error}
      />
    )
  }

  if (!data.posts) {
    return <FALLBACK.NotFound title='POST' backURL='/post' />
  }

  return (
    <>
      <Client posts={data.posts} />
    </>
  )
}

export default Page
