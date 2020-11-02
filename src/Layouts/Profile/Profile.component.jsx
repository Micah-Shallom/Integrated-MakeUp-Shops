import React, { useState } from 'react'
import FormInput from '../../Components/FormInput/FormInput.component'
import { UploadButton,UserContainer,UserProfile,UserProfileForm,ProfileContainer,ProfileForm } from './Profile.styles';
import profileImage from '../../assets/Images/pexels-alexander-krivitskiy-1264442.jpg';

const Profile = () => {

  const [userCredentials , setUserCredentials] = useState({
    firstName:'',
    lastName : '',
    emailAddress: '',
    phoneNumber : ''
  });

  const handleSubmit = e => {
    console.log(userCredentials);
    setUserCredentials({
    firstName:'',
    lastName : '',
    emailAddress: '',
    phoneNumber : ''
    })
  }

  const handleChange = e => {
    const {name,value} = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  }

  const {firstName,lastName,emailAddress,phoneNumber} = userCredentials;

  return (
   <ProfileContainer>
      <UserContainer>
        <UserProfile>
          <div className='main'>
            <img src={profileImage} alt="user_image" className="user_image"/>
            <h1 className="name">Micah Shallom</h1>
            <p className='address'>Kaduna South Nigeria</p>
            <p className="timeStamp">2nd December , 2020</p>
          </div>

          <div className="button_container">
            <UploadButton> 
              Upload Photo
            </UploadButton>
          </div>

        </UserProfile> 

        <UserProfileForm>
          <div className="header">
            <h3>Profile</h3>
            <p>The information can be edited</p>
          </div>

          <ProfileForm onSubmit={handleSubmit}>
            <FormInput 
              handleChange={handleChange}
              value={firstName}
              label='FirstName'
              type="text" 
              name='firstName' 
              required
            />
            <FormInput 
              handleChange={handleChange}
              value={lastName}
              label='LastName'
              type="text" 
              name='lastName' 
              required
            />
            <FormInput
              handleChange= {handleChange}
              value={emailAddress}
              label='Email Address'
              type="text" 
              name='emailAddress' 
              required
            />
            <FormInput 
              handleChange={handleChange}
              value={phoneNumber}
              label='Phone Number'
              type="number" 
              name='phoneNumber' 
              required
            />
          </ProfileForm>

          <div className="footer">
            <UploadButton>Save Details</UploadButton>
          </div>
        </UserProfileForm>     
      </UserContainer>

      
      


    
   </ProfileContainer>
  )
}

export default Profile
