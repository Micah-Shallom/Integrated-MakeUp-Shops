import styled from "styled-components";

export const DashBoardContainer = styled.div`
  width:100%;
`;

export const DashBoardCounter = styled.div`
  display:flex;
  justify-content:space-between;
  margin: 0 30px;
  padding: 15px 0;
`;

export const CountContainer = styled.div`
  background-color:white;
  border-radius:5px;
  text-align:center;
  padding: 35px 30px;
  border:2px solid #ccc;

  & .icon{
    height: 50px ;
    display:flex;
    justify-content:center;
    align-items:center;
    width:50px;
    color:white;
    border-radius:50%;
    margin: 0 auto 10px;
    background-color:${({color}) => color};
  }
  `;