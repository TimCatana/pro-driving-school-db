import axios from "axios";

const deleteOneInClassInstructorUC = async (primary_key) => {
  return await axios.delete(`http://localhost:4400/in-class-inst/delete/${primary_key}`);
};

export default deleteOneInClassInstructorUC;
