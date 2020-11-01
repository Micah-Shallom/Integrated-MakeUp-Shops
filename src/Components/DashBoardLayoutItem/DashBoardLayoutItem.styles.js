import styled from "styled-components";

export const DashBoardItem = styled.div`
  width:100%;
  display:grid;
  place-items:center;
  border-bottom:.5px solid grey;

  :hover{
    background-color:lightgrey;
  }

& .text{
  padding: 12px 0px;
}

  & .icon {
    color:#000;
    font-size:20px;
    margin-right:5px;
  };

  & .title{
    font-size: 18px;
  }
`;