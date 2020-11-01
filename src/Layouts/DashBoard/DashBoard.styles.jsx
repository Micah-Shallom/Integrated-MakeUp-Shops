import styled from "styled-components";

export const DashBoardContainer = styled.div`
  width:100%;
`;

export const DashBoardHeader = styled.div`
  width: 100%;
  padding: 15px 10px;
  display:flex;
  justify-content:space-between;

  & .intro{

    & .title{
      font-weight: bolder;
      font-size:30px;
    }

    & .subtitle{
      font-size : 15px;
    }
  }
`;

export const DashBoardCounter = styled.div`
  display:flex;
  justify-content:space-between;
  margin: 0 30px;
  padding: 15px 0;
`;