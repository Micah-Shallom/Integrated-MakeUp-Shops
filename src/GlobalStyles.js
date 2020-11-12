import { createGlobalStyle } from "styled-components";

export const GlobalStylings = createGlobalStyle`
body,html{
  margin:0;
  padding:0;
  box-sizing:border-box;
  height:100vh;
  ${'' /* background: linear-gradient(135deg ,rgb(121, 62, 78),rgb(4, 72, 85)); */}
}

`;