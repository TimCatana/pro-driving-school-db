import axios from "axios";

const getAllInClassInstructorsUC = async () => {
  return await axios.get(`http://localhost:4400/in-class-inst/getAll`);
};

export default getAllInClassInstructorsUC;
