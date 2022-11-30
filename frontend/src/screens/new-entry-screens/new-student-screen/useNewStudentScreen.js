import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import {
  isDateFormatYYYYMMDD,
  isNumber,
} from "../../../components/helpers/validators";
import axios from "axios";
import { isDatePast } from "../../../components/helpers/validators";
import {
  addYearsToDate,
  formatDateToYYYYMMDD,
} from "../../../components/helpers/date";
import { useNavigate, useParams } from "react-router-dom";

const useNewStudentScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  // let history = useHistory();

  const Genders = {
    MALE: "Male",
    FEMALE: "Female",
    NOT_DECLARED: "Not Declared",
  };

  const navigation = useNavigate();
  const { primary_key } = useParams();

  const [selectedGender, _setSelectedGender] = useState("label");
  const [selectedRegisteredCourse, _setSelectedRegisteredCourse] =
    useState("label");
  const [selectedRegisteredProduct, _setSelectedRegisteredProduct] =
    useState("label");

  const [isLoading, _setIsLoading] = useState(true);

  const [courses, _setCourses] = useState(false);
  const [products, _setProducts] = useState(false);

  const [studentFirstName, _setStudentFirstName] = useState("");
  const [isStudentFirstNameError, _setIsStudentFirstNameError] = useState(true);

  const [studentMiddleName, _setStudentMiddleName] = useState("");
  const [isStudentMiddleNameError, _setIsStudentMiddleNameError] =
    useState(true);

  const [studentLastName, _setStudentLastName] = useState("");
  const [isStudentLastNameError, _setIsStudentLastNameError] = useState(true);

  const [studentDateOfBirth, _setStudentDateOfBirth] = useState("");
  const [isStudentDateOfBirthError, _setIsStudentDateOfBirthError] =
    useState(true);

  const [studentGender, _setStudentGender] = useState(""); // should be 0 = M, 1 =F, 2 = Not Declared
  const [isStudentGenderError, _setIsStudentGenderError] = useState(true);

  const [studentCellPhoneNumber, _setStudentCellPhoneNumber] = useState("");
  const [isStudentCellPhoneNumberError, _setIsStudentCellPhoneNumberError] =
    useState(true);

  const [studentHomePhoneNumber, _setStudentHomePhoneNumber] = useState("");
  const [isStudentHomePhoneNumberError, _setIsStudentHomePhoneNumberError] =
    useState(true);

  const [studentAddress, _setStudentAddress] = useState("");
  const [isStudentAddressError, _setIsStudentAddressError] = useState(true);

  const [studentAddressCity, _setStudentAddressCity] = useState("");
  const [isStudentAddressCityError, _setIsStudentAddressCityError] =
    useState(true);

  const [studentAddressPostalCode, _setStudentAddressPostalCode] = useState("");
  const [isStudentAddressPostalCodeError, _setIsStudentAddressPostalCodeError] =
    useState(true);

  const [studentDriversLicenseNumber, _setStudentDriversLicenseNumber] =
    useState("");
  const [
    isStudentDriversLicenseNumberError,
    _setIsStudentDriversLicenseNumberError,
  ] = useState(true);

  const [
    studentDriversLicenseNumberIssuedDate,
    _setStudentDriversLicenseNumberIssuedDate,
  ] = useState("");
  const [
    isStudentDriversLicenseNumberIssuedDateError,
    _setIsStudentDriversLicenseNumberIssuedDateError,
  ] = useState(true);

  const [
    studentDriversLicenseNumberExpDate,
    _setStudentDriversLicenseNumberExpDate,
  ] = useState("");
  const [
    isStudentDriversLicenseNumberExpDateError,
    _setIsStudentDriversLicenseNumberExpDateError,
  ] = useState(true);

  const [studentRegisteredCourseId, _setStudentRegisteredCourseId] =
    useState("");
  const [
    isStudentRegisteredCourseIdError,
    _setIsStudentRegisteredCourseIdError,
  ] = useState(true);

  const [studentRegisteredProductId, _setStudentRegisteredProductId] =
    useState("");
  const [
    isStudentRegisteredProductIdError,
    _setIsStudentRegisteredProductIdError,
  ] = useState(true);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/
  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    doRender();
  }, []);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    studentFirstName.length > 0 && studentFirstName.length < 75
      ? _setIsStudentFirstNameError(false)
      : _setIsStudentFirstNameError(true);
  }, [studentFirstName]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    studentMiddleName.length < 75
      ? _setIsStudentMiddleNameError(false)
      : _setIsStudentMiddleNameError(true);
  }, [studentMiddleName]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    studentLastName.length > 0 && studentLastName.length < 75
      ? _setIsStudentLastNameError(false)
      : _setIsStudentLastNameError(true);
  }, [studentLastName]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    if (isDateFormatYYYYMMDD(studentDateOfBirth)) {
      isDatePast(studentDateOfBirth)
        ? _setIsStudentDateOfBirthError(false)
        : _setIsStudentDateOfBirthError(true);
    } else {
      _setIsStudentDateOfBirthError(true);
    }
  }, [studentDateOfBirth]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentGender == Genders.MALE ||
    studentGender == Genders.FEMALE ||
    studentGender == Genders.NOT_DECLARED
      ? _setIsStudentGenderError(false)
      : _setIsStudentGenderError(true);
  }, [studentGender]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentCellPhoneNumber.length > 0 &&
    studentCellPhoneNumber.length < 20 &&
    isNumber(studentCellPhoneNumber)
      ? _setIsStudentCellPhoneNumberError(false)
      : _setIsStudentCellPhoneNumberError(true);
  }, [studentCellPhoneNumber]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentHomePhoneNumber.length > 0 &&
    studentHomePhoneNumber.length < 20 &&
    isNumber(studentHomePhoneNumber)
      ? _setIsStudentHomePhoneNumberError(false)
      : _setIsStudentHomePhoneNumberError(true);
  }, [studentHomePhoneNumber]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentAddress.length > 0 && studentAddress.length < 150
      ? _setIsStudentAddressError(false)
      : _setIsStudentAddressError(true);
  }, [studentAddress]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentAddressCity.length > 0 && studentAddressCity.length < 150
      ? _setIsStudentAddressCityError(false)
      : _setIsStudentAddressCityError(true);
  }, [studentAddressCity]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentAddressPostalCode.length > 0 && studentAddressPostalCode.length < 20
      ? _setIsStudentAddressPostalCodeError(false)
      : _setIsStudentAddressPostalCodeError(true);
  }, [studentAddressPostalCode]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentDriversLicenseNumber.length > 0
      ? _setIsStudentDriversLicenseNumberError(false)
      : _setIsStudentDriversLicenseNumberError(true);
  }, [studentDriversLicenseNumber]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    if (isDateFormatYYYYMMDD(studentDriversLicenseNumberIssuedDate)) {
      if (isDatePast(studentDriversLicenseNumberIssuedDate)) {
        _setIsStudentDriversLicenseNumberIssuedDateError(false);

        _setStudentDriversLicenseNumberExpDate(
          formatDateToYYYYMMDD(
            addYearsToDate(studentDriversLicenseNumberIssuedDate, 5)
          )
        );
      } else {
        _setStudentDriversLicenseNumberExpDate("");
        _setIsStudentDriversLicenseNumberIssuedDateError(true);
      }
    } else {
      _setStudentDriversLicenseNumberExpDate("");
      _setIsStudentDriversLicenseNumberIssuedDateError(true);
    }
  }, [studentDriversLicenseNumberIssuedDate]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    isDateFormatYYYYMMDD(studentDriversLicenseNumberExpDate)
      ? _setIsStudentDriversLicenseNumberExpDateError(false)
      : _setIsStudentDriversLicenseNumberExpDateError(true);
  }, [studentDriversLicenseNumberExpDate]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    if (isNumber(studentRegisteredCourseId)) {
      courses.some((element) => element.id == studentRegisteredCourseId)
        ? _setIsStudentRegisteredCourseIdError(false)
        : _setIsStudentRegisteredCourseIdError(true);
    } else {
      _setIsStudentRegisteredCourseIdError(true);
    }
  }, [studentRegisteredCourseId]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    if (isNumber(studentRegisteredProductId)) {
      products.some((element) => element.id == studentRegisteredProductId)
        ? _setIsStudentRegisteredProductIdError(false)
        : _setIsStudentRegisteredProductIdError(true);
    } else {
      _setIsStudentRegisteredProductIdError(true);
    }
  }, [studentRegisteredProductId]);

  /******************************/
  /***** USE EFFECT HELPERS *****/
  /******************************/

  const doRender = async () => {
    _setIsLoading(true);
    await handleGetCoursesAndProducts();
    // if no instructors, need to show message saying that instructors need to be added

    if (primary_key != 0) {
      await handleGetSpecificStudent();
    }

    _setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificStudent = async () => {
    const result = await axios.get(
      `http://localhost:4400/student/getOne/${primary_key}`
    );

    if (result.data.status == 200) {
      _setStudentFirstName(result.data.query[0].first_name);
      _setStudentMiddleName(result.data.query[0].middle_name);
      _setStudentLastName(result.data.query[0].last_name);
      _setStudentDateOfBirth(result.data.query[0].date_of_birth);
      _setStudentGender(result.data.query[0].gender);
      _setStudentCellPhoneNumber(result.data.query[0].cell_phone_number);
      _setStudentHomePhoneNumber(result.data.query[0].home_phone_number);
      _setStudentAddress(result.data.query[0].address);
      _setStudentAddressCity(result.data.query[0].address_city);
      _setStudentAddressPostalCode(result.data.query[0].address_postal_code);
      _setStudentDriversLicenseNumber(result.data.query[0].drivers_license_id);
      _setStudentDriversLicenseNumberIssuedDate(
        result.data.query[0].drivers_license_date_issued
      );
      _setStudentDriversLicenseNumberExpDate(
        result.data.query[0].drivers_license_exp_date
      );
      _setStudentRegisteredCourseId(result.data.query[0].registered_course);
      _setStudentRegisteredProductId(result.data.query[0].purchased_product);

      _setSelectedGender(result.data.query[0].gender);
      _setSelectedRegisteredCourse(result.data.query[0].registered_course);
      _setSelectedRegisteredProduct(result.data.query[0].purchased_product);

      console.log(result.data.query[0]);
    } else {
      console.log(result.data);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetCourses = async () => {
    const result = await axios.get(`http://localhost:4400/course/getAll`);

    if (result.data.status == 200) {
      _setCourses(result.data.query);
      console.log(result.data.query);
    } else {
      console.log(result.data);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetProducts = async () => {
    const result = await axios.get(`http://localhost:4400/product/getAll`);

    if (result.data.status == 200) {
      _setProducts(result.data.query);
      console.log(result.data.query);
    } else {
      console.log(result.data);
    }
  };

  const handleGetCoursesAndProducts = async () => {
    await handleGetCourses();
    await handleGetProducts();
  };

  /***********************/
  /***** TEXT INPUTS *****/
  /***********************/
  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentFirstNameChange = (e) => {
    e.preventDefault();
    _setStudentFirstName(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentMiddleNameChange = (e) => {
    e.preventDefault();
    _setStudentMiddleName(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentLastNameChange = (e) => {
    e.preventDefault();
    _setStudentLastName(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDateOfBirthChange = (e) => {
    e.preventDefault();
    _setStudentDateOfBirth(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentGenderChange = (e) => {
    e.preventDefault();
    _setStudentGender(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentCellPhoneNumberChange = (e) => {
    e.preventDefault();
    _setStudentCellPhoneNumber(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentHomePhoneNumberChange = (e) => {
    e.preventDefault();
    _setStudentHomePhoneNumber(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressChange = (e) => {
    e.preventDefault();
    _setStudentAddress(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressCityChange = (e) => {
    e.preventDefault();
    _setStudentAddressCity(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentAddressPostalCodeChange = (e) => {
    e.preventDefault();
    _setStudentAddressPostalCode(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseNumberChange = (e) => {
    e.preventDefault();
    _setStudentDriversLicenseNumber(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseNumberIssuedDateChange = (e) => {
    e.preventDefault();
    _setStudentDriversLicenseNumberIssuedDate(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentDriversLicenseNumberExpDateChange = (e) => {
    e.preventDefault();
    _setStudentDriversLicenseNumberExpDate(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentRegisteredCourseId = (e) => {
    e.preventDefault();
    _setStudentRegisteredCourseId(e.target.value);
  };

  /**
   * Updates the courseId variable to contain the newly inputted value
   * @param value (string) The value inputted into the textInput
   */
  const handleStudentRegisteredProductId = (e) => {
    e.preventDefault();
    _setStudentRegisteredProductId(e.target.value);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewStudentEntry = () => {
    // // TODO - axios call to node backend that adds new course entry
    // console.log(`axios call to backend, not implemented yet but button works!
    // values:
    // il ${isLoading}
    // ${_setIsLoading}
    // sfn ${studentFirstName}
    // ${typeof studentFirstName}
    // ${isStudentFirstNameError}
    // smn ${studentMiddleName}
    // ${typeof studentMiddleName}
    // ${isStudentMiddleNameError}
    // sln ${studentLastName}
    // ${typeof studentLastName}
    // ${isStudentLastNameError}
    // sdob ${studentDateOfBirth}
    // ${typeof studentDateOfBirth}
    // ${isStudentDateOfBirthError}
    // sg ${studentGender}
    // ${typeof studentGender}
    // ${isStudentGenderError}
    // scp ${studentCellPhoneNumber}
    // ${typeof studentCellPhoneNumber}
    // ${isStudentCellPhoneNumberError}
    // shp ${studentHomePhoneNumber}
    // ${typeof studentHomePhoneNumber}
    // ${isStudentHomePhoneNumberError}
    // sa ${studentAddress}
    // ${typeof studentAddress}
    // ${isStudentAddressError}
    // sac ${studentAddressCity}
    // ${typeof studentAddressCity}
    // ${isStudentAddressCityError}
    // sapc ${studentAddressPostalCode}
    // ${typeof studentAddressPostalCode}
    // ${isStudentAddressPostalCodeError}
    // sdln ${studentDriversLicenseNumber}
    // ${typeof studentDriversLicenseNumber}
    // ${isStudentDriversLicenseNumberError}
    // sdlid ${studentDriversLicenseNumberIssuedDate}
    // ${typeof studentDriversLicenseNumberIssuedDate}
    // ${isStudentDriversLicenseNumberIssuedDateError}
    // sdled ${studentDriversLicenseNumberExpDate}
    // ${typeof studentDriversLicenseNumberExpDate}
    // ${isStudentDriversLicenseNumberExpDateError}
    // src ${studentRegisteredCourseId}
    // ${typeof studentRegisteredCourseId}
    // ${isStudentRegisteredCourseIdError}
    // srp ${studentRegisteredProductId}
    // ${typeof studentRegisteredProductId}
    // ${isStudentRegisteredProductIdError}
    // `);

    if (
      !isStudentFirstNameError &&
      !isStudentMiddleNameError &&
      !isStudentLastNameError &&
      !isStudentDateOfBirthError &&
      !isStudentGenderError &&
      !isStudentCellPhoneNumberError &&
      !isStudentHomePhoneNumberError &&
      !isStudentAddressError &&
      !isStudentAddressCityError &&
      !isStudentAddressPostalCodeError &&
      !isStudentDriversLicenseNumberError &&
      !isStudentDriversLicenseNumberIssuedDateError &&
      !isStudentDriversLicenseNumberExpDateError &&
      !isStudentRegisteredCourseIdError &&
      !isStudentRegisteredProductIdError
    ) {
      axios.post(`http://localhost:4400/student/add`, {
        studentFirstName,
        studentMiddleName,
        studentLastName,
        studentDateOfBirth,
        studentGender,
        studentCellPhoneNumber,
        studentHomePhoneNumber,
        studentAddress,
        studentAddressCity,
        studentAddressPostalCode,
        studentDriversLicenseNumber,
        studentDriversLicenseNumberIssuedDate,
        studentDriversLicenseNumberExpDate,
        studentRegisteredCourseId,
        studentRegisteredProductId,
      });
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleEditStudentEntry = () => {
    axios.put(`http://localhost:4400/student/edit/3`, {
      studentFirstName,
      studentMiddleName,
      studentLastName,
      studentDateOfBirth,
      studentGender,
      studentCellPhoneNumber,
      studentHomePhoneNumber,
      studentAddress,
      studentAddressCity,
      studentAddressPostalCode,
      studentDriversLicenseNumber,
      studentDriversLicenseNumberIssuedDate,
      studentDriversLicenseNumberExpDate,
      studentRegisteredCourseId,
      studentRegisteredProductId,
    });
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteStudent = async () => {
    const result = await axios.delete(`http://localhost:4400/student/delete/c`);

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  // /**
  //  *  Navigates back to the login screen if no process is currently running.
  //  */
  // const _navigateBack = () => {
  //   if (!isLoading) {
  //     history.goBack();
  //   }
  // };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    isLoading,

    studentFirstName,
    isStudentFirstNameError,
    handleStudentFirstNameChange,

    studentMiddleName,
    isStudentMiddleNameError,
    handleStudentMiddleNameChange,

    studentLastName,
    isStudentLastNameError,
    handleStudentLastNameChange,

    studentDateOfBirth,
    isStudentDateOfBirthError,
    handleStudentDateOfBirthChange,

    studentGender,
    isStudentGenderError,
    handleStudentGenderChange,

    studentCellPhoneNumber,
    isStudentCellPhoneNumberError,
    handleStudentCellPhoneNumberChange,

    studentHomePhoneNumber,
    isStudentHomePhoneNumberError,
    handleStudentHomePhoneNumberChange,

    studentAddress,
    isStudentAddressError,
    handleStudentAddressChange,

    studentAddressCity,
    isStudentAddressCityError,
    handleStudentAddressCityChange,

    studentAddressPostalCode,
    isStudentAddressPostalCodeError,
    handleStudentAddressPostalCodeChange,

    studentDriversLicenseNumber,
    isStudentDriversLicenseNumberError,
    handleStudentDriversLicenseNumberChange,

    studentDriversLicenseNumberIssuedDate,
    isStudentDriversLicenseNumberIssuedDateError,
    handleStudentDriversLicenseNumberIssuedDateChange,

    studentDriversLicenseNumberExpDate,
    isStudentDriversLicenseNumberExpDateError,
    handleStudentDriversLicenseNumberExpDateChange,

    studentRegisteredCourseId,
    isStudentRegisteredCourseIdError,
    handleStudentRegisteredCourseId,

    studentRegisteredProductId,
    isStudentRegisteredProductIdError,
    handleStudentRegisteredProductId,

    handleAddNewStudentEntry,
    handleEditStudentEntry,
    Genders,
    courses,
    products,

    selectedGender,
    selectedRegisteredCourse,
    selectedRegisteredProduct,
  };
};

export default useNewStudentScreen;
