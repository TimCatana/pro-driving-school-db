import React from "react";
import styled from "styled-components";
import useNewProductScreen from "./useNewProductScreen";
import {
  Button,
  DropDownMenu,
  TextInput,
  SingleRowTextInputDiv,
} from "../../../components/common";

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerDiv = styled.div``;

const TitleH1 = styled.h1`
  text-align: center;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

// const ConfirmButton = styled.button``;
// const TextInput = styled.input``;
// const DropdownList = styled.select``;
// const ListOption = styled.option``;

const NewProductScreen = () => {
  const {
    isLoading,
    productId,
    isProductIdError,
    handleProductIdChange,
    productName,
    isProductNameError,
    handleProductNameChange,
    productPrice,
    isProductPriceError,
    handleProductPriceChange,
    handleAddNewProductEntry,
    handleEditProductEntry,
  } = useNewProductScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <TitleH1>NewProductScreen</TitleH1>

        {!isLoading && (
          <FormDiv>
            <SingleRowTextInputDiv>
              <TextInput
                type="number"
                min="0"
                value={productId}
                onChange={handleProductIdChange}
                placeholder={"Product ID"}
              />
            </SingleRowTextInputDiv>
            {/* add min date field and use script to get todays date */}
            <SingleRowTextInputDiv>
              <TextInput
                type="text"
                maxLength={245}
                value={productName}
                onChange={handleProductNameChange}
                placeholder={"Product Name"}
              />
            </SingleRowTextInputDiv>
            {/* - TODO need to limit how many characters can be inputted */}
            <SingleRowTextInputDiv>
              <TextInput
                type="number"
                value={productPrice}
                onChange={handleProductPriceChange}
                placeholder={"Product Price"}
              />
            </SingleRowTextInputDiv>
            {/* should be a dropdown list of all available instructors*/}
            <ButtonsDiv>
              <Button
                disabled={
                  isProductIdError || isProductNameError || isProductPriceError
                }
                onClick={handleAddNewProductEntry}
              >
                Save
              </Button>
              <Button
                disabled={
                  isProductIdError || isProductNameError || isProductPriceError
                }
                onClick={handleEditProductEntry}
              >
                Modify
              </Button>
            </ButtonsDiv>
          </FormDiv>
        )}
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewProductScreen;
