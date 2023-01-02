import { useEffect } from "react";
import { isDateFormatYYYYMMDD, isNumber, isDatePast } from "../../../../domain/validators";
import { addYearsToDate, formatDateToYYYYMMDD } from "../../../../domain/date";
import {
  useNewStudentScreenButtonHandlers,
  useNewStudentScreenChangeHandlers,
  useNewStudentScreenStates,
  useNewStudentScreenUseEffectHelpers,
} from ".";
import {
  courseTableHeadings,
  inCarInstTableHeadings,
  productTableHeadings,
} from "../../../../domain/constants/dbConstants";

const useNewStudentScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const { studentState } = useNewStudentScreenStates();

  const { studentChangeHandlers } = useNewStudentScreenChangeHandlers(studentState);
  const { studentButtonHandlers } = useNewStudentScreenButtonHandlers(studentState);
  const { studentUseEffectHelpers } = useNewStudentScreenUseEffectHelpers(studentState);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/
  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    studentUseEffectHelpers.onRender();
  }, []);

  /**
   *
   */
  useEffect(() => {
    if (studentState.uiModifiersObject.dataSaved) {
      studentUseEffectHelpers.navigateAfterSave();
    }
  }, [studentState.uiModifiersObject.dataSaved]);

  /**
   *
   */
  useEffect(() => {
    if (!studentState.uiModifiersObject.areFieldsEditable && !studentState.initialRender.current) {
      studentUseEffectHelpers.handleGetSpecificStudent();
    }
  }, [studentState.uiModifiersObject.areFieldsEditable]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    studentState.studentObject.studentFirstName.length > 0 && studentState.studentObject.studentFirstName.length < 75
      ? studentState.studentObject.setIsStudentFirstNameError(false)
      : studentState.studentObject.setIsStudentFirstNameError(true);
  }, [studentState.studentObject.studentFirstName]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    studentState.studentObject.studentMiddleName.length < 75
      ? studentState.studentObject.setIsStudentMiddleNameError(false)
      : studentState.studentObject.setIsStudentMiddleNameError(true);
  }, [studentState.studentObject.studentMiddleName]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    studentState.studentObject.studentLastName.length > 0 && studentState.studentObject.studentLastName.length < 75
      ? studentState.studentObject.setIsStudentLastNameError(false)
      : studentState.studentObject.setIsStudentLastNameError(true);
  }, [studentState.studentObject.studentLastName]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    if (isDateFormatYYYYMMDD(studentState.studentObject.studentDateOfBirth)) {
      isDatePast(studentState.studentObject.studentDateOfBirth)
        ? studentState.studentObject.setIsStudentDateOfBirthError(false)
        : studentState.studentObject.setIsStudentDateOfBirthError(true);
    } else {
      studentState.studentObject.setIsStudentDateOfBirthError(true);
    }
  }, [studentState.studentObject.studentDateOfBirth]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    Object.values(studentState.Genders).includes(studentState.studentObject.studentGender)
      ? studentState.studentObject.setIsStudentGenderError(false)
      : studentState.studentObject.setIsStudentGenderError(true);
  }, [studentState.studentObject.studentGender]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    if (studentState.studentObject.studentHeight.length > 0) {
      if (isNumber(studentState.studentObject.studentHeight)) {
        parseInt(studentState.studentObject.studentHeight) > 0
          ? studentState.studentObject.setIsStudentHeightError(false)
          : studentState.studentObject.setIsStudentHeightError(true);
      } else {
        studentState.studentObject.setIsStudentHeightError(true);
      }
    } else {
      studentState.studentObject.setIsStudentHeightError(false);
    }
  }, [studentState.studentObject.studentHeight]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentAddress.length > 0 && studentState.studentObject.studentAddress.length < 150
      ? studentState.studentObject.setIsStudentAddressError(false)
      : studentState.studentObject.setIsStudentAddressError(true);
  }, [studentState.studentObject.studentAddress]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    if (studentState.studentObject.studentAddressApartmentNumber.length > 0) {
      if (isNumber(studentState.studentObject.studentAddressApartmentNumber)) {
        parseInt(studentState.studentObject.studentAddressApartmentNumber) > 0
          ? studentState.studentObject.setIsStudentAddressApartmentNumberError(false)
          : studentState.studentObject.setIsStudentAddressApartmentNumberError(true);
      } else {
        studentState.studentObject.setIsStudentAddressApartmentNumberError(true);
      }
    } else {
      studentState.studentObject.setIsStudentAddressApartmentNumberError(false);
    }
  }, [studentState.studentObject.studentAddressApartmentNumber]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentAddressCity.length > 0 &&
    studentState.studentObject.studentAddressCity.length < 150
      ? studentState.studentObject.setIsStudentAddressCityError(false)
      : studentState.studentObject.setIsStudentAddressCityError(true);
  }, [studentState.studentObject.studentAddressCity]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    Object.values(studentState.CanadaProvinces).includes(studentState.studentObject.studentAddressState)
      ? studentState.studentObject.setIsStudentAddressStateError(false)
      : studentState.studentObject.setIsStudentAddressStateError(true);
  }, [studentState.studentObject.studentAddressState]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentAddressCity.length > 0 &&
    studentState.studentObject.studentAddressCity.length < 150
      ? studentState.studentObject.setIsStudentAddressCityError(false)
      : studentState.studentObject.setIsStudentAddressCityError(true);
  }, [studentState.studentObject.studentAddressCity]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentAddressPostalCode.length > 0 &&
    studentState.studentObject.studentAddressPostalCode.length < 20
      ? studentState.studentObject.setIsStudentAddressPostalCodeError(false)
      : studentState.studentObject.setIsStudentAddressPostalCodeError(true);
  }, [studentState.studentObject.studentAddressPostalCode]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentCellPhoneNumber.length > 0 &&
    studentState.studentObject.studentCellPhoneNumber.length < 20
      ? studentState.studentObject.setIsStudentCellPhoneNumberError(false)
      : studentState.studentObject.setIsStudentCellPhoneNumberError(true);
  }, [studentState.studentObject.studentCellPhoneNumber]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentHomePhoneNumber.length < 20
      ? studentState.studentObject.setIsStudentHomePhoneNumberError(false)
      : studentState.studentObject.setIsStudentHomePhoneNumberError(true);
  }, [studentState.studentObject.studentHomePhoneNumber]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentDriversLicenseId.length < 95
      ? studentState.studentObject.setIsStudentDriversLicenseNumberId(false)
      : studentState.studentObject.setIsStudentDriversLicenseNumberId(true);
  }, [studentState.studentObject.studentDriversLicenseId]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentDriversLicenseClass == studentState.LicenseClasses.G1 ||
    studentState.studentObject.studentDriversLicenseClass == studentState.LicenseClasses.G2 ||
    studentState.studentObject.studentDriversLicenseClass == studentState.LicenseClasses.G ||
    studentState.studentObject.studentDriversLicenseClass == studentState.LicenseClasses.M1 ||
    studentState.studentObject.studentDriversLicenseClass == studentState.LicenseClasses.M2 ||
    studentState.studentObject.studentDriversLicenseClass == ""
      ? studentState.studentObject.setIsStudentDriversLicenseClassError(false)
      : studentState.studentObject.setIsStudentDriversLicenseClassError(true);
  }, [studentState.studentObject.studentDriversLicenseClass]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    if (studentState.studentObject.studentDriversLicenseIssuedDate.length > 0) {
      if (isDateFormatYYYYMMDD(studentState.studentObject.studentDriversLicenseIssuedDate)) {
        studentState.studentObject.setIsStudentDriversLicenseIssuedDateError(false);
        studentState.studentObject.setStudentDriversLicenseExpDate(
          formatDateToYYYYMMDD(addYearsToDate(studentState.studentObject.studentDriversLicenseIssuedDate, 5))
        );
      } else {
        studentState.studentObject.setIsStudentDriversLicenseIssuedDateError(true);
        studentState.studentObject.setStudentDriversLicenseExpDate("");
      }
    } else {
      studentState.studentObject.setIsStudentDriversLicenseIssuedDateError(false);
      studentState.studentObject.setStudentDriversLicenseExpDate("");
    }
  }, [studentState.studentObject.studentDriversLicenseIssuedDate]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    if (studentState.studentObject.studentDriversLicenseExpDate.length > 0) {
      isDateFormatYYYYMMDD(studentState.studentObject.studentDriversLicenseExpDate)
        ? studentState.studentObject.setIsStudentDriversLicenseExpDateError(false)
        : studentState.studentObject.setIsStudentDriversLicenseExpDateError(true);
    } else {
      studentState.studentObject.setIsStudentDriversLicenseExpDateError(false);
    }
  }, [studentState.studentObject.studentDriversLicenseExpDate]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    if (isNumber(studentState.studentObject.studentRegisteredCourseId)) {
      studentState.dropdownMenuOptionsObject.courses.some(
        (element) => element[courseTableHeadings.courseId] == studentState.studentObject.studentRegisteredCourseId
      )
        ? studentState.studentObject.setIsStudentRegisteredCourseIdError(false)
        : studentState.studentObject.setIsStudentRegisteredCourseIdError(true);
    } else {
      studentState.studentObject.setIsStudentRegisteredCourseIdError(true);
    }
  }, [studentState.studentObject.studentRegisteredCourseId]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    if (isNumber(studentState.studentObject.studentPurchasedProductId)) {
      studentState.dropdownMenuOptionsObject.products.some(
        (element) => element[productTableHeadings.productId] == studentState.studentObject.studentPurchasedProductId
      )
        ? studentState.studentObject.setIsStudentPurchasedProductIdError(false)
        : studentState.studentObject.setIsStudentPurchasedProductIdError(true);
    } else {
      studentState.studentObject.setIsStudentPurchasedProductIdError(true);
    }
  }, [studentState.studentObject.studentPurchasedProductId]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    if (isNumber(studentState.studentObject.studentInCarInstId)) {
      studentState.dropdownMenuOptionsObject.inCarInst.some(
        (element) => element[inCarInstTableHeadings.id] == studentState.studentObject.studentInCarInstId
      )
        ? studentState.studentObject.setIsStudentInCarInstIdError(false)
        : studentState.studentObject.setIsStudentInCarInstIdError(true);
    } else {
      studentState.studentObject.setIsStudentInCarInstIdError(true);
    }
  }, [studentState.studentObject.studentInCarInstId]);

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    studentState,
    studentChangeHandlers,
    studentButtonHandlers,
  };
};

export default useNewStudentScreen;
