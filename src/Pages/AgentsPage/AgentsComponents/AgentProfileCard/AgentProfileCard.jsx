import React from 'react'
import { AgentProfileCardContainer } from './AgentProfileCard'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import image from '../../../../assets/Images/alex-iby-XhMSz5I1kn8-unsplash.jpg'

const AgentProfileCard = () => {
  return (
   <AgentProfileCardContainer>
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
      <div className="social__info">
        <IconButton><FacebookIcon/></IconButton>
        <IconButton><TwitterIcon/></IconButton>
        <IconButton><LinkedInIcon/></IconButton>
      </div>
   </AgentProfileCardContainer>
  )
}

export default AgentProfileCard;
