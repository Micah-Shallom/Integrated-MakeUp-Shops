import  styled from "styled-components";

export const ShopProfileCardContainer = styled.div`
  width: 300px;
  position:relative;
  box-shadow : 0 2px 5px rgba(0,0,0,0.2);
  border-radius:5px;
  margin-bottom:30px;
  overflow:hidden;

  .shop__title{
    
    .shop__profile__img{
      width:100%;
      height : 200px;
    }

    h2{
      font-size: 25px;
      text-align:center;
      color:crimson;
      padding:5px ;
    }
  }

  .services{
    padding: 10px 20px;
    .title{
      font-size: 20px;
      margin-bottom:10px;
    }

    .services__body{
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      align-items:center;


      li{
        margin-right: 3px;
        list-style-type:none;
        color:grey;

        ::before{
          content : '*';
        }
      }
    }
  }

  .registry__info{

    a{
    margin-top:5px;
    color:crimson;
    }
  }
`;