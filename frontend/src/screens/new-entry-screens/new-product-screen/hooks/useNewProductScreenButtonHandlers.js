import AlertVariants from "../../../../domain/constants/AlertVariants";
import { addOneProductUC, deleteOneProductUC, editOneProductUC } from "../../../../domain/db";

const useNewProductScreenButtonHandlers = (productState) => {
  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewProductEntry = async () => {
    // console.log(productState.productObject)
    productState.uiModifiersObject.setIsLoading(true);
    if (
      !productState.productObject.isProductIdError &&
      !productState.productObject.isProductNameError &&
      !productState.productObject.isProductPriceError
    ) {
      try {
        await addOneProductUC(productState.productObject);
        productState.uiModifiersObject.setDataSaved(true);
      } catch (e) {
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
      try {
        await editOneProductUC(productState.productObject, productState.primary_key);
        productState.messageObject.setMessage("SUCCESS - Successfully updated item in database");
        productState.messageObject.setMessageColor(AlertVariants.SUCCESS);
        productState.messageObject.setShowMessage(true);
      } catch (e) {
        productState.messageObject.setMessage("ERROR - Failed to update item in database");
        productState.messageObject.setMessageColor(AlertVariants.DANGER);
        productState.messageObject.setShowMessage(true);
      }
    }

    productState.uiModifiersObject.setAreFieldsEditable(false);
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
   *
   */
  const handleGoBack = async () => {
    if (productState.uiModifiersObject.isNewEntry) {
      await productState.navigation("/?initial_selection=products");
    } else {
      productState.uiModifiersObject.areFieldsEditable
        ? await productState.uiModifiersObject.setAreFieldsEditable(false)
        : await productState.navigation("/?initial_selection=products");
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteProduct = async () => {
    productState.uiModifiersObject.setIsLoading(true);

    try {
      await deleteOneProductUC(productState.primary_key);
      await handleGoBack();
    } catch (e) {
      productState.messageObject.setMessage("ERROR - Failed to delete item");
      productState.messageObject.setMessageColor(AlertVariants.DANGER);
      productState.messageObject.setShowMessage(true);
    }

    productState.uiModifiersObject.setIsLoading(false);
  };

  const productButtonHandlers = {
    handleAddNewProductEntry,
    handleEditProductEntry,
    handleChangeToEditableForm,
    handleDismissErrorAlert,
    handleDeleteProduct,
    handleGoBack,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { productButtonHandlers };
};

export default useNewProductScreenButtonHandlers;
