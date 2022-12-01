import axios from "axios";

const deleteOneInCarInstructorUC = async (primary_key) => {
  return await axios.delete(
    `http://localhost:4400/in-car-inst/delete/${primary_key}`
  );
};

export default deleteOneInCarInstructorUC;
