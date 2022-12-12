const useNewProductScreenChangeHandlers = (productState) => {
  /**
   * Updates the productId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleProductIdChange = (e) => {
    e.preventDefault();
    productState.productObject.setProductId(e.target.value);
  };

  /**
   * Updates the productName variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleProductNameChange = (e) => {
    e.preventDefault();
    productState.productObject.setProductName(e.target.value);
  };

  /**
   * Updates the productPrice variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleProductPriceChange = (e) => {
    e.preventDefault();
    productState.productObject.setProductPrice(e.target.value);
  };

  /**
   * the change handlers of the screen
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
