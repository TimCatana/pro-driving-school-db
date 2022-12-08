import { useEffect } from "react";
import { isNumber } from "../../../../domain/validators";
import {
  useNewProductScreenButtonHandlers,
  useNewProductScreenChangeHandlers,
  useNewProductScreenStates,
  useNewProductScreenUseEffectHelpers,
} from ".";

const useNewProductScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const { productState } = useNewProductScreenStates();

  const { productChangeHandlers } =
    useNewProductScreenChangeHandlers(productState);
  const { productButtonHandlers } =
    useNewProductScreenButtonHandlers(productState);
  const { productUseEffectHelpers } =
    useNewProductScreenUseEffectHelpers(productState);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   *
   */
  useEffect(() => {
    productUseEffectHelpers.onRender();
  }, []);

  /**
   *
   */
  useEffect(() => {
    if (productState.productSaved && !productState.isLoading) {
      productState.navigation("/");
    }
  }, [productState.productSaved]);
  /**
   * Validates newly inputted productId
   * @dependent productId
   */
  useEffect(() => {
    if (isNumber(productState.productObject.productId)) {
      parseInt(productState.productObject.productId) > -1
        ? productState.setProductObject({
            ...productState.productObject,
            isProductIdError: false,
          })
        : productState.setProductObject({
            ...productState.productObject,
            isProductIdError: true,
          });
    } else {
      productState.setProductObject({
        ...productState.productObject,
        isProductIdError: true,
      });
    }
  }, [productState.productObject.productId]);

  /**
   * Validates newly inputted productName
   * @dependent productName
   */
  useEffect(() => {
    productState.productObject.productName.length > 0 &&
    productState.productObject.productName.length < 250
      ? productState.setProductObject({
          ...productState.productObject,
          isProductNameError: false,
        })
      : productState.setProductObject({
          ...productState.productObject,
          isProductNameError: true,
        });
  }, [productState.productObject.productName]);

  /**
   * Validates newly inputted productName
   * @dependent productName
   */
  useEffect(() => {
    if (isNumber(productState.productObject.productPrice)) {
      parseInt(productState.productObject.productPrice) > -1
        ? productState.setProductObject({
            ...productState.productObject,
            isProductPriceError: false,
          })
        : productState.setProductObject({
            ...productState.productObject,
            isProductPriceError: true,
          });
    } else {
      productState.setProductObject({
        ...productState.productObject,
        isProductPriceError: true,
      });
    }
  }, [productState.productObject.productPrice]);


  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    productState,
    productChangeHandlers,
    productButtonHandlers,
  };
};

export default useNewProductScreen;
