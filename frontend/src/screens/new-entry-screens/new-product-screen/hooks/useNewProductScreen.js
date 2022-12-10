import { useEffect } from "react";
import { isNumber } from "../../../../domain/validators";
import {
  useNewProductScreenButtonHandlers,
  useNewProductScreenChangeHandlers,
  useNewProductScreenStates,
  useNewProductScreenUseEffectHelpers,
} from ".";
import getMostRecentProductUC from "../../../../domain/db/getMostRecentEntry/getMostRecentProductUC";

const useNewProductScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const { productState } = useNewProductScreenStates();

  const { productChangeHandlers } = useNewProductScreenChangeHandlers(productState);
  const { productButtonHandlers } = useNewProductScreenButtonHandlers(productState);
  const { productUseEffectHelpers } = useNewProductScreenUseEffectHelpers(productState);

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
    if (productState.uiModifiersObject.dataSaved) {
      productUseEffectHelpers.navigateAfterSave();
    }
  }, [productState.uiModifiersObject.dataSaved]);

  /**
   * Validates newly inputted productId
   * @dependent productId
   */
  useEffect(() => {
    if (isNumber(productState.productObject.productId)) {
      parseInt(productState.productObject.productId) > -1
        ? productState.productObject.setIsProductIdError(false)
        : productState.productObject.setIsProductIdError(true);
    } else {
      productState.productObject.setIsProductIdError(true);
    }
  }, [productState.productObject.productId]);

  /**
   * Validates newly inputted productName
   * @dependent productName
   */
  useEffect(() => {
    productState.productObject.productName.length > 0 && productState.productObject.productName.length < 250
      ? productState.productObject.setIsProductNameError(false)
      : productState.productObject.setIsProductNameError(true);
  }, [productState.productObject.productName]);

  /**
   * Validates newly inputted productName
   * @dependent productName
   */
  useEffect(() => {
    if (isNumber(productState.productObject.productPrice)) {
      parseInt(productState.productObject.productPrice) > -1
        ? productState.productObject.setIsProductPriceError(false)
        : productState.productObject.setIsProductPriceError(true);
    } else {
      productState.productObject.setIsProductPriceError(true);
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
