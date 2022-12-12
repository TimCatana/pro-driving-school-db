import React from "react";
import { Button } from "../../../../components";
import { ButtonsDiv } from "../../common/components/styled";

const ProductFormButtons = (props) => {
  const { productState, productButtonHandlers } = props;

  return (
    <ButtonsDiv>
      {productState.uiModifiersObject.isNewEntry && (
        <Button
          disabled={
            productState.uiModifiersObject.isLoading ||
            productState.productObject.isProductIdError ||
            productState.productObject.isProductNameError ||
            productState.productObject.isProductPriceError
          }
          onClick={productButtonHandlers.handleAddNewProductEntry}
        >
          Save
        </Button>
      )}

      {!productState.uiModifiersObject.isNewEntry && (
        <>
          {!productState.uiModifiersObject.areFieldsEditable && (
            <Button
              disabled={productState.uiModifiersObject.isLoading}
              onClick={productButtonHandlers.handleChangeToEditableForm}
            >
              Edit
            </Button>
          )}

          {productState.uiModifiersObject.areFieldsEditable && (
            <Button
              disabled={
                productState.uiModifiersObject.isLoading ||
                productState.productObject.isProductIdError ||
                productState.productObject.isProductNameError ||
                productState.productObject.isProductPriceError
              }
              onClick={productButtonHandlers.handleEditProductEntry}
            >
              Save Edit
            </Button>
          )}
        </>
      )}
      <Button disabled={productState.uiModifiersObject.isLoading} onClick={productButtonHandlers.handleGoBack}>
        Go Back
      </Button>
    </ButtonsDiv>
  );
};

export default ProductFormButtons;
