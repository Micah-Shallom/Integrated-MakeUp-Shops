import React from 'react'
import { BusinessOwnersContainer } from './BusinessOwners.styles'
import BusinessOwnerProfileCard from './BusinessOwnersComponent/BusinessOwnersCard/BusinessOwnerProfileCard.jsx'


const BusinessOwners = () => {
  return (
   <BusinessOwnersContainer>
      <header className="intro">
          <h3 className="title">All Business Owners</h3>
          <div className="subtitle">Welcome To Makeup Studio</div>
        </header>

        <main className="body">
          <BusinessOwnerProfileCard/>
          <BusinessOwnerProfileCard/>
          <BusinessOwnerProfileCard/>
          <BusinessOwnerProfileCard/>
        </main>

   </BusinessOwnersContainer>
  )
}

export default BusinessOwners
