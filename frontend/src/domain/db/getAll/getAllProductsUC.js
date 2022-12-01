import axios from "axios";

const getAllProductsUC = async () => {
  return await axios.get(`http://localhost:4400/product/getAll`);
};

export default getAllProductsUC;
