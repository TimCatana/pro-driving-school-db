import React from "react";
import styled from "styled-components";
import { useNewProductScreen } from "./hooks";
import {
  Button,
  DropDownMenu,
  TextInput,
  SingleRowTextInputDiv,
  Title,
} from "../../../components";
import {
  WrapperDiv,
  ContainerDiv,
  FormDiv,
  ButtonsDiv,
} from "../common/components/styled";

const NewProductScreen = () => {
  const { productState, productChangeHandlers, productButtonHandlers } =
    useNewProductScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        <Title>NewProductScreen</Title>

        {!productState.isLoading && (
          <FormDiv>
            <SingleRowTextInputDiv>
              <TextInput
                isError={
                  productState.productObject.isProductIdError &&
                  productState.productObject.productId.length > 0
                }
                isLast
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
                isError={
                  productState.productObject.isProductNameError &&
                  productState.productObject.productName.length > 0
                }
                isLast
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
                isError={
                  productState.productObject.isProductPriceError &&
                  productState.productObject.productPrice.length > 0
                }
                isLast
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
