import styled from "styled-components";
import { MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display:flex;
  justify-content: center;
  align-items:center;
  padding: 0 30px;
  height: 90vh;
  position:relative;
  z-index: 1;

  ::before {
    content: '';
    position:absolute;
    top : 0;
    left:0;
    right:0;
    bottom: 0;
    background: linear-gradient(180deg , rgba(0,0,0,.2) 0% , rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg , rgba(0,0,0,.2) 0%, transparent 100%);
    z-index:2;
    ;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow:hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit:cover;
  object-fit:cover;
  background:#232a34;
`;

export const HeroContent = styled.div`
  position:absolute;
  z-index: 30;
  color:#feffff;
  max-width: 1200px;
  width: 100%;
  padding : 5px 20px;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #feffff;
  font-size: 48px;
  text-align:center;
  padding: 10px 0;
`;

export const HeroContentWrapper = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  height: 280px;
  width: 100%;

  @media screen and (max-width: 768px){
    flex-direction:column;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 40%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:${({right}) => (right ? 'flex-end' : 'flex-start')};
  padding: 0 20px;
  transition: 1s ease-in-out;

  &:hover{
    border:2px solid #fff;
  }

  @media screen and (max-width: 768px){
    padding: 0 20px;
    width: 100%;
    border : none;
    
    &:first-of-type{
      margin-bottom: 2rem;
    }
  }
  
`;

export const Title = styled.span`
  font-size:2rem;
  text-transform:uppercase;
  font-weight: 200;
`;

export const SubTitle = styled.span`
text-transform:uppercase;
  font-size:4rem;
`;

export const HeroBtnWrapper = styled.div`
  margin-top:32px;
  display: flex;
  flex-direction:column;
  align-items:center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left : 8px;
  font-size : 20px;
`;

export const ArrowBackward = styled(MdKeyboardArrowRight)`
  margin-left : 8px;
  font-size : 20px;
`;


