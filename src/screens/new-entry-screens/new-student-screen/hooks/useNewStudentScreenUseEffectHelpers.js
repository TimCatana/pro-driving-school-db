import AlertVariants from "../../../../domain/constants/AlertVariants";
import { studentTableHeadings } from "../../../../domain/constants/dbConstants";
import { getAllCoursesUC, getAllProductsUC, getOneStudentUC, getAllInCarInstructorsUC } from "../../../../domain/db";

const useNewStudentScreenUseEffectHelpers = (studentState) => {
  const onRender = async () => {
    studentState.uiModifiersObject.setIsLoading(true);
    await _handleGetDropdownOptions();

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
    try {
      const result = await getOneStudentUC(studentState.primary_key);

      studentState.studentObject.setStudentFirstName(result.data[0][studentTableHeadings.firstName]);
      studentState.studentObject.setIsStudentFirstNameError(false);

      studentState.studentObject.setStudentMiddleName(result.data[0][studentTableHeadings.middleName]);
      studentState.studentObject.setIsStudentMiddleNameError(false);

      studentState.studentObject.setStudentLastName(result.data[0][studentTableHeadings.lastName]);
      studentState.studentObject.setIsStudentLastNameError(false);

      studentState.studentObject.setStudentDateOfBirth(result.data[0][studentTableHeadings.dateOfBirth]);
      studentState.studentObject.setIsStudentDateOfBirthError(false);

      studentState.studentObject.setStudentGender(result.data[0][studentTableHeadings.gender]);
      studentState.studentObject.setIsStudentGenderError(false);

      studentState.studentObject.setStudentHeight(result.data[0][studentTableHeadings.height]);
      studentState.studentObject.setIsStudentHeightError(false);

      studentState.studentObject.setStudentAddress(result.data[0][studentTableHeadings.address]);
      studentState.studentObject.setIsStudentAddressError(false);

      studentState.studentObject.setStudentAddressApartmentNumber(result.data[0][studentTableHeadings.addressAptNum]);
      studentState.studentObject.setIsStudentAddressApartmentNumberError(false);

      studentState.studentObject.setStudentAddressCity(result.data[0][studentTableHeadings.addressCity]);
      studentState.studentObject.setIsStudentAddressCityError(false);

      studentState.studentObject.setStudentAddressState(result.data[0][studentTableHeadings.addressState]);
      studentState.studentObject.setIsStudentAddressStateError(false);

      studentState.studentObject.setStudentAddressPostalCode(result.data[0][studentTableHeadings.addressPostalCode]);
      studentState.studentObject.setIsStudentAddressPostalCodeError(false);

      studentState.studentObject.setStudentCellPhoneNumber(result.data[0][studentTableHeadings.cellPhoneNumber]);
      studentState.studentObject.setIsStudentCellPhoneNumberError(false);

      studentState.studentObject.setStudentHomePhoneNumber(result.data[0][studentTableHeadings.homePhoneNumber]);
      studentState.studentObject.setIsStudentHomePhoneNumberError(false);

      studentState.studentObject.setStudentDriversLicenseId(result.data[0][studentTableHeadings.driversLicenseId]);
      studentState.studentObject.setIsStudentDriversLicenseNumberId(false);

      studentState.studentObject.setStudentDriversLicenseClass(
        result.data[0][studentTableHeadings.driversLicenseClass]
      );
      studentState.studentObject.setIsStudentDriversLicenseClassError(false);

      studentState.studentObject.setStudentDriversLicenseIssuedDate(
        result.data[0][studentTableHeadings.driversLicenseIssuedDate]
      );
      studentState.studentObject.setIsStudentDriversLicenseIssuedDateError(false);

      studentState.studentObject.setStudentDriversLicenseExpDate(
        result.data[0][studentTableHeadings.driversLicenseExpDate]
      );
      studentState.studentObject.setIsStudentDriversLicenseExpDateError(false);

      studentState.studentObject.setStudentRegisteredCourseId(result.data[0][studentTableHeadings.registeredCourse]);
      studentState.studentObject.setIsStudentRegisteredCourseIdError(false);

      studentState.studentObject.setStudentPurchasedProductId(result.data[0][studentTableHeadings.purchasedProduct]);
      studentState.studentObject.setIsStudentPurchasedProductIdError(false);
      
      studentState.studentObject.setStudentInCarInstId(result.data[0][studentTableHeadings.inCarInstId]);
      studentState.studentObject.setIsStudentInCarInstIdError(false);

      studentState.uiModifiersObject.setFailedToGetData(false);
    } catch (e) {
      studentState.uiModifiersObject.setFailedToGetData(true);
      studentState.messageObject.setMessage("ERROR - Failed to get item");
      studentState.messageObject.setMessageColor(AlertVariants.DANGER);
      studentState.messageObject.setShowMessage(true);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const _handleGetCourses = async () => {
    try {
      const result = await getAllCoursesUC();
      studentState.dropdownMenuOptionsObject.setCourses(result.data);
    } catch (e) {
      studentState.dropdownMenuOptionsObject.setCourses([]);
      studentState.dropdownMenuOptionsObject.setFailedToGetCourses(true);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const _handleGetProducts = async () => {
    try {
      const result = await getAllProductsUC();
      studentState.dropdownMenuOptionsObject.setProducts(result.data);
    } catch (e) {
      studentState.dropdownMenuOptionsObject.setProducts([]);
      studentState.dropdownMenuOptionsObject.setFailedToGetProducts(true);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const _handleGetInCarInstructors = async () => {
    try {
      const result = await getAllInCarInstructorsUC();
      studentState.dropdownMenuOptionsObject.setInCarInst(result.data);
    } catch (e) {
      studentState.dropdownMenuOptionsObject.setInCarInst([]);
      studentState.dropdownMenuOptionsObject.failedToGetInCarInst(true);
    }
  };

  const _handleGetDropdownOptions = async () => {
    await _handleGetCourses();
    await _handleGetProducts();
    await _handleGetInCarInstructors();
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
