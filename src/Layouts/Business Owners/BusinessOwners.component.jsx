import React from 'react'
import { BusinessOwnersContainer } from './BusinessOwners.styles'
import BusinessOwnerProfileCard from './BusinessOwnersComponent/BusinessOwnersCard/BusinessOwnerProfileCard.jsx'


const BusinessOwners = () => {
  return (
   <BusinessOwnersContainer>

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
