import React from 'react'
import ShopProfileCard from '../../Components/ShopProfileCard/ShopProfileCard.component'
import { ShopPageContainer } from './ShopsPage.styles'

const ShopsPage = () => {
  return (
    <ShopPageContainer>
      <div className="header">
        <h3 className='title'>Check out all latest registered shops</h3>
        <h4 className='subtitle'>Contact shop owners and apply as a student and/or register for your services.</h4>
      </div>

      <div className="body">
        <ShopProfileCard/>
        <ShopProfileCard/>
        <ShopProfileCard/>
        <ShopProfileCard/>
        <ShopProfileCard/>
      </div>
    </ShopPageContainer>
  )
}

export default ShopsPage
