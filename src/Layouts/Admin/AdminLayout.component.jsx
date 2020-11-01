import React from 'react'
import AccountInfo from './AdminComponents/AccountInfo/AccountInfo.component'
import AdminButton from './AdminComponents/AdminButton/AdminButton.component'
import AdminCreated from './AdminComponents/AdminCreated/AdminCreated.component'
import AdminForm from './AdminComponents/AdminForm/AdminForm.component'
import { AdminEntryContainer } from './AdminComponents/AdminStyles/AdminStyle.styles'
import BasicInfo from './AdminComponents/BasicInfo/BasicInfo.component'
import SocialInfo from './AdminComponents/SocialInfo/SocialInfo.component'
import { AdminLayoutContainer } from './AdminLayout.styles'

const AdminLayout = () => {


  return (
   <AdminLayoutContainer>
     <div className="adminOverall">

       <div className="adminOverall__header">
         <h2 className="adminOverall__header__title">
           Welcome Admin
         </h2>
         <h3 className="adminOverall__header__userName">
           Micah Shallom
         </h3>
       </div>

       <div className="adminOverall__body">
         {/* <AdminEntry main/> */}
         <BasicInfo/>
         <div className="subMain">
          <AccountInfo/>
          <SocialInfo/>
         </div>

         <AdminEntryContainer className='shops'>
         <h2 className='title'><span>Create</span> Shop</h2>
         <p className='subTitle'>Enter shop details...</p>

         <form className="form ">
        <AdminForm
          placeholder='Full Name of Shop Owner'
        />
        <AdminForm
          placeholder='Shop Owner'
        />
        <AdminForm
          placeholder='Shop Location'
        />
        <AdminForm
          placeholder='Shop Registraation Number'
        />

        <textarea className='textArea' placeholder='description'>
        </textarea>

        <div className="footer">
          <AdminButton submit>Submit</AdminButton>
          <AdminButton>Cancel</AdminButton>
          </div>

         </form>
        </AdminEntryContainer>
      

       <div className="adminOverall__created">
        <AdminCreated/>
        <AdminCreated/>
        <AdminCreated/>
       </div>

       </div>

       

     </div>
   </AdminLayoutContainer>
  )
}

export default AdminLayout
