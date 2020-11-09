import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeColor from '../../ThemeProvider';


export const RButton = styled(Link)`
 background:linear-gradient(150deg, ${ThemeColor.Darker_Red},${ThemeColor.Medium_Green}) ;
  outline: none;
  padding : 15px 30px;
  border : none;
  border-radius:20px;
  cursor: pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration:none;
  transition: all .2s ease-in-out;
  color:#fff;

  &:hover{
    transition: all .2s ease-in-out;
    background : ${({primary}) => (primary ? '#fff' : '#01bf71')};
    color:black;
  }
`;