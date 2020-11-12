import React, { useState } from 'react'
import FormInput from '../../Components/FormInput/FormInput.component'
import { UploadButton,UserContainer,UserProfile,UserProfileForm,ProfileContainer,ProfileForm } from './Profile.styles';
import profileImage from '../../assets/Images/pexels-alexander-krivitskiy-1264442.jpg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/UserAuth/UserSelectors';
import firebase, { firestore } from '../../firebase';

const Profile = ({currentUser}) => {
  const {id, displayName} = currentUser;

  const [userCredentials , setUserCredentials] = useState({
    firstName:'',
    lastName : '',
    emailAddress: '',
    phoneNumber : '',
    photoURL : null
  });



  const handleSubmit = e => {
    e.preventDefault();

    firestore.collection('users').doc(id).update({
      displayName : `${firstName} ${lastName}`,
      email : emailAddress,
      phoneNumber : phoneNumber,
      photoURL: null,
      createdAt : firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      console.log('Successfully Updated')
    }).catch(err => console.log(err.message))

    setUserCredentials({
      firstName:'',
      lastName : '',
      emailAddress: '',
      phoneNumber : ''
    })
    console.log(userCredentials);
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
            <h1 className="name">{displayName}</h1>
            <p className='address'>Kaduna South Nigeria</p>
            <p className="timeStamp">..</p>
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
          <div className="footer">
            <UploadButton type='submit'>Save Details</UploadButton>
          </div>
          </ProfileForm>
        </UserProfileForm>     
      </UserContainer>

      
      


    
   </ProfileContainer>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

export default connect(mapStateToProps)(Profile)