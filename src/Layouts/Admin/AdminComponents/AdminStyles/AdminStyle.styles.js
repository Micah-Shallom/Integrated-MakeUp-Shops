import styled from "styled-components";
import {ThemeColor} from '../../../../ThemeProvider'

export const AdminEntryContainer = styled.div`
  background-color:#fff;
  margin-bottom:${({main}) => (main ? '30px' : 0)};
  padding: 20px;

  & .title{
    margin-bottom: 5px;
    position:relative;
    color:#000;

    span{
      color : ${ThemeColor.P_Dark};
      margin-right: 5px;
    }

    &::before{
      content: '';
      position:absolute;
      width: 40px;
      height:3px;
      color:#000;
    }
  }

  .subTitle{
    color:grey;
    font-size: 16px;
  }

  & .formContainer{
    margin-top:10px;
    display: flex;
    flex-direction:column;

    .top{
      margin-bottom:10px;
    }

    .top , .bottom{
      display:flex;
      justify-content:space-between;
    }

    .top > div , .bottom > div {
      flex:1;
    }

    .form{
      padding: 0 10px;
    }
    
  }

  & .textArea{
    margin-top:15px;
    height: 150px;
    width:100%;
    outline:none;
    border : none;
    resize:none;
    border-bottom : 1px solid ${ThemeColor.P_Dark}
  }

  & input::placeholder ,  & textarea::placeholder{
    font-size:12px;
    color : #ccc;
  }

  .footer{
    display:flex;
    padding: 10px;
  }
`;