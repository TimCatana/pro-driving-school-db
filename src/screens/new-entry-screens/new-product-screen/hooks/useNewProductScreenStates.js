import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlertVariants from "../../../../domain/constants/AlertVariants";

const useNewProductScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigate();
  const { primary_key } = useParams();
  const initialRender = useRef(true);

  /**
   * Parameters that change the UI based on their value
   */

  const [isLoading, setIsLoading] = useState(true);
  const [isNewEntry, setIsNewEntry] = useState(true);
  const [areFieldsEditable, setAreFieldsEditable] = useState(true);
  const [failedToGetData, setFailedToGetData] = useState(true);
  const [dataSaved, setDataSaved] = useState(false);

  const uiModifiersObject = {
    isLoading,
    setIsLoading,

    isNewEntry,
    setIsNewEntry,

    areFieldsEditable,
    setAreFieldsEditable,

    failedToGetData,
    setFailedToGetData,

    dataSaved,
    setDataSaved,
  };

  /**
   * For error messages
   */

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState(AlertVariants.DANGER);

  const messageObject = {
    showMessage,
    setShowMessage,
    message,
    setMessage,
    messageColor,
    setMessageColor,
  };

  /**
   * The object representing an entry in the database
   */

  const [productId, setProductId] = useState("");
  const [isProductIdError, setIsProductIdError] = useState(true);

  const [productName, setProductName] = useState("");
  const [isProductNameError, setIsProductNameError] = useState(true);

  const [productPrice, setProductPrice] = useState("");
  const [isProductPriceError, setIsProductPriceError] = useState(true);

  const productObject = {
    productId,
    setProductId,
    isProductIdError,
    setIsProductIdError,

    productName,
    setProductName,
    isProductNameError,
    setIsProductNameError,

    productPrice,
    setProductPrice,
    isProductPriceError,
    setIsProductPriceError,
  };

  /**
   * The state object of the screen
   */

  const productState = {
    navigation,
    primary_key,
    initialRender,

    uiModifiersObject,
    messageObject,
    productObject,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    productState,
  };
};

export default useNewProductScreenStates;
