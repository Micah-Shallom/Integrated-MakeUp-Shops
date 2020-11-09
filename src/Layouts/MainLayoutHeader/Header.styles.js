import styled from "styled-components";
import ThemeColor from "../../ThemeProvider";

export const HeaderContainer = styled.div`
    height:10vh;
    width:80vw;
    border-bottom:2px solid ${ThemeColor.Darker_Red};
    background-color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 20px;
`