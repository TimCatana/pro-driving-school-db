const useNewProductScreenChangeHandlers = (productState) => {
  /**
   * Updates the productId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleProductIdChange = (e) => {
    e.preventDefault();
    productState.setProductObject({
      ...productState.productObject,
      productId: e.target.value,
    });
  };

  /**
   * Updates the productName variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleProductNameChange = (e) => {
    e.preventDefault();
    productState.setProductObject({
      ...productState.productObject,
      productName: e.target.value,
    });
  };

  /**
   * Updates the productPrice variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleProductPriceChange = (e) => {
    e.preventDefault();
    productState.setProductObject({
      ...productState.productObject,
      productPrice: e.target.value,
    });
  };

  /**
   * return object
   */

  const productChangeHandlers = {
    handleProductIdChange,
    handleProductNameChange,
    handleProductPriceChange,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    productChangeHandlers,
  };
};

export default useNewProductScreenChangeHandlers;
