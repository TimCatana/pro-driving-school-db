import axios from "axios";

const getCoursePdf = async (primary_key) => {
  return await axios.get(
    `http://localhost:4400/course/getFilledPdf/${primary_key}`
  );
};

export default getCoursePdf;
