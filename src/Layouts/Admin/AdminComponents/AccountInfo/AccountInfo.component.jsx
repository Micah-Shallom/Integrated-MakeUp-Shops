import React, { useState } from 'react';
import { AdminEntryContainer } from '../AdminStyles/AdminStyle.styles';
import AdminForm from '../AdminForm/AdminForm.component';
import AdminButton from '../AdminButton/AdminButton.component';

const AccountInfo = () => {
  const [accInfo , setAccInfo] = useState({
    email : '',
    phone : '',
    password : '',
    confirmPassword : ''
  });

  const handleChange = (e) => {
    const {name,value} =e.target;
    setAccInfo({
      ...accInfo,
      [name] : value
    })

  }


  const {email,phone,password,confirmPassword} = accInfo;
  return (
    <AdminEntryContainer>

            <h2 className="title">
            <span>Account</span>
             Information</h2>

            <p className='subTitle'>Description Text Here ....</p>
            
            <form className="formContainer" autoComplete='off' >
              <div className="top">
                <div className="form first">
                  <AdminForm 
                    handleChange={handleChange}
                    placeholder='Email'
                    type='email'
                    name='email'
                    value={email}
                  required
                />
                </div>
                <div className="form second">
                <AdminForm 
                placeholder='Phone'
                type='number'
                name='phone'
                value={phone}
                required
              />
                </div>
              </div>

              <div className="bottom">
                <div className="form third">
                <AdminForm 
                placeholder='Password'
                handleChange={handleChange}
               type='password'
               value={password}
                required
              />
                </div>
                <div className="form fourth">
                <AdminForm 
                placeholder='Confirm Password'
                type='password'
                handleChange={handleChange}
                value={confirmPassword}
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

export default AccountInfo
