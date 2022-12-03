import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useNewStudentScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigate();
  const { primary_key } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isNewEntry, setIsNewEntry] = useState(true);
  const [courses, setCourses] = useState(false);
  const [products, setProducts] = useState(false);

  const [studentSaved, setStudentSaved] = useState(false);

  const [isDateOfBirthFocus, setIsDateOfBirthFocus] = useState(false);
  const [
    isStudentDriversLicenseIssuedDateFocus,
    setIsStudentDriversLicenseIssuedDateFocus,
  ] = useState(false);

  const [selectedGender, setSelectedGender] = useState("label");
  const [selectedRegisteredCourse, setSelectedRegisteredCourse] =
    useState("label");
  const [selectedRegisteredProduct, setSelectedRegisteredProduct] =
    useState("label");

  const Genders = {
    MALE: "Male",
    FEMALE: "Female",
    NOT_DECLARED: "Not Declared",
  };

  const [studentObject, setStudentObject] = useState({
    studentFirstName: "",
    isStudentFirstNameError: true,

    studentMiddleName: "",
    isStudentMiddleNameError: false,

    studentLastName: "",
    isStudentLastNameError: true,

    studentDateOfBirth: "",
    isStudentDateOfBirthError: true,

    studentGender: "",
    isStudentGenderError: true,

    studentCellPhoneNumber: "",
    isStudentCellPhoneNumberError: true,

    studentHomePhoneNumber: "",
    isStudentHomePhoneNumberError: true,

    studentAddress: "",
    isStudentAddressError: true,

    studentAddressCity: "",
    isStudentAddressCityError: true,

    studentAddressPostalCode: "",
    isStudentAddressPostalCodeError: true,

    studentDriversLicenseNumber: "",
    isStudentDriversLicenseNumberError: true,

    studentDriversLicenseNumberIssuedDate: "",
    isStudentDriversLicenseNumberIssuedDateError: true,

    studentDriversLicenseNumberExpDate: "",
    isStudentDriversLicenseNumberExpDateError: true,

    studentRegisteredCourseId: "",
    isStudentRegisteredCourseIdError: true,

    studentRegisteredProductId: "",
    isStudentRegisteredProductIdError: true,
  });

  //////////////

  const studentState = {
    navigation,
    primary_key,

    isLoading,
    setIsLoading,
    isNewEntry,
    setIsNewEntry,
    courses,
    setCourses,
    products,
    setProducts,

    studentSaved,
    setStudentSaved,

    isDateOfBirthFocus,
    setIsDateOfBirthFocus,
    isStudentDriversLicenseIssuedDateFocus,
    setIsStudentDriversLicenseIssuedDateFocus,

    selectedGender,
    setSelectedGender,
    selectedRegisteredCourse,
    setSelectedRegisteredCourse,
    selectedRegisteredProduct,
    setSelectedRegisteredProduct,

    Genders,

    studentObject,
    setStudentObject,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    studentState,
  };
};

export default useNewStudentScreenStates;
