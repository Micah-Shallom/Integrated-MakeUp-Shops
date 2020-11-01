import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 100%;
  height:90vh;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:20px;
`;

export const SignInWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(2,1fr);
  height: 80%;
  width: 90%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  border : 2px solid #ccc;
`;

export const SignInForm = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:relative;
  width: 80%;
  margin:auto;

  & .bisect{
    position:relative;

    &::before{
      content : '';
      position:absolute;
      border-bottom: 2px solid #000;
      width: 10px;
      top: 50%;
      left: -15px;
    }

    &::after{
      content : '';
      position:absolute;
      border-bottom: 2px solid #000;
      width: 10px;
      top: 50%;
      left: 30px;
    }
    
  }
`;

export const SignInLogo = styled.div`
 align-self:flex-start;
`;

export const SignInH1 = styled.h1`
  font-size: 20px;
  font-weight: 300;
  text-align:center;
  margin-bottom: 20px;
`;

export const SocialButtons = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width: 100%;
  margin-top:20px;
`;

export const SignInHero = styled.div`
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items:center;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.2);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

`;

export const HeroBg = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image:${({imageUrl}) => `url(${imageUrl})`};

   
`;


export const ContentContainer = styled.div `
    height: 90px;
    padding: 10px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`;

export const ContentTitle = styled.h1 `
      font-weight: bold;
      margin: 0 6px 6px;
      font-size: 50px;
      color: #4a4a4a;
`
export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 20px;
`;


export const SignInRem = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding : 0 24px;
  width: 100%;
`;

export const RememberMe = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const SignInButtons = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width: 100%;
  margin-top:20px;
`;