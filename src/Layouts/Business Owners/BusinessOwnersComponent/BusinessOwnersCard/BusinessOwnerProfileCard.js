import styled from "styled-components";

export const BusinessOwnerProfileCardContainer = styled.div`
   display:flex;
  flex-direction:column;
  overflow:hidden;
  width: 300px;
  background-color:#fff;
  border-radius:5px;
  margin-bottom:20px;
  box-shadow:0 2px 10px rgba(0,0,0,0.2);

  img{
    height: 250px;
    width: 100%;
  }

  .main__info{

    padding : 10px 20px;
    .name{
      color: crimson;
      margin-bottom:5px;
    }

    .agent__address{
      color:grey;
      font-size:15px;
    }
  }

  .sub__info{
    background-color : whitesmoke;
    padding:10px 20px;

    .entry{
      display:flex;
      align-items:center;

      &:not(:last-of-type){
        margin-bottom:5px;
      }

      & > * {
        color:grey;
      }

      span{
        margin-left: 5px;
      }
    }
  }

.registry__info{
  padding : 10px 20px;

  & > p {
    display:flex;
    flex-direction:column;

    &:not(:last-of-type){
      margin-bottom : 10px;
    }

    & > span:first-of-type{
      font-size: 10px;
    }
  }
}
  .social__info{

    .MuiSvgIcon-root{
      color: crimson;
    }
  }
`;