import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = FormData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>
            Welcome back!
          </p>
        </header>
        <form>
          <input className='emailInput' type='email' placeholder='E-mail' id='email' value={email} onchange={onChange} />

          <div className='passwordInputDiv'>
            <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Password' id='password' value={password} onChange={onChange} />

            <img src={visibilityIcon} alt='show password' 
            className='showPassword'
            onClick={() => setShowPassword((prevState) => !prevState)} />
          </div>
          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot password?
          </Link>

          <div className='signInBar'>
            <p className='signInText'>Sign in
            </p>
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
        {/* google OAuth*/}
        <Link to='/signup' className='registerLink'>Sign up instead</Link>
      </div>
    </>
  )
}

export default SignIn
