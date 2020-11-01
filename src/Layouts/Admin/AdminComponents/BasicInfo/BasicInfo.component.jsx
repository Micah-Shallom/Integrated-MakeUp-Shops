import React, { useState } from 'react';

import {AdminEntryContainer} from '../AdminStyles/AdminStyle.styles';
import AdminForm from '../AdminForm/AdminForm.component';
import AdminButton from '../AdminButton/AdminButton.component';


const BasicInfo = () => {

  const [basicInfo , setBasicInfo] = useState({
    firstName : '',
    lastName : '',
    phoneNumber : '',
    dob : '',
    age : '',
    email : '',
    gender : ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setBasicInfo({
      ...basicInfo,
      [name] : value
    })
  };
  return (
    <AdminEntryContainer >

            <h2 className="title">
            <span>Basic</span>
             Information</h2>

            <p className='subTitle'>Description Text Here ....</p>
         
          <form className="formContainer" autocomplete='off'>

            <div className="top">
          <div className="form first">
              <AdminForm 
                handleChange={handleChange}
                placeholder='First Name'
                name='firstName'
                type='text'
                required
              />
            </div>
            <div className="form second">
            <AdminForm 
                handleChange={handleChange}
                placeholder='Last Name'
                name='lastName'
                type='text'
                required
              />
            </div>
            <div className="form third">
            <AdminForm 
                handleChange={handleChange}
                placeholder='Phone Number'
                name='phoneNumber'
                type='number'
                min='0'
                required
              />
            </div>
           
          </div>
            <div className="bottom">
            <div className="form fourth">
            <AdminForm 
                handleChange={handleChange}
                placeholder='Date Of Birth'
                name='dob'
                type='date'
                required
              />
            </div>
              <div className="form fifth">
              <AdminForm 
                handleChange={handleChange}
                placeholder='Age'
                name='age'
                type='number'
                min='0'
                required
              />
              </div>
              <div className="form sixth">
              <AdminForm 
                handleChange={handleChange}
                placeholder='Enter Your Email'
                name='email'
                type='email'
                required
              />
              </div>
              <div className="form seventh">
              <AdminForm 
                handleChange={handleChange}
                placeholder='Gender'
                name='gender'
                type='text'
                required
              />
              </div>
            </div>
           
          </form>

          <textarea className="textArea" placeholder='Description'>
          </textarea>

          <div className="footer">
          <AdminButton submit>Submit</AdminButton>
          <AdminButton>Cancel</AdminButton>
          </div>

         </AdminEntryContainer>
  )
}

export default BasicInfo
