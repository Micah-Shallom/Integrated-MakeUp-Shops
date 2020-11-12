import styled from "styled-components";

export const MainLayoutContainer = styled.div`
  height:90vh;
  width: 100vw;
  display:flex;
`;

export const MainPageContainer = styled.div`
  width:80vw;
  height:100%;
  overflow: hidden scroll;

  & .body{
    height:90vh;

    & .progress {
      width:100%;
      height:100%;
      background: linear-gradient(135deg ,rgba(121, 62, 78,.5),rgba(4, 72, 85,.5));
      display:grid;
      place-items:center;
    }
  }
`;