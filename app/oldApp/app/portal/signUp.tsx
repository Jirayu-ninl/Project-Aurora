import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import {
  email as emailValidator,
  password as passwordValidator,
} from '@libs/utils/validator'
import { RES } from '@libs/utils/res/status'

const SignUp = ({ setIsSignIn, csrfToken }) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    type: 'signup',
    email: '',
    password: '',
  })

  const [confirmPassword, setConfirmPassword] = useState(null)

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    setFormData((state) => ({ ...state, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (emailValidator(formData.email) === null) {
        toast.warn('Please enter a valid E-mail')
        return
      }

      if (formData.password !== confirmPassword) {
        toast.warn('Passwords need to match!')
        return
      }

      const IsValidPassword = passwordValidator.Func(formData.password)

      if (IsValidPassword.error) {
        toast.warn(IsValidPassword.msg)
        return
      }

      try {
        const getToken = await axios.post('/api/auth/token', {
          setHeader: true,
        })
        const csrfToken = getToken.data.token

        const body = { token: csrfToken, ...formData }
        await axios
          .post('/api/auth/credentials', body)
          .then((res) => {
            if (res.status === RES.created) {
              Cookies.remove('tempToken')
              toast.success(res.data.msg)
              router.push('/app')
            } else if (res.status === RES.success) {
              toast.warn(res.data.msg)
            }
          })
          .catch((error) => {
            if (error.response) {
              toast.error(
                `Error ${error.response.status}: ${error.response.data.error}`,
              )
            } else if (error.request) {
              toast.error(`Error: ${error.request.toString()}`)
            } else {
              toast.error(`Error: ${error.message.toString()}`)
            }
          })
      } catch (error) {
        toast.error("Can't connect to server")
      }
    } catch (error) {
      toast.error(error.toString())
    }
  }

  return (
    <div className='Card-white-20 Border-white-40 relative ml-2 h-full rounded-lg p-8'>
      <h3 className='text-3xl font-semibold uppercase'>Signup</h3>
      <form className='Form-white flex flex-col pt-6' onSubmit={handleSubmit}>
        <input
          className='Border-white-40 rounded-md'
          type='text'
          name='email'
          placeholder='Email'
          required={true}
          onChange={handleChange}
        />
        <input
          className='Border-white-40 mt-2 rounded-md'
          type='password'
          name='password'
          placeholder='Password'
          required={true}
          onChange={handleChange}
        />

        <input
          className='Border-white-40 mt-2 rounded-md'
          type='password'
          name='confirm_password'
          placeholder='Confirm Password'
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className='Btn-white-40 Anim AnimOpacity-60 mt-5' type='submit'>
          Submit
        </button>
        <div className='my-3 flex text-xs'>
          <p className='mr-1 opacity-60'>Have an Account?</p>
          <p
            className='Anim cursor-pointer font-bold uppercase opacity-80 hover:opacity-100'
            onClick={() => setIsSignIn(true)}
          >
            SignIn
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignUp
