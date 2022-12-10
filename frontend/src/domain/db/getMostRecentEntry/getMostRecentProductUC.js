import axios from "axios";

const getMostRecentProductUC = async () => {
  return await axios.get(`http://localhost:4400/product/getMostRecentEntry`);
};

export default getMostRecentProductUC;
