import {
  addOneProductUC,
  deleteOneProductUC,
  editOneProductUC,
} from "../../../../domain/db";

const useNewProductScreenButtonHandlers = (productState) => {
  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewProductEntry = async () => {
    // TODO - axios call to node backend that adds new course entry
    console.log(`axios call to backend, not implemented yet but button works!
    values:
    ${productState.isLoading}
    pid ${productState.productObject.productId}
    ${typeof productState.productObject.productId}
    ${productState.productObject.isProductIdError}
    pn ${productState.productObject.productName}
    ${typeof productState.productObject.productName}
    ${productState.productObject.isProductNameError}
    pp ${productState.productObject.productPrice}
    ${typeof productState.productObject.productPrice}
    ${productState.productObject.isProductPriceError}
    `);

    if (
      !productState.productObject.isProductIdError &&
      !productState.productObject.isProductNameError &&
      !productState.productObject.isProductPriceError
    ) {
      await addOneProductUC(productState.productObject);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleEditProductEntry = async () => {
    if (
      !productState.productObject.isProductIdError &&
      !productState.productObject.isProductNameError &&
      !productState.productObject.isProductPriceError
    ) {
      await editOneProductUC(productState.productObject, productState.primary_key);
    }
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
    handleDeleteProduct,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { productButtonHandlers };
};

export default useNewProductScreenButtonHandlers;
