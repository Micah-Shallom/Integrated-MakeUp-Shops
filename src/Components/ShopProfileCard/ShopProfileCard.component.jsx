import React from 'react'
import { ShopProfileCardContainer } from './ShopProfileCard.styles';

import image from '../../assets/Images/jake-peterson-VJ4pn_PSBLo-unsplash.jpg'

const ShopProfileCard = () => {
  return (
    <ShopProfileCardContainer>
      <div className="shop__title">
        <img src={image} className='shop__profile__img' alt="shop_profile_img"/>
        <h2>Sandra's Hairs and MakeUp</h2>
      </div>
      <div className="services">
        <h3 className="title">Services We Provide</h3>
        <ul className="services__body">
          <li>Manicure</li>
          <li>Pedicure</li>
          <li>Hair Washing</li>
        </ul>
        <div className="registry__info">
          <a href="">More Details</a>
      </div>
      </div>
    </ShopProfileCardContainer>
  )
}

export default ShopProfileCard
