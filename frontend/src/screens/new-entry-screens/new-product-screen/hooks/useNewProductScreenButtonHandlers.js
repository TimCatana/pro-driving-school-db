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

    productState.setIsLoading(true);
    if (
      !productState.productObject.isProductIdError &&
      !productState.productObject.isProductNameError &&
      !productState.productObject.isProductPriceError
    ) {
      await addOneProductUC(productState.productObject);
    }
    productState.setIsLoading(false);
    productState.setProductSaved(true);
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
      await editOneProductUC(
        productState.productObject,
        productState.primary_key
      );
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
