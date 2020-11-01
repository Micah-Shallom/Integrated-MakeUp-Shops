import styled from "styled-components";

export const AboutUsContainer = styled.div`

`;

export const AboutUsHeroContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:350px;
  position:relative;
  
`;

export const AboutUsHero = styled.div`
  width:100%;
  height:100%;
  background-image:${({imageUrl}) => `url(${imageUrl})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;

  ::before{
    content: '';
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:rgba(0,0,0,0.6);
  }
`;

export const AboutUsText =styled.div`
position:absolute;
  font-size:2.5rem;
  font-weight:bolder;
  color:white;
`;

export const AboutSectionOne = styled.div`
  display:flex;
  align-items:center;
  margin-top:100px;
`;

export const ImageContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:50%;
  height:100%;
`;

export const ImageOne = styled.img`
  width: 250px;
  height: 100%;
`;

export const ImageTwo = styled.img`
  width: 250px;
  height: 100%;
`;

export const AboutSectionOneText = styled.div`
  width:50%;
  padding: 20px 0 ;
  height:100%;
`;

export const AboutSectionTwo = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding: 20px;
`;

export const AboutSectionTwoText= styled.div`
  width: 50%;
  text-align:center;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const Subtitle = styled.p`
  font-size:15px;
  line-height:2rem;
`;

export const AboutCounter = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 0 100px;
`;

export const CounterItem = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  height:100px;
`;

export const Count = styled.h1`
  color: darkcyan;

`;

export const CountTitle = styled.p`
  font-size: 12px;
  margin-top:-10px;
`;

export const AboutSectionThree = styled.div`
  display:flex;
  padding: 10px 20px;
  height: 400px;

  & .modified{
    padding: 0 30px;
  }
`;

export const AboutSectionThreeIllustration = styled.div`
 width:50%;
 height:100%;

  & .img{
    width:100%;
    height:100%;
  }
`;