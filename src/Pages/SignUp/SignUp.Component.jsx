import React, { useState } from 'react'
import { SignInButtons } from '../../Pages/SignInPage/SignIn.styles';
import FormInput from '../../Components/FormInput/FormInput.component';
import SocialBtn from '../../Components/SocialButton/SocialBtn.Component';
import {SignUpContainer,SignUpForm,SignUpTitle} from './SignUp.styles'
import {Link, Redirect} from 'react-router-dom'
import { auth, createUserProfileDocument } from '../../firebase';

const SignUp = () => {

  const [userCredentials , setUserCredentials] = useState({
    displayName : '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const cleanUp = () => {
    if(password !== confirmPassword){
      return setUserCredentials({
        ...userCredentials,
        password:'',
        confirmPassword:''
      })
    }
    return setUserCredentials({
      displayName : '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  const handleChange = (e) => {

    const {name,value} = e.target;

    setUserCredentials({
      ...userCredentials,
      [name]:value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {displayName,email,password,confirmPassword} = userCredentials;

    if(password !== confirmPassword){
      alert('Password Mismatch')
      cleanUp();
      return;
    }

    try {
        const {user} = await auth.createUserWithEmailAndPassword(email,password);

        await createUserProfileDocument(user, {displayName} )
        alert('Account Created Successfully')
        cleanUp();

    } catch (error) {
      alert('Error Creating User:' , error.message);
      console.error(error)
      cleanUp()
    }
  }

  const {email,displayName,password,confirmPassword} = userCredentials;
  return (
    <SignUpContainer >

  
      <SignUpForm onSubmit={handleSubmit} autoComplete='off'> 
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
           <SocialBtn type='submit' >
             Sign Up
           </SocialBtn>
          <p className="signIn create-account">
            Already Have An Account? 
            <Link to='/signin' className='link'>  Sign In</Link>
          </p>
        </SignInButtons>
      </SignUpForm>
    </SignUpContainer>
  )
}

export default SignUp
