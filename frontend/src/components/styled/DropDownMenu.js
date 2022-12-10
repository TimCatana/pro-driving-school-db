import styled from "styled-components";

// TODO - change px to rem
const DropDownMenu = styled.select`
  width: 100%;
  height: 2.65rem;
  
  padding: 0.5rem 1rem;
  margin:  ${(props) => (props.isLast ? "0.1rem 0" : "0.1rem 0.4rem 0.1rem 0")};
  
  display: block;
  
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  line-height: 1.5rem;
  
  border-radius: 6px;
  border:   ${(props) => (props.isError ? "0.1rem solid var(--input-border-error)" : "0.1rem solid var(--input-border)")}; 
  background: var(--input-background);
  
  color: var(--input-color);
  transition: border 0.3s ease;
  -webkit-appearance: auto;
  
  &::placeholder {
    color: var(--input-placeholder);
  }
  
  &:focus {
    outline: none;
    border-color: var(--input-border-focus);
  }
  
  select:invalid {
    color: gray;
  }

  &:disabled {
    border: none;
    /* border: 0.1rem solid black; */
    background: #d9d9d9;
    color: black;
    outline: none;
    border-color: var(--input-border-focus);
  }
`;

export default DropDownMenu;
