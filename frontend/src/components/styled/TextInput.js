import styled from "styled-components";

// TODO - change px to rem
const TextInput = styled.input`
  width: 100%;
  height: 1.6rem;

  padding: 0.5rem 1rem;
  margin:  ${(props) => (props.isLast ? "0.1rem 0" : "0.1rem 0.4rem 0.1rem 0")};

  display: block;

  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  line-height: 1.5rem;

  background: var(--input-background);
  color: var(--input-color);

  border:   ${(props) => (props.isError ? "0.1rem solid var(--input-border-error)" : "0.1rem solid var(--input-border)")}; 
  border-radius: 0.4rem;

  transition: border 0.3s ease;

  -webkit-appearance: none;

  &::placeholder {
    color: var(--input-placeholder);
  }
  &:focus {
    outline: none;
    border-color: var(--input-border-focus);
  }
`;

export default TextInput;
