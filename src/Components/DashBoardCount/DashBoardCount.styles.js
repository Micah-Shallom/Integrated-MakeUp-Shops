import styled from "styled-components";

export const CountContainer = styled.div`
  background-color:white;
  border-radius:5px;
  text-align:center;
  padding: 35px 30px;

  & .icon{
    height: 50px ;
    display:flex;
    justify-content:center;
    align-items:center;
    width:50px;
    color:white;
    background-color:${({color}) => color};
    border-radius:50%;
    margin: 0 auto 10px;
  }
`;