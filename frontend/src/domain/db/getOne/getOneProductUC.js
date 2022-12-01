import axios from "axios";

const getOneProductUC = async (primary_key) => {
  return await axios.get(`http://localhost:4400/product/getOne/${primary_key}`);
};

export default getOneProductUC;
