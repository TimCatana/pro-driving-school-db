import styled from "styled-components";

// TODO - change px to rem
const TextInput = styled.input`
  display: block;
  width: 100%;
  padding: 8px 16px;
  margin: 5px, 0;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  -webkit-appearance: none;
  color: var(--input-color);
  border: 1px solid var(--input-border);
  background: var(--input-background);
  transition: border 0.3s ease;
  &::placeholder {
    color: var(--input-placeholder);
  }
  &:focus {
    outline: none;
    border-color: var(--input-border-focus);
  }
`;

export default TextInput;
