import { Link } from "react-router-dom";
import styled from "styled-components";
import {ThemeColor} from '../../ThemeProvider';


export const RButton = styled(Link)`
   border-radius: ${({sharp}) => (sharp ? 0 : ' 50px')};
  background: ${({primary}) => (primary ? ThemeColor.ColorTwo : '#010606')};
  white-space: nowrap;
  padding : ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color : ${({dark}) => (dark ? '#010606' : ThemeColor.ColorFive)};
  font-size : ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border : none;
  cursor: pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration:none;
  transition: all .2s ease-in-out;

  &:hover{
    transition: all .2s ease-in-out;
    background : ${({primary}) => (primary ? '#fff' : '#01bf71')};
    color:black;
  }
`;