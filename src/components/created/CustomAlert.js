import React from "react";
import styled from "styled-components";

import { IoCloseSharp } from "react-icons/io5";
import AlertVariants from "../../domain/constants/AlertVariants";

const WrapperDiv = styled.div`

`

const AlertDiv = styled.div`
  width: 100%;
  max-width: 850px;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  /* border: 1px solid "fff"; */
  border-radius: 8px;
  background-color: ${(props) => {
    if (props.color == AlertVariants.DANGER) {
      return "#FFCCBC";
    } else if (props.color == AlertVariants.WARNING) {
      return "#FFF9C4";
    } else if (props.color == AlertVariants.INFO) {
      return "B3E5FC";
    } else if (props.color == AlertVariants.SUCCESS) {
      return "#DCEDC8";
    } else if (props.color == AlertVariants.DARK) {
      return "rgb(255, 153, 0)";
    }
  }};
`;

const AlertText = styled.p`
  padding: 6px;
  margin: 6px;
  color: ${(props) => {
    if (props.color == AlertVariants.DANGER) {
      return "#b71c1c";
    } else if (props.color == AlertVariants.WARNING) {
      return "#212121";
    } else if (props.color == AlertVariants.INFO) {
      return "B3E5FC";
    } else if (props.color == AlertVariants.SUCCESS) {
      return "#33691E";
    } else if (props.color == AlertVariants.DARK) {
      return "black";
    }
  }};
`;

const TextDiv = styled.div`
  flex: 19;
`;
const CloseButtonDiv = styled.div`
  flex: 1;
`;

const AlertClose = styled.button`
  flex: 1;

  /* below is how to give a button no styling */
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const CustomAlert = (props) => {
  return (
    <AlertDiv color={props.variant}>
      <TextDiv>
        <AlertText color={props.variant}>{props.message}</AlertText>
      </TextDiv>
      <CloseButtonDiv>
        <AlertClose onClick={props.handleClose}>
          <IoCloseSharp />
        </AlertClose>
      </CloseButtonDiv>
    </AlertDiv>
  );
};

export default CustomAlert;
