import axios from "axios";

const deleteOneProductUC = async (primary_key) => {
  return await axios.delete(`http://localhost:4400/product/delete/${primary_key}`);
};

export default deleteOneProductUC;
