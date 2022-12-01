import axios from "axios";

const editOneProductUC = async (productObject, primary_key) => {
  return await axios.put(`http://localhost:4400/product/edit/${primary_key}`, {
    productId: productObject.productId,
    productName: productObject.productName,
    productPrice: productObject.productPrice,
  });
};

export default editOneProductUC;
