import { studentTableHeadings } from "../../../../domain/constants/dbConstants";
import { getAllCoursesUC, getAllProductsUC, getOneStudentUC } from "../../../../domain/db";

const useNewStudentScreenUseEffectHelpers = (studentState) => {
  const onRender = async () => {
    studentState.uiModifiersObject.setIsLoading(true);
    await _handleGetCoursesAndProducts();

    if (studentState.primary_key != 0) {
      await handleGetSpecificStudent();
      studentState.uiModifiersObject.setIsNewEntry(false);
      studentState.uiModifiersObject.setAreFieldsEditable(false);
    } else {
      studentState.uiModifiersObject.setIsNewEntry(true);
      studentState.uiModifiersObject.setAreFieldsEditable(true);
    }

    studentState.uiModifiersObject.setIsLoading(false);
    studentState.initialRender.current = false;
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificStudent = async () => {
    const result = await getOneStudentUC(studentState.primary_key);

    if (result.data.status == 200) {
      studentState.studentObject.setStudentFirstName(result.data.query[0][studentTableHeadings.firstName]);
      studentState.studentObject.setIsStudentFirstNameError(false);

      studentState.studentObject.setStudentMiddleName(result.data.query[0][studentTableHeadings.middleName]);
      studentState.studentObject.setIsStudentMiddleNameError(false);

      studentState.studentObject.setStudentLastName(result.data.query[0][studentTableHeadings.lastName]);
      studentState.studentObject.setIsStudentLastNameError(false);

      studentState.studentObject.setStudentDateOfBirth(result.data.query[0][studentTableHeadings.dateOfBirth]);
      studentState.studentObject.setIsStudentDateOfBirthError(false);

      studentState.studentObject.setStudentGender(result.data.query[0][studentTableHeadings.gender]);
      studentState.studentObject.setIsStudentGenderError(false);

      studentState.studentObject.setStudentHeight(result.data.query[0][studentTableHeadings.height]);
      studentState.studentObject.setIsStudentHeightError(false);

      studentState.studentObject.setStudentAddress(result.data.query[0][studentTableHeadings.address]);
      studentState.studentObject.setIsStudentAddressError(false);

      studentState.studentObject.setStudentAddressApartmentNumber(
        result.data.query[0][studentTableHeadings.addressAptNum]
      );
      studentState.studentObject.setIsStudentAddressApartmentNumberError(false);

      studentState.studentObject.setStudentAddressCity(result.data.query[0][studentTableHeadings.addressCity]);
      studentState.studentObject.setIsStudentAddressCityError(false);

      studentState.studentObject.setStudentAddressPostalCode(
        result.data.query[0][studentTableHeadings.addressPostalCode]
      );
      studentState.studentObject.setIsStudentAddressPostalCodeError(false);

      studentState.studentObject.setStudentCellPhoneNumber(result.data.query[0][studentTableHeadings.cellPhoneNumber]);
      studentState.studentObject.setIsStudentCellPhoneNumberError(false);

      studentState.studentObject.setStudentHomePhoneNumber(result.data.query[0][studentTableHeadings.homePhoneNumber]);
      studentState.studentObject.setIsStudentHomePhoneNumberError(false);

      studentState.studentObject.setStudentDriversLicenseId(
        result.data.query[0][studentTableHeadings.driversLicenseId]
      );
      studentState.studentObject.setIsStudentDriversLicenseNumberId(false);

      studentState.studentObject.setStudentDriversLicenseClass(
        result.data.query[0][studentTableHeadings.driversLicenseClass]
      );
      studentState.studentObject.setIsStudentDriversLicenseClassError(false);

      studentState.studentObject.setStudentDriversLicenseIssuedDate(
        result.data.query[0][studentTableHeadings.driversLicenseIssuedDate]
      );
      studentState.studentObject.setIsStudentDriversLicenseIssuedDateError(false);

      studentState.studentObject.setStudentDriversLicenseExpDate(
        result.data.query[0][studentTableHeadings.driversLicenseExpDate]
      );
      studentState.studentObject.setIsStudentDriversLicenseExpDateError(false);

      studentState.studentObject.setStudentRegisteredCourseId(
        result.data.query[0][studentTableHeadings.registeredCourse]
      );
      studentState.studentObject.setIsStudentRegisteredCourseIdError(false);

      studentState.studentObject.setStudentPurchasedProductId(
        result.data.query[0][studentTableHeadings.purchasedProduct]
      );
      studentState.studentObject.setIsStudentPurchasedProductIdError(false);

      studentState.uiModifiersObject.setFailedToGetData(false);
    } else {
      studentState.uiModifiersObject.setFailedToGetData(true);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const _handleGetCourses = async () => {
    const result = await getAllCoursesUC();

    if (result.data.status == 200) {
      studentState.dropdownMenuOptionsObject.setCourses(result.data.query);
    } else {
      studentState.dropdownMenuOptionsObject.setCourses([]);
      studentState.dropdownMenuOptionsObject.setFailedToGetCourses(true);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const _handleGetProducts = async () => {
    const result = await getAllProductsUC();

    if (result.data.status == 200) {
      studentState.dropdownMenuOptionsObject.setProducts(result.data.query);
    } else {
      studentState.dropdownMenuOptionsObject.setProducts([]);
      studentState.dropdownMenuOptionsObject.setFailedToGetProducts(true);
    }
  };

  const _handleGetCoursesAndProducts = async () => {
    await _handleGetCourses();
    await _handleGetProducts();
  };

  /**
   *
   */
  const navigateAfterSave = async () => {
    studentState.navigation("/?initial_selection=students");
  };

  /**
   *
   */
  const studentUseEffectHelpers = {
    onRender,
    handleGetSpecificStudent,
    navigateAfterSave,
  };
  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    studentUseEffectHelpers,
  };
};

export default useNewStudentScreenUseEffectHelpers;
