import { css } from '@emotion/css'
import clsx from 'clsx'
import type { Dispatch } from 'react'

type tUserInfo = {
  name: string
  username: string
  bio: string
}

const SetProfileInfo = (p: {
  children: React.ReactNode
  setUserInfo: Dispatch<any>
  userInfo: tUserInfo
  submitProfile: (e: any) => void
  loading: boolean
}) => {
  const CSS = {
    form: css``,
    input: css`
      &:-webkit-autofill,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #fff inset !important;
        -webkit-text-fill-color: black !important;
        background: transparent;
      }
    `,
  }

  const handleChange = (e: any) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    p.setUserInfo((state: tUserInfo) => ({ ...state, [name]: value }))
  }

  return (
    <>
      <form
        className={clsx(
          CSS.form,
          'flex grow flex-col space-y-4 pt-2 md:pt-8 xl:pl-8 xl:pt-0 [&>input]:border-b-black dark:[&>input]:border-b-white',
        )}
        onSubmit={p.submitProfile}
      >
        <input
          className={clsx(
            CSS.input,
            'border border-transparent bg-transparent text-sm md:text-2xl xl:text-4xl',
            p.loading && 'opacity-20',
          )}
          type='text'
          name='name'
          placeholder='Name'
          required={true}
          value={p.userInfo.name}
          onChange={handleChange}
          disabled={p.loading}
        />
        <div
          className={clsx(
            'flex text-sm md:text-base',
            p.loading && 'opacity-20',
          )}
        >
          <span>@</span>
          <input
            className={clsx(
              CSS.input,
              'ml-2 grow border border-transparent border-b-black bg-transparent dark:border-b-white',
            )}
            type='text'
            name='username'
            placeholder='username'
            required={true}
            value={p.userInfo.username}
            onChange={handleChange}
            disabled={p.loading}
          />
        </div>
        <input
          className={clsx(
            CSS.input,
            'border border-transparent bg-transparent text-sm md:text-base',
            p.loading && 'opacity-20',
          )}
          type='text'
          name='bio'
          placeholder='Short bio'
          required={true}
          value={p.userInfo.bio}
          onChange={handleChange}
          disabled={p.loading}
        />
        {p.children}
      </form>
    </>
  )
}

export { SetProfileInfo }
