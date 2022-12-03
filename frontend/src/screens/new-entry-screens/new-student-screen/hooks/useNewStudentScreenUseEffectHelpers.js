import {
  getAllCoursesUC,
  getAllProductsUC,
  getOneStudentUC,
} from "../../../../domain/db";

const useNewStudentScreenUseEffectHelpers = (studentState) => {
  const onRender = async () => {
    studentState.setIsLoading(true);
    await handleGetCoursesAndProducts();
    // if no instructors, need to show message saying that instructors need to be added

    if (studentState.primary_key != 0) {
      await handleGetSpecificStudent();
      studentState.setIsNewEntry(false);
    }

    studentState.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificStudent = async () => {
    const result = await getOneStudentUC(studentState.primary_key);

    if (result.data.status == 200) {
      studentState.setStudentObject({
        studentFirstName: result.data.query[0].first_name,
        isStudentFirstNameError: false,
        studentMiddleName: result.data.query[0].middle_name,
        isStudentMiddleNameError: false,
        studentLastName: result.data.query[0].last_name,
        isStudentLastNameError: false,
        studentDateOfBirth: result.data.query[0].date_of_birth,
        isStudentDateOfBirthError: false,
        studentGender: result.data.query[0].gender,
        isStudentGenderError: false,
        studentCellPhoneNumber: result.data.query[0].cell_phone_number,
        isStudentCellPhoneNumberError: false,
        studentHomePhoneNumber: result.data.query[0].home_phone_number,
        isStudentHomePhoneNumberError: false,
        studentAddress: result.data.query[0].address,
        isStudentAddressError: false,
        studentAddressCity: result.data.query[0].address_city,
        isStudentAddressCityError: false,
        studentAddressPostalCode: result.data.query[0].address_postal_code,
        isStudentAddressPostalCodeError: false,
        studentDriversLicenseNumber: result.data.query[0].drivers_license_id,
        isStudentDriversLicenseNumberError: false,
        studentDriversLicenseNumberIssuedDate:
          result.data.query[0].drivers_license_date_issued,
        isStudentDriversLicenseNumberIssuedDateError: false,
        studentDriversLicenseNumberExpDate:
          result.data.query[0].drivers_license_exp_date,
        isStudentDriversLicenseNumberExpDateError: false,
        studentRegisteredCourseId: result.data.query[0].registered_course,
        isStudentRegisteredCourseIdError: false,
        studentRegisteredProductId: result.data.query[0].purchased_product,
        isStudentRegisteredProductIdError: false,
      });

      studentState.setSelectedGender(result.data.query[0].gender);
      studentState.setSelectedRegisteredCourse(
        result.data.query[0].registered_course
      );
      studentState.setSelectedRegisteredProduct(
        result.data.query[0].purchased_product
      );

      console.log(result.data.query[0]);
    } else {
      console.log(result.data);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetCourses = async () => {
    const result = await getAllCoursesUC();

    if (result.data.status == 200) {
      studentState.setCourses(result.data.query);
      console.log(result.data.query);
    } else {
      console.log(result.data);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetProducts = async () => {
    const result = await getAllProductsUC();

    if (result.data.status == 200) {
      studentState.setProducts(result.data.query);
      console.log(result.data.query);
    } else {
      console.log(result.data);
    }
  };

  const handleGetCoursesAndProducts = async () => {
    await handleGetCourses();
    await handleGetProducts();
  };

  /**
   *
   */
  const studentUseEffectHelpers = {
    onRender,
  };
  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    studentUseEffectHelpers,
  };
};

export default useNewStudentScreenUseEffectHelpers;
