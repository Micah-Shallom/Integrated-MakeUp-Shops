import React, { useState } from 'react'
import { RButton } from '../../Components/Button/CButton.styles';
import FormInput from '../../Components/FormInput/FormInput.component';
import SocialBtn from '../../Components/SocialButton/SocialBtn.Component';
import {SignInContainer,SignInForm,SignInH1,SignInHero,ContentContainer,ContentSubtitle,ContentTitle,HeroBg,SignInWrapper,SignInButtons,SignInLogo,SignInRem,SocialButtons,RememberMe } from './SignIn.styles';
import {FaFacebookF, FaGoogle, FaUser} from 'react-icons/fa';
import SignInImage from '../../assets/Images/pesce-huang-Gby4rXlXBm4-unsplash.jpg';

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
          <SocialButtons>
              <SocialBtn icon={<FaFacebookF/>} title='FaceBook' type='button'/>
              <SocialBtn icon={<FaGoogle/>}  title='Goggle' type='button'/>
          </SocialButtons>

          <p className='bisect'>OR</p>


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


          <SignInRem>

            <RememberMe>
              <input type="checkbox" />
              <div>Remember Me</div>
            </RememberMe>
            
              <div>Forgot Password</div>

          </SignInRem>
          <SignInButtons>
           <SocialBtn type='submit' title='Login'/>
            <RButton to='/signup' sharp='false'>
              Sign Up
            </RButton>
        </SignInButtons>
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
