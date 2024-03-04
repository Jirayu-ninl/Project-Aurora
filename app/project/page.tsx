import Client from './page.client.temp'
import * as FALLBACK from '@components/post/error'
import { FETCH } from './project.d'
import { getAllProjects } from './functions'

export const metadata = {
  title: 'Projects',
}

async function Page() {
  const data = await getAllProjects()

  if (data.status === FETCH.ERROR) {
    return (
      <FALLBACK.ConnectionError
        title='PROJECT'
        backURL='/project'
        error={data.error}
      />
    )
  }

  if (!data.projects) {
    return <FALLBACK.NotFound title='PROJECT' backURL='/project' />
  }

  return (
    <>
      <Client projects={data.projects} />
    </>
  )
}

export default Page
