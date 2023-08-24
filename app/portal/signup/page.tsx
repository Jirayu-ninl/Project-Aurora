import { SignUpIceJiVerse, SetNavState } from '../components'

function Page() {
  return (
    <>
      <SetNavState id={1} title='Register' />
      <SignUpIceJiVerse />
    </>
  )
}

export default Page
