export const getServerSideProps = async (context) => {
  context.getServerSideProps.setHeader(
    'Cache-Control',
    's-maxage=20, stale-while-revalidate'
  )
}
