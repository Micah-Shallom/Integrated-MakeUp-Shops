import React, { useState } from 'react'
import { SignInButtons } from '../../Pages/SignInPage/SignIn.styles';
import { RButton } from '../../Components/Button/CButton.styles';
import FormInput from '../../Components/FormInput/FormInput.component';
import SocialBtn from '../../Components/SocialButton/SocialBtn.Component';
import {SignUpContainer,SignUpForm,SignUpTitle} from './SignUp.styles'

const SignUp = () => {

  const [userCredentials , setUserCredentials] = useState({
    displayName : '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {

    const {name,value} = e.target;

    setUserCredentials({
      ...userCredentials,
      [name]:value
    })
  }

  const handleSubmit = (e) => {
    
  }

  const {email,displayName,password,confirmPassword} = userCredentials;
  return (
    <SignUpContainer >

  
      <SignUpForm onSubmit={handleSubmit}>
      <SignUpTitle>Create An Account</SignUpTitle>
        <FormInput
          handleChange={handleChange}
          value={displayName}
          label='Display Name'
          type="text" 
          name='displayName' 
          required
        />
  
        <FormInput
          handleChange={handleChange}
          value={email}
          label='Email'
          type="email" 
          name='email' 
          required
        />
        <FormInput
          handleChange={handleChange}
          value={password}
          label='Password'
          type="password" 
          name='password' 
          required
        />
        <FormInput
          handleChange={handleChange}
          value={confirmPassword}
          label='Confirm Password'
          type="password" 
          name='confirmPassword' 
          required
        />

        <SignInButtons>
           <SocialBtn type='submit' title='Sign Up'/>
            <RButton to='/signin' sharp='false'>
              Log In
            </RButton>
        </SignInButtons>
      </SignUpForm>
    </SignUpContainer>
  )
}

export default SignUp
