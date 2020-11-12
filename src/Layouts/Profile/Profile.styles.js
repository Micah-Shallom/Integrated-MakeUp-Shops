import styled from "styled-components";
import ThemeColor from "../../ThemeProvider";

export const ProfileContainer = styled.div`
  width:100%;
  padding-top:30px;
`;

export const UserContainer = styled.div`
  display:flex;
  padding : 10px 20px;
  justify-content:space-between;
`;

export const UserProfile = styled.div`
    width:30%;;
    height:300px;
    text-align:center;
    display:flex;
    flex-direction:column;
    background-color:#fff;
    box-shadow:2px 4px 10px rgba(0,0,0,.5);

  & .main{
      padding:20px 10px;
      display:flex;
      flex-direction:column;
      align-items:center;
      flex-basis:80%;

    & .user_image {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      margin:0 auto;
      border:2px solid #ccc;
    }

    & .name{
      font-weight: bold;
      font-size: 25px;
      margin-bottom:10px;
    }

    & .address{
      margin-bottom: 5px;
    }

    & .address, & .timeStamp{
      color: #555;
      font-size: 20px;
    }
  }


`;

export const UploadButton = styled.button`
  border: none;
  outline:none;
  padding : 10px 20px;
  font-size:1.25rem;
  font-weight: bold;
  margin: 0 auto;
  color:#fff;
  background-color:darkcyan;
`;

export const UserProfileForm = styled.div`
  width: 60%;
  background-color:#fff;
  box-shadow:2px 4px 10px rgba(0,0,0,.5);

  & .header{
    width: 100%;
    padding: 10px;
    border-bottom : 2px solid ${ThemeColor.Darker_Red};
  }

  & .footer{
    margin:0 auto;
    display:flex;
    place-items:center;
    padding:10px;
  }

`;

export const ProfileForm = styled.form`
  width: 100%;
  padding : 10px 20px;
`;