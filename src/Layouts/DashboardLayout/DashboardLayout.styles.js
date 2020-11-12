import styled from "styled-components";
import ThemeColor from "../../ThemeProvider";


export const LayoutContainer = styled.div`
  width: 20vw;
  height:90vh;
`;

export const DashBoardLayoutContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
`;

export const UserProfile = styled.div`
  height:120px;
  padding: 10px ;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  text-align:center;
  border-bottom:2px solid #ccc;
  background:${ThemeColor.Medium_Green};
  

  & .profile_img{
    height:70px;
    width:70px;
    border-radius:50%;
    margin: 0 auto;
    border: 2px solid white;
  
  }

  & .name {
    font-weight:bold;
    font-size:20px;
    color:#fff;
  }

  & .userName {
    font-size : 15px;
    color: #ccc;
  }
`;

export const DashBoardRoutes = styled.div`
  width: 100%;
  display:flex;
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  border-right: 1px solid ${ThemeColor.Medium_Green};
  
  & div{
    flex: 1;
  }
`;

export const DashBoardLayoutItem = styled.div`
  width:100%;
  display:grid;
  place-items:center;
  border-bottom:.5px solid grey;
  transition:.3s ease-in-out all;  

& .text{
  width:95%;
  padding: 12px 0px;
  display:flex;
}

  & .icon {
    color:#000;
    font-size:20px;
    margin-right:5px;
    height:100%;
    display:grid;
    place-items:center;
    flex:1;
    color:${ThemeColor.Dark_Green}
  }

  & .title{
    font-size: 18px;
    width:65%;
    flex:5;
  }

  :hover{
    background-color:${ThemeColor.Medium_Green};
    color:white;
  }
`;