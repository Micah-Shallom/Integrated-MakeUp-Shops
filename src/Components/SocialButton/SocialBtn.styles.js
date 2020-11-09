import styled from "styled-components";
import ThemeColor from "../../ThemeProvider";

export const SButton = styled.button`
  background-color:${ThemeColor.Dark_Green};
  color : white;
  padding :  12px 30px;
  font-size: 1rem;
  border : none;
  outline: none;
  display:flex;
  align-items:center;
  justify-content:space-between;


  & div{
    margin-right: 5px;
  }
`;