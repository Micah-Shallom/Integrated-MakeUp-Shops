import React from 'react';
import {BusinessOwnerProfileCardContainer} from './BusinessOwnerProfileCard.js'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import image from '../../../../assets/Images/kelly-sikkema-BjqLa-5vLeI-unsplash.jpg'

const BusinessOwnerProfileCard = () => {
  return (
  <BusinessOwnerProfileCardContainer>
        <img src={image} alt="agent_image"/>
      <div className="main__info">
        <h2 className="name">Micah Shallom</h2>
        <div className="agent__address">
          Kaduna , Nigeria
        </div>
      </div>
      <div className="sub__info">
        <p className="entry">
          <PhoneIcon/>
          <span>(+234) 90 7111 1150</span>
        </p>
        <p className="entry">
          <MailIcon/>
          <span>micahshallom@gmail.com</span>
        </p>
      </div>
      <div className="registry__info">
        <p className="registered__by">
          <span>Registered By : </span>
          <span>Musa Muhammed</span>
        </p>
        <p className="registered__students">
          <span>Registered Students : </span>
          <span><a href="#">Click to see more ...</a></span>
        </p>
        <p className="registered__shops">
          <span>Registered Shops:</span>
          <span><a href="#">Click to see</a></span>
        </p>
      </div>
      <div className="social__info">
        <IconButton><FacebookIcon/></IconButton>
        <IconButton><TwitterIcon/></IconButton>
        <IconButton><LinkedInIcon/></IconButton>
      </div>
  </BusinessOwnerProfileCardContainer>
  )
}

export default BusinessOwnerProfileCard
