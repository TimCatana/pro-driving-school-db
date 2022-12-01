import { getOneProductUC } from "../../../../domain/db";

const useNewProductScreenUseEffectHelpers = (productState) => {
  /**
   *
   */
  const onRender = async () => {
    productState.setIsLoading(true);

    if (productState.primary_key != 0) {
      await handleGetSpecificProduct();
      productState.setShowAddButton(false);
    }

    productState.setIsLoading(false);
  };

  /**
   *
   */
  const handleGetSpecificProduct = async () => {
    const result = await getOneProductUC(productState.primary_key);

    if (result.data.status == 200) {
      productState.setProductObject({
        ...productState.productObject,
        productId: result.data.query[0].productId,
        isProductIdError: false,

        productName: result.data.query[0].name,
        isProductNameError: false,

        productPrice: result.data.query[0].price,
        isProductPriceError: false,
      });

      console.log(result.data.query[0]);
    } else {
      console.log(result.data);
    }
  };

  /**
   *
   */
  const productUseEffectHelpers = {
    onRender,
  };
  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    productUseEffectHelpers,
  };
};

export default useNewProductScreenUseEffectHelpers;