import styled from "styled-components";


export const LayoutContainer = styled.div`
  width: 20vw;
  height:90vh;
  border: 2px solid #ccc;
  ${'' /* overflow-y:scroll; */}
`;

export const DashBoardLayoutContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
`;

export const UserProfile = styled.div`
  height:120px;
  padding: 10px 0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:100%;
  text-align:center;
  border-bottom:2px solid #ccc;
  

  & .profile_img{
    height: 50px;
    width:50px;
    border-radius:50%;
    margin: 0 auto;
    border: 2px solid white;
  
  }

  & .name {
    font-weight:bold;
    font-size:20px;
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
  overflow-y:scroll;
  
  & div{
    flex: 1;
  }
`;