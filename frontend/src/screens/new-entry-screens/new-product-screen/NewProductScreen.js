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

const NewProductScreen = () => {
  const { productState, productChangeHandlers, productButtonHandlers } =
    useNewProductScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <TitleH1>NewProductScreen</TitleH1>

        {!productState.isLoading && (
          <FormDiv>
            <SingleRowTextInputDiv>
              <TextInput
                type="number"
                min="0"
                value={productState.productObject.productId}
                onChange={productChangeHandlers.handleProductIdChange}
                placeholder={"Product ID"}
              />
            </SingleRowTextInputDiv>
            {/* add min date field and use script to get todays date */}
            <SingleRowTextInputDiv>
              <TextInput
                type="text"
                maxLength={245}
                value={productState.productObject.productName}
                onChange={productChangeHandlers.handleProductNameChange}
                placeholder={"Product Name"}
              />
            </SingleRowTextInputDiv>
            {/* - TODO need to limit how many characters can be inputted */}
            <SingleRowTextInputDiv>
              <TextInput
                type="number"
                value={productState.productObject.productPrice}
                onChange={productChangeHandlers.handleProductPriceChange}
                placeholder={"Product Price"}
              />
            </SingleRowTextInputDiv>
            {/* should be a dropdown list of all available instructors*/}
            <ButtonsDiv>
              {productState.isNewEntry && (
                <Button
                  disabled={
                    productState.productObject.isProductIdError ||
                    productState.productObject.isProductNameError ||
                    productState.productObject.isProductPriceError
                  }
                  onClick={productButtonHandlers.handleAddNewProductEntry}
                >
                  Save
                </Button>
              )}

              {!productState.isNewEntry && (
                <Button
                  disabled={
                    productState.productObject.isProductIdError ||
                    productState.productObject.isProductNameError ||
                    productState.productObject.isProductPriceError
                  }
                  onClick={productButtonHandlers.handleEditProductEntry}
                >
                  Modify
                </Button>
              )}
              <Button onClick={() => productState.navigation("/")}>
                Go Back
              </Button>
            </ButtonsDiv>
          </FormDiv>
        )}
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewProductScreen;
