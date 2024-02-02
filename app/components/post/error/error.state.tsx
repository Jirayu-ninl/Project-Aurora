import { SetNavStateDefault } from '@aurora/views/state'

const PageState = ({ title }: { title: string }) => (
  <SetNavStateDefault pageTitle={title + ' | Error'} />
)

export { PageState }
