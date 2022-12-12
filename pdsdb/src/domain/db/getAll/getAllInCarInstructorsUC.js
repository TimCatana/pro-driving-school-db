import axios from "axios";

const getAllInCarInstructorsUC = async () => {
  return await axios.get(`http://localhost:4400/in-car-inst/getAll`);
};

export default getAllInCarInstructorsUC;
