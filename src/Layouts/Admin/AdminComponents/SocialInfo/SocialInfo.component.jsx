import React, { useState } from 'react';
import { AdminEntryContainer } from '../AdminStyles/AdminStyle.styles';
import AdminForm from '../AdminForm/AdminForm.component';
import AdminButton from '../AdminButton/AdminButton.component';


const SocialInfo = () => {

  const [socialInfo , setSocialInfo] = useState({
    facebookURL : '',
    twitterURL: '',
    instagramURL : '',
    linkednURL: ''
  })

  const handleChange = (e) => {
    const {name , value} = e.target;
    setSocialInfo({
      ...socialInfo,
      [name] : value
    })
  }

  const {twitterURL,linkednURL,facebookURL,instagramURL} = socialInfo
  return (
    <AdminEntryContainer>

    <h2 className="title">
    <span>Social</span>
     Information</h2>

    <p className='subTitle'>Description Text Here ....</p>
    
    <form className="formContainer">
      <div className="top">
        <div className="form first">
          <AdminForm 
          placeholder='Facebook'
          type='text'
          handleChange={handleChange}
          name='facebookURL'
          value={facebookURL}
          required
        />
        </div>
        <div className="form second">
        <AdminForm 
        placeholder='Instagram'
          type='text'
          handleChange={handleChange}
          name='instagramURL'
          value={instagramURL}
        required
      />
        </div>
      </div>

      <div className="bottom">
        <div className="form third">
        <AdminForm 
        placeholder='Twitter'
          type='text'
          handleChange={handleChange}
          name='twitterURL'
          value={twitterURL}
        required
      />
        </div>
        <div className="form fourth">
        <AdminForm 
        placeholder='Linkedn'
          type='text'
          handleChange={handleChange}
          name='linkednURL'
          value={linkednURL}
        required
      />
        </div>
      </div>
   
  </form>
  
  <div className="footer">
  <AdminButton submit>Submit</AdminButton>
  <AdminButton>Cancel</AdminButton>
  </div>

 </AdminEntryContainer>
  )
}

export default SocialInfo
