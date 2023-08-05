import ClientLayout from './layout.client'

export const metadata = {
  title: {
    template: '%s | TheIceJi',
  },
}

function Layout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}

export default Layout
