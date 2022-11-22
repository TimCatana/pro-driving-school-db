import React from "react";
import styled from "styled-components";
import useNewProductScreen from "./useNewProductScreen";

const ConfirmButton = styled.button``;
const TextInput = styled.input``;
const DropdownList = styled.select``;
const ListOption = styled.option``;

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
  } = useNewProductScreen();

  return (
    <div>
      <h1>NewProductScreen</h1>
      <TextInput
        type="number"
        min="0"
        value={productId}
        onChange={handleProductIdChange}
      ></TextInput>
      {/* add min date field and use script to get todays date */}
      <TextInput
        type="text"
        value={productName}
        onChange={handleProductNameChange}
      ></TextInput>{" "}
      {/* - TODO need to limit how many characters can be inputted */}
      <TextInput
        type="number"
        value={productPrice}
        onChange={handleProductPriceChange}
      ></TextInput>
      {/* should be a dropdown list of all available instructors*/}
      <ConfirmButton onClick={handleAddNewProductEntry}> Save </ConfirmButton>
    </div>
  );
};

export default NewProductScreen;
