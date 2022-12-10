import { productTableHeadings } from "../../../../domain/constants/dbConstants";
import { Results } from "../../../../domain/constants/Results";
import { getOneProductUC } from "../../../../domain/db";

const useNewProductScreenUseEffectHelpers = (productState) => {
  /**
   *
   */
  const onRender = async () => {
    productState.uiModifiersObject.setIsLoading(true);

    if (productState.primary_key != 0) {
      await _handleGetSpecificProduct();
      productState.uiModifiersObject.setIsNewEntry(false);
      productState.uiModifiersObject.setAreFieldsEditable(false);
    } else {
      productState.uiModifiersObject.setIsNewEntry(true);
      productState.uiModifiersObject.setAreFieldsEditable(true);
    }

    productState.uiModifiersObject.setIsLoading(false);
  };

  /**
   *
   */
  const _handleGetSpecificProduct = async () => {
    const result = await getOneProductUC(productState.primary_key);

    if (result.data.status == Results.SUCCESS) {
      productState.productObject.setProductId(result.data.query[0][productTableHeadings.productId]);
      productState.productObject.setIsProductIdError(false);

      productState.productObject.setProductName(result.data.query[0][productTableHeadings.name]);
      productState.productObject.setIsProductNameError(false);

      productState.productObject.setProductPrice(result.data.query[0][productTableHeadings.price]);
      productState.productObject.setIsProductPriceError(false);

      productState.uiModifiersObject.setFailedToGetData(false);
    } else {
      productState.uiModifiersObject.setFailedToGetData(true);
    }
  };

  /**
   *
   */
  const navigateAfterSave = async () => {
    productState.navigation("/?initial_selection=products");
  };
  
  /**
   *
   */
  const productUseEffectHelpers = {
    onRender,
    navigateAfterSave,
  };
  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    productUseEffectHelpers,
  };
};

export default useNewProductScreenUseEffectHelpers;
