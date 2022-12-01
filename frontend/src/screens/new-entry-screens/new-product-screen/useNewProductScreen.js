import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import isDateFormatYYYYMMDD from "../../../components/helpers/validators/isDateFormatYYYYMMDD";
import axios from "axios";
import { isNumber } from "../../../components/helpers/validators";
import { useNavigate, useParams } from "react-router-dom";
import {
  useNewProductScreenButtonHandlers,
  useNewProductScreenChangeHandlers,
  useNewProductScreenStates,
  useNewProductScreenUseEffectHelpers,
} from "./components";

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

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  /***********************/
  /***** TEXT INPUTS *****/
  /***********************/

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

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
    productState,
    productChangeHandlers,
    productButtonHandlers,
  };
};

export default useNewProductScreen;
