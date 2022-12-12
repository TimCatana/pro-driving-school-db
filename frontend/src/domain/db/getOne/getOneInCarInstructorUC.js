import axios from "axios";

const getOneInCarInstructorUC = async (primary_key) => {
  return await axios.get(`http://localhost:4400/in-car-inst/getOne/${primary_key}`);
};

export default getOneInCarInstructorUC;
