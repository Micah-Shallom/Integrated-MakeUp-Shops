import styled, { css } from 'styled-components'

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -10px;
  font-size: 12px;
  color: ${mainColor};
`;
export const GroupContainer = styled.div`
  position: relative;
  margin: 5px 0;
  width: 100%;
  height: 50px;

  input[type = 'password'] {
    letter-spacing : .3rem;
  }
`;

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: $sub-color;
    font-size: 15px;
    padding: 5px 10px 5px 5px;
    display: block;
    width: inherit;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 15px 0 0 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      ${shrinkLabelStyles}
    }
`;

export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 5px;
    transition: 300ms ease all;

    &.shrink {
      ${shrinkLabelStyles}
    }
`