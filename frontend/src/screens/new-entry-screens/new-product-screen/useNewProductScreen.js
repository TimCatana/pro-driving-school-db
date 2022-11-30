import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import isDateFormatYYYYMMDD from "../../../components/helpers/validators/isDateFormatYYYYMMDD";
import axios from "axios";
import { isNumber } from "../../../components/helpers/validators";

const useNewProductScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  // let history = useHistory();

  const [isLoading, _setIsLoading] = useState(false);

  const [productId, _setProductId] = useState("");
  const [isProductIdError, _setIsProductIdError] = useState(true);

  const [productName, _setProductName] = useState("");
  const [isProductNameError, _setIsProductNameError] = useState(true);

  const [productPrice, _setProductPrice] = useState("");
  const [isProductPriceError, _setIsProductPriceError] = useState(true);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Validates newly inputted productId
   * @dependent productId
   */
  useEffect(() => {
    if (isNumber(productId)) {
      parseInt(productId) > -1
        ? _setIsProductIdError(false)
        : _setIsProductIdError(true);
    } else {
      _setIsProductIdError(true);
    }
  }, [productId]);

  /**
   * Validates newly inputted productName
   * @dependent productName
   */
  useEffect(() => {
    productName.length > 0 && productName.length < 250
      ? _setIsProductNameError(false)
      : _setIsProductNameError(true);
  }, [productName]);

  /**
   * Validates newly inputted productName
   * @dependent productName
   */
  useEffect(() => {
    if (isNumber(productPrice)) {
      parseInt(productPrice) > -1
        ? _setIsProductPriceError(false)
        : _setIsProductPriceError(true);
    } else {
      _setIsProductPriceError(true);
    }
  }, [productPrice]);

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /***********************/
  /***** TEXT INPUTS *****/
  /***********************/

  /**
   * Updates the productId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleProductIdChange = (e) => {
    e.preventDefault();
    _setProductId(e.target.value);
  };

  /**
   * Updates the productName variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleProductNameChange = (e) => {
    e.preventDefault();
    _setProductName(e.target.value);
  };

  /**
   * Updates the productPrice variable to contain the newly selected value
   * @param value (string) The value inputted into the textInput
   */
  const handleProductPriceChange = (e) => {
    e.preventDefault();
    _setProductPrice(e.target.value);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewProductEntry = () => {
    // TODO - axios call to node backend that adds new course entry
    // console.log(`axios call to backend, not implemented yet but button works!
    // values:
    // ${isLoading}
    // ${_setIsLoading}
    // pid ${productId}
    // ${typeof productId}
    // ${isProductIdError}
    // pn ${productName}
    // ${typeof productName}
    // ${isProductNameError}
    // pp ${productPrice}
    // ${typeof productPrice}
    // ${isProductPriceError}
    // `);

    if (!isProductIdError && !isProductNameError && !isProductPriceError) {
      axios.post(`http://localhost:4400/product/add`, {
        productId,
        productName,
        productPrice,
      });
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleEditProductEntry = () => {
    axios.put(`http://localhost:4400/product/edit/1`, {
      productId,
      productName,
      productPrice,
    });
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteProduct = async () => {
    const result = await axios.delete(
      `http://localhost:4400/product/delete/1212`
    );

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  // /**
  //  *  Navigates back to the login screen if no process is currently running.
  //  */
  // const _navigateBack = () => {
  //   if (!isLoading) {
  //     history.goBack();
  //   }
  // };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
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
    handleEditProductEntry,
  };
};

export default useNewProductScreen;
