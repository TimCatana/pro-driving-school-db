import AlertVariants from "../../../../domain/constants/AlertVariants";
import { Results } from "../../../../domain/constants/Results";
import { addOneProductUC, deleteOneProductUC, editOneProductUC } from "../../../../domain/db";

const useNewProductScreenButtonHandlers = (productState) => {
  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewProductEntry = async () => {
    // console.log(`axios call to backend, not implemented yet but button works!
    // values:
    // ${productState.isLoading}
    // pid ${productState.productObject.productId}
    // ${typeof productState.productObject.productId}
    // ${productState.productObject.isProductIdError}
    // pn ${productState.productObject.productName}
    // ${typeof productState.productObject.productName}
    // ${productState.productObject.isProductNameError}
    // pp ${productState.productObject.productPrice}
    // ${typeof productState.productObject.productPrice}
    // ${productState.productObject.isProductPriceError}
    // `);

    productState.uiModifiersObject.setIsLoading(true);
    if (
      !productState.productObject.isProductIdError &&
      !productState.productObject.isProductNameError &&
      !productState.productObject.isProductPriceError
    ) {
      const result = await addOneProductUC(productState.productObject);

      if (result.data.status == Results.SUCCESS) {
        productState.uiModifiersObject.setDataSaved(true);
      } else {
        productState.messageObject.setMessage("ERROR - Failed to add product to database");
        productState.messageObject.setMessageColor(AlertVariants.DANGER);
        productState.messageObject.setShowMessage(true);
      }
    }
    productState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleEditProductEntry = async () => {
    productState.uiModifiersObject.setIsLoading(true);

    if (
      !productState.productObject.isProductIdError &&
      !productState.productObject.isProductNameError &&
      !productState.productObject.isProductPriceError
    ) {
      const result = await editOneProductUC(productState.productObject, productState.primary_key);

      if (result.data.status == Results.SUCCESS) {
        productState.messageObject.setMessage("SUCCESS - Successfully updated item in database");
        productState.messageObject.setMessageColor(AlertVariants.SUCCESS);
        productState.messageObject.setShowMessage(true);
        productState.uiModifiersObject.setAreFieldsEditable(false);
      } else {
        productState.messageObject.setMessage("ERROR - Failed to update item in database");
        productState.messageObject.setMessageColor(AlertVariants.DANGER);
        productState.messageObject.setShowMessage(true);
        productState.uiModifiersObject.setAreFieldsEditable(false);
      }
    }

    productState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleChangeToEditableForm = async () => {
    productState.uiModifiersObject.setAreFieldsEditable(true);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDismissErrorAlert = async () => {
    productState.messageObject.setShowMessage(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteProduct = async () => {
    const result = await deleteOneProductUC(productState.primary_key);

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };

  const productButtonHandlers = {
    handleAddNewProductEntry,
    handleEditProductEntry,
    handleChangeToEditableForm,
    handleDismissErrorAlert,
    handleDeleteProduct,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { productButtonHandlers };
};

export default useNewProductScreenButtonHandlers;
