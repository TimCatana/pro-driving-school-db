import styled from "styled-components";

// TODO - change px to rem
const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "3rem")};

  margin: 0;
  padding: ${(props) => (props.padding ? props.padding : "0 1.5rem")};

  display: inline-flex;
  /* position: relative; */
  align-items: center;
  justify-content: center;
  vertical-align: baseline;

  cursor: pointer;
  color: ${(props) => (props.color ? props.color : "#fff")};

  background-clip: padding-box;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#fa6400")};

  border: 0.1rem solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;

  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: ${(props) => (props.fontSize? props.fontSize : "1rem")}; 
  font-weight: 600;
  text-decoration: none;
  line-height: 1.25;

  user-select: none;
  touch-action: manipulation;

  transition: all 250ms;

  -webkit-user-select: none;
  &:focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }

  &:disabled {
    background-color: gray;
  }
`;

export default Button;
