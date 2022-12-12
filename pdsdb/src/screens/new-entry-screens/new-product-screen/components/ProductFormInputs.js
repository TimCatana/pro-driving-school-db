import React from "react";
import { SingleRowTextInputDiv, TextInput } from "../../../../components";
import { FormDiv } from "../../common/components/styled";

const ProductFormInputs = (props) => {
  const { productState, productChangeHandlers } = props;

  return (
    <FormDiv>
      <SingleRowTextInputDiv>
        <TextInput
          placeholder={"Product ID (cannot be changed later)"}
          disabled={productState.uiModifiersObject.isLoading || !productState.uiModifiersObject.isNewEntry}
          value={productState.productObject.productId}
          onChange={productChangeHandlers.handleProductIdChange}
          isError={productState.productObject.isProductIdError && productState.productObject.productId.length > 0}
          type="number"
          min="0"
          isLast
        />
      </SingleRowTextInputDiv>
      {/* add min date field and use script to get todays date */}
      <SingleRowTextInputDiv>
        <TextInput
          placeholder={"Product Name"}
          disabled={productState.uiModifiersObject.isLoading || !productState.uiModifiersObject.areFieldsEditable}
          value={productState.productObject.productName}
          onChange={productChangeHandlers.handleProductNameChange}
          isError={productState.productObject.isProductNameError && productState.productObject.productName.length > 0}
          type="text"
          maxLength={245}
          isLast
        />
      </SingleRowTextInputDiv>
      {/* - TODO need to limit how many characters can be inputted */}
      <SingleRowTextInputDiv>
        <TextInput
          placeholder={"Product Price"}
          value={productState.productObject.productPrice}
          disabled={productState.uiModifiersObject.isLoading || !productState.uiModifiersObject.areFieldsEditable}
          onChange={productChangeHandlers.handleProductPriceChange}
          isError={productState.productObject.isProductPriceError && productState.productObject.productPrice.length > 0}
          type="number"
          isLast
        />
      </SingleRowTextInputDiv>
    </FormDiv>
  );
};

export default ProductFormInputs;
