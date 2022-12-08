import { studentTableHeadings } from "../../../../domain/constants/dbConstants";
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
        studentFirstName: result.data.query[0][studentTableHeadings.firstName],
        isStudentFirstNameError: false,
        studentMiddleName:
          result.data.query[0][studentTableHeadings.middleName],
        isStudentMiddleNameError: false,
        studentLastName: result.data.query[0][studentTableHeadings.lastName],
        isStudentLastNameError: false,
        studentDateOfBirth:
          result.data.query[0][studentTableHeadings.dateOfBirth],
        isStudentDateOfBirthError: false,
        studentGender: result.data.query[0][studentTableHeadings.gender],
        isStudentGenderError: false,
        studentHeight: result.data.query[0][studentTableHeadings.height],
        isStudentHeightError: false,
        studentCellPhoneNumber:
          result.data.query[0][studentTableHeadings.cellPhoneNumber],
        isStudentCellPhoneNumberError: false,
        studentHomePhoneNumber:
          result.data.query[0][studentTableHeadings.homePhoneNumber],
        isStudentHomePhoneNumberError: false,
        studentAddress: result.data.query[0][studentTableHeadings.address],
        isStudentAddressError: false,
        studentAddressApartmentNumber:
          result.data.query[0][studentTableHeadings.addressAptNum],
        isStudentAddressApartmentNumberError: false,
        studentAddressCity:
          result.data.query[0][studentTableHeadings.addressCity],
        isStudentAddressCityError: false,
        studentAddressPostalCode:
          result.data.query[0][studentTableHeadings.addressPostalCode],
        isStudentAddressPostalCodeError: false,
        studentDriversLicenseNumber:
          result.data.query[0][studentTableHeadings.driversLicenseId],
        isStudentDriversLicenseNumberError: false,
        studentDriversLicenseClass:
          result.data.query[0][studentTableHeadings.driversLicenseClass],
        isStudentDriversLicenseClassError: false,
        studentDriversLicenseNumberIssuedDate:
          result.data.query[0][studentTableHeadings.driversLicenseIssuedDate],
        isStudentDriversLicenseNumberIssuedDateError: false,
        studentDriversLicenseNumberExpDate:
          result.data.query[0][studentTableHeadings.driversLicenseExpDate],
        isStudentDriversLicenseNumberExpDateError: false,
        studentRegisteredCourseId:
          result.data.query[0][studentTableHeadings.registeredCourse],
        isStudentRegisteredCourseIdError: false,
        studentRegisteredProductId:
          result.data.query[0][studentTableHeadings.purchasedProduct],

        isStudentRegisteredProductIdError: false,
      });

      studentState.setSelectedGender(
        result.data.query[0][studentTableHeadings.gender]
      );
      studentState.setSelectedRegisteredCourse(
        result.data.query[0][studentTableHeadings.registeredCourse]
      );
      studentState.setSelectedRegisteredProduct(
        result.data.query[0][studentTableHeadings.purchasedProduct]
      );
      studentState.setSelectedLicenseClass(
        result.data.query[0][studentTableHeadings.driversLicenseClass]
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
