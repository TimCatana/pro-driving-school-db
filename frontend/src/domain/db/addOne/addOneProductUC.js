import axios from "axios";

const addOneProductUC = async (productObject) => {
  await axios.post(`http://localhost:4400/product/add`, {
    productId: productObject.productId,
    productName: productObject.productName,
    productPrice: productObject.productPrice,
  });
};

export default addOneProductUC;
