import styled from "styled-components";

export const AdminCreatedContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  border:2px solid #ccc;
  margin: 10px;

  & .userInfo{
    display:flex;
    flex-wrap:wrap;
    font-size:12px;
    flex:.90;

    & > p{
      flex:1;
      text-align:center;
    }
  }
`;