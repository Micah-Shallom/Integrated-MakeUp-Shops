import React, { useState } from 'react';
import { RButton } from '../../Components/Button/CButton.styles';
import video from '../../assets/videos/video.mp4'
import {GiLipstick, GiMirrorMirror} from 'react-icons/gi'
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroContentWrapper,
  HeroH1,
  Content,
  Title,
  SubTitle,
  HeroBtnWrapper,
  ArrowBackward,
  ArrowForward
} from './IntroPage.styles';

const IntroPage = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }
  return (
   <HeroContainer>
     <HeroBg>
     <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
     </HeroBg>
     <HeroContent>
            <HeroH1>
              <GiLipstick className='icon'/>
              Welcome
              <GiMirrorMirror className='icon mirror'/>
            </HeroH1>

            <HeroContentWrapper>
              <Content>
                <Title>Make-up</Title>
                <SubTitle>Studio</SubTitle>
              </Content>

              <Content right='true'>
                <Title>Make-up</Title>
                <SubTitle>Academy</SubTitle>
              </Content>
            </HeroContentWrapper>

            <HeroBtnWrapper>
            <RButton to='/signin' onMouseEnter={onHover} onMouseLeave={onHover}
                primary={true}
                dark={false}
                >
                  Get Started
                  {hover ? <ArrowForward/> : <ArrowBackward/>}
                </RButton>
            </HeroBtnWrapper>
          </HeroContent>
   </HeroContainer>
  )
}

export default IntroPage
