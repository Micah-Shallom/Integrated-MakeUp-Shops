import styled from "styled-components";

export const AdminLayoutContainer = styled.main`
  width:100%;
  padding:20px;

  & .adminOverall{
    display:flex;
    flex-direction:column;

    }

    &__body{
      display:flex;
      margin-top:25px;
      flex-direction:column;

      .subMain{
        display:flex;
        flex-wrap:wrap;
        margin-top:10px;
        align-items:center;
        justify-content:space-between;

        & > div {
          flex: .5;
          height:100%;
          margin: 10px;
        }
      }
      & .shops{
        margin : 20px 0;

        & > .form > * {
          margin:5px 0;
        }
      }

      .adminOverall__created{
      margin-top:30px;
      background-color:#fff;
   }

      
    }

  
  }
`;