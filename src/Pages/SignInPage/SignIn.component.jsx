import React, { useState } from 'react'
import { RButton } from '../../Components/Button/CButton.styles';
import FormInput from '../../Components/FormInput/FormInput.component';
import SocialBtn from '../../Components/SocialButton/SocialBtn.Component';
import {SignInContainer,SignInForm,SignInH1,SignInHero,ContentContainer,ContentSubtitle,ContentTitle,HeroBg,SignInWrapper,SignInButtons,SignInLogo,SignInRem,SocialButtons,RememberMe ,FormWrapper} from './SignIn.styles';
import { FaGoogle, FaUser} from 'react-icons/fa';
import SignInImage from '../../assets/Images/pesce-huang-Gby4rXlXBm4-unsplash.jpg';
import { SignInWithGoogle } from '../../firebase';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [user , setUserCredentials] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {

    const {name, value} = e.target;

    setUserCredentials({
      ...user,
      [name] : value
    })
  }

  const {email,password} = user
  return (
    <SignInContainer>

      <SignInWrapper>
      <SignInForm>
          <SignInLogo>
            <FaUser/>
          </SignInLogo>
          <SignInH1>Please login to your account.</SignInH1>
         
          <FormWrapper>
            <FormInput 
              handleChange={handleChange}
              value={email}
              label='Email'
              type="text" 
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
          </FormWrapper>
         


          <SignInRem>

            <RememberMe>
              <input type="checkbox"  className='check'/>
              <div>Remember Me</div>
            </RememberMe>
            
              <div>Forgot Password</div>

          </SignInRem>
          <SignInButtons>
           <SocialBtn type='submit' >
             Sign In
           </SocialBtn>
           <SocialBtn handleClick={SignInWithGoogle}  icon={<FaGoogle/>} type='button' >
                Google
              </SocialBtn>
        </SignInButtons>

        <p className='create-account'>Do not have an account? 
        <Link to='/signup' className='link'> Create an account</Link>
        </p>
        </SignInForm>

        <SignInHero>
            <HeroBg className='background-image' imageUrl={SignInImage} />
            <ContentContainer>
              <ContentTitle>
                Welcome
              </ContentTitle>
              <ContentSubtitle>
                Be a part of something beautiful
              </ContentSubtitle>
            </ContentContainer>
          
        </SignInHero>

       
      </SignInWrapper>

    </SignInContainer>
  )
};

export default SignIn;
