import styled from "styled-components";
import ThemeColor from "../../ThemeProvider";

export const HeaderContainer = styled.div`
    height:10vh;
    width:80vw;
    background-color:white;
    box-shadow:2px 2px 10px rgba(255,255,255,.9);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 20px;
    box-shadow : 2px 2px 10px 3px ${ThemeColor.Medium_Green}
`