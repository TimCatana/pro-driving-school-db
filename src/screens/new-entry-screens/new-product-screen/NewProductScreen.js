import React from "react";
import { useNewProductScreen } from "./hooks";
import { Title, LoadingSpinner, CustomAlert } from "../../../components";
import { WrapperDiv, ContainerDiv } from "../common/components/styled";
import { ProductFormInputs, ProductFormButtons } from "./components";

const NewProductScreen = () => {
  const { productState, productChangeHandlers, productButtonHandlers } = useNewProductScreen();

  return (
    <WrapperDiv>
      <ContainerDiv>
        {productState.uiModifiersObject.isNewEntry && <Title>Add New Product</Title>}

        {!productState.uiModifiersObject.isNewEntry && <Title>Edit Product</Title>}

        {productState.uiModifiersObject.isLoading && <LoadingSpinner />}

        {!productState.uiModifiersObject.isLoading && (
          <>
            {productState.messageObject.showMessage && (
              <CustomAlert
                variant={productState.messageObject.messageColor}
                message={productState.messageObject.message}
                handleClose={productButtonHandlers.handleDismissErrorAlert}
              />
            )}

            <ProductFormInputs productState={productState} productChangeHandlers={productChangeHandlers} />

            <ProductFormButtons productState={productState} productButtonHandlers={productButtonHandlers} />
          </>
        )}
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default NewProductScreen;
