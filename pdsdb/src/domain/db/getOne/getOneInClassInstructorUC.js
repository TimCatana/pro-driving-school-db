import axios from "axios";

const getOneInClassInstructorUC = async (primary_key) => {
  return await axios.get(`http://localhost:4400/in-class-inst/getOne/${primary_key}`);
};

export default getOneInClassInstructorUC;
