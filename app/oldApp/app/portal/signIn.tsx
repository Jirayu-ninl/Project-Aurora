import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { signIn } from 'next-auth/react'

const SignIn = ({ setIsSignIn, providers, csrfToken }) => {
  return (
    <>
      <div className='Card-white-20 Border-white-40 relative ml-2 h-full rounded-lg p-8'>
        <h3 className='text-2xl font-semibold uppercase'>Signin</h3>
        <form
          className='Form-white flex flex-col pt-6'
          method='post'
          action='/api/auth/callback/theiceji-login'
        >
          <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
          <input
            className='Border-white-40 rounded-md'
            type='email'
            name='email'
            placeholder='Email'
            required={true}
          />
          <input
            className='Border-white-40 mt-2 rounded-md'
            type='password'
            name='password'
            placeholder='Password'
            required={true}
          />
          <button
            className='Btn-white-40 Anim AnimOpacity-60 mt-5'
            type='submit'
          >
            Submit
          </button>
          <div className='my-3'>
            <input type='checkbox' className='Form-white-checkbox mr-2' />
            <label className='flex'>
              <p className='-mt-px text-xs'>Remember me</p>
            </label>
          </div>
        </form>
        <div className='my-8 flex w-full justify-center'>
          <div className=' my-auto h-px w-12 bg-white/30' />
          <p className='px-3 text-xs'>or Continue with</p>
          <div className=' my-auto h-px w-12 bg-white/30' />
        </div>
        <div className='flex justify-center'>
          <div className=' cursor-pointer rounded-full bg-blue-500 p-2'>
            <FontAwesomeIcon
              icon={brands('facebook-f')}
              size='xs'
              className='h-4 w-4'
              onClick={() => signIn(providers.facebook.id)}
            />
          </div>
          <div className='ml-3 cursor-pointer rounded-full bg-red-500 p-2'>
            <FontAwesomeIcon
              icon={brands('google')}
              size='xs'
              className='h-4 w-4'
              onClick={() => signIn(providers.google.id)}
            />
          </div>
          <div className='ml-3 cursor-pointer rounded-full bg-slate-800 p-2'>
            <FontAwesomeIcon
              icon={brands('github')}
              size='xs'
              className='h-4 w-4'
              onClick={() => signIn(providers.github.id)}
            />
          </div>
        </div>
      </div>
      <p
        className='Anim AnimOpacity-40 mt-1 mr-1 cursor-pointer text-right text-xs'
        onClick={() => setIsSignIn(false)}
      >
        Not have an Account?
      </p>
    </>
  )
}

export default SignIn
