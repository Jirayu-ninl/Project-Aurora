import React from 'react'
// import cookie from 'js-cookie'

export default function getCookie() {
  return (
    <div>
      <button
        type='button'
        onClick={() => {
          fetch('/api/cookieAAPI', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: 'ABC' }),
          })
        }}
      >
        Cook
      </button>
    </div>
  )
}

// export const getServerSideProps = ({ req }) => ({
//   props: { token: req.cookies.token },
// })
