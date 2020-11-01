import React from 'react'
import {AboutUsContainer,AboutUsHero,AboutUsHeroContainer,AboutUsText,AboutCounter,AboutSectionOne,AboutSectionOneText,AboutSectionTwo,AboutSectionTwoText,Count,CountTitle,CounterItem,Title,Subtitle,ImageContainer,ImageOne,ImageTwo,AboutSectionThree,AboutSectionThreeIllustration} from './AboutPage.styles';

import AboutUsImage from '../../assets/Images/ian-dooley-y_CSTKJ0bEs-unsplash.jpg';
import imageOne from '../../assets/Images/amanda-dalbjorn-t7WrWaewbtw-unsplash.jpg'
import imageTwo from '../../assets/Images/drew-graham-cTKGZJTMJQU-unsplash.jpg'
import svg from '../../undraw/undraw_Setup_wizard_re_nday.svg'

const AboutPage = () => (

  <AboutUsContainer>

    <AboutUsHeroContainer>
        <AboutUsHero imageUrl={AboutUsImage} />
        <AboutUsText>
          About Us
        </AboutUsText>
    </AboutUsHeroContainer>

    <AboutSectionOne>

      <ImageContainer>
        <ImageOne src={imageOne}/>
        <ImageTwo src={imageTwo} />
      </ImageContainer>

      <AboutSectionOneText>
        <Title>Grow Up Your Skills</Title>
        <Subtitle>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui perferendis cumque consectetur optio molestias! Odio ea, eaque corporis voluptates aliquid itaque magni impedit. Vel voluptates consectetur tempora assumenda quas voluptatum.</Subtitle>
      </AboutSectionOneText>
    </AboutSectionOne>

    <AboutSectionTwo>
     <AboutSectionTwoText >
        <Title>Grow Up Your Skills</Title>
        <Subtitle>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui perferendis cumque consectetur optio molestias! Odio ea, eaque corporis voluptates aliquid itaque magni impedit. Vel voluptates consectetur tempora assumenda quas voluptatum.</Subtitle>
      </AboutSectionTwoText>
      <AboutCounter>
        <CounterItem>
          <Count>27,882</Count>
          <CountTitle>Customers</CountTitle>
        </CounterItem>
        <CounterItem>
          <Count>500</Count>
          <CountTitle>Business Owners</CountTitle>
        </CounterItem>
        <CounterItem>
          <Count>1500</Count>
          <CountTitle>Agents</CountTitle>
        </CounterItem>
        <CounterItem>
          <Count>245</Count>
          <CountTitle>Students</CountTitle>
        </CounterItem>
      </AboutCounter>
    </AboutSectionTwo>
    

    <AboutSectionThree>
      <AboutSectionOneText className='modified'>
        <Title>Our Goal</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis aliquid autem, voluptatum quas fuga magni! Assumenda facere, consequuntur laborum autem nobis vitae fuga beatae sit doloremque quisquam, perferendis facilis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eligendi ut excepturi ad? Nesciunt, ipsum a autem expedita magnam cupiditate exercitationem incidunt quo iure consectetur velit atque sed corporis ut?gggggggggggggggggggg
        </Subtitle>
      </AboutSectionOneText>

      <AboutSectionThreeIllustration >
        <img className='img' src={svg}  alt=""/>
      </AboutSectionThreeIllustration>
      
      </AboutSectionThree>
  </AboutUsContainer>

)

export default AboutPage
