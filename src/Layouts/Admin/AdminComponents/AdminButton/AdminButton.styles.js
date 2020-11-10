import styled from "styled-components";

export const AdminBtn = styled.button`
  width: 80px;
  outline:none;
  cursor: pointer;
  background-color:white;
  border-radius:20px;
  font-size:12px;
  margin-right:3px;
  padding:10px ;
  ${({submit}) => submit && `
    color:#fff;

    &:hover {
      box-shadow : 0 2px 5px rgba(0,0,0,0.3);
    }
  `}
`;