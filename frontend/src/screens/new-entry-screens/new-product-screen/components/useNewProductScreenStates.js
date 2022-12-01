import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useNewProductScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigate();
  const { primary_key } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [showAddButton, setShowAddButton] = useState(true);

  const [productObject, setProductObject] = useState({
    productId: "",
    isProductIdError: true,

    productName: "",
    isProductNameError: true,

    productPrice: "",
    isProductPriceError: true,
  });

  const productState = {
    navigation,
    primary_key,

    isLoading,
    setIsLoading,
    showAddButton,
    setShowAddButton,

    productObject,
    setProductObject,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    productState,
  };
};

export default useNewProductScreenStates;
