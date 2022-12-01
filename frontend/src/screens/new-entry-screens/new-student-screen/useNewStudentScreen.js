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
import {
  useNewStudentScreenButtonHandlers,
  useNewStudentScreenChangeHandlers,
  useNewStudentScreenStates,
  useNewStudentScreenUseEffectHelpers,
} from "./components";

const useNewStudentScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const { studentState } = useNewStudentScreenStates();

  const { studentChangeHandlers } =
    useNewStudentScreenChangeHandlers(studentState);
  const { studentButtonHandlers } =
    useNewStudentScreenButtonHandlers(studentState);
  const { studentUseEffectHelpers } =
    useNewStudentScreenUseEffectHelpers(studentState);

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
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    console.log(`axios call to backend, not implemented yet but button works!
    values:
    il ${studentState.isLoading}
    sfn ${studentState.studentObject.studentFirstName}
    ${typeof studentState.studentObject.studentFirstName}
    ${studentState.studentObject.isStudentFirstNameError}
    smn ${studentState.studentObject.studentMiddleName}
    ${typeof studentState.studentObject.studentMiddleName}
    ${studentState.studentObject.isStudentMiddleNameError}
    sln ${studentState.studentObject.studentLastName}
    ${typeof studentState.studentObject.studentLastName}
    ${studentState.studentObject.isStudentLastNameError}
    sdob ${studentState.studentObject.studentDateOfBirth}
    ${typeof studentState.studentObject.studentDateOfBirth}
    ${studentState.studentObject.isStudentDateOfBirthError}
    sg ${studentState.studentObject.studentGender}
    ${typeof studentState.studentObject.studentGender}
    ${studentState.studentObject.isStudentGenderError}
    scp ${studentState.studentObject.studentCellPhoneNumber}
    ${typeof studentState.studentObject.studentCellPhoneNumber}
    ${studentState.studentObject.isStudentCellPhoneNumberError}
    shp ${studentState.studentObject.studentHomePhoneNumber}
    ${typeof studentState.studentObject.studentHomePhoneNumber}
    ${studentState.studentObject.isStudentHomePhoneNumberError}
    sa ${studentState.studentObject.studentAddress}
    ${typeof studentState.studentObject.studentAddress}
    ${studentState.studentObject.isStudentAddressError}
    sac ${studentState.studentObject.studentAddressCity}
    ${typeof studentState.studentObject.studentAddressCity}
    ${studentState.studentObject.isStudentAddressCityError}
    sapc ${studentState.studentObject.studentAddressPostalCode}
    ${typeof studentState.studentObject.studentAddressPostalCode}
    ${studentState.studentObject.isStudentAddressPostalCodeError}
    sdln ${studentState.studentObject.studentDriversLicenseNumber}
    ${typeof studentState.studentObject.studentDriversLicenseNumber}
    ${studentState.studentObject.isStudentDriversLicenseNumberError}
    sdlid ${studentState.studentObject.studentDriversLicenseNumberIssuedDate}
    ${typeof studentState.studentObject.studentDriversLicenseNumberIssuedDate}
    ${studentState.studentObject.isStudentDriversLicenseNumberIssuedDateError}
    sdled ${studentState.studentObject.studentDriversLicenseNumberExpDate}
    ${typeof studentState.studentObject.studentDriversLicenseNumberExpDate}
    ${studentState.studentObject.isStudentDriversLicenseNumberExpDateError}
    src ${studentState.studentObject.studentRegisteredCourseId}
    ${typeof studentState.studentObject.studentRegisteredCourseId}
    ${studentState.studentObject.isStudentRegisteredCourseIdError}
    srp ${studentState.studentObject.studentRegisteredProductId}
    ${typeof studentState.studentObject.studentRegisteredProductId}
    ${studentState.studentObject.isStudentRegisteredProductIdError}
    `);

    studentState.studentObject.studentFirstName.length > 0 &&
    studentState.studentObject.studentFirstName.length < 75
      ? studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentFirstNameError: false,
        })
      : studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentFirstNameError: true,
        });
  }, [studentState.studentObject.studentFirstName]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    studentState.studentObject.studentMiddleName.length < 75
      ? studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentMiddleNameError: false,
        })
      : studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentMiddleNameError: true,
        });
  }, [studentState.studentObject.studentMiddleName]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    studentState.studentObject.studentLastName.length > 0 &&
    studentState.studentObject.studentLastName.length < 75
      ? studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentLastNameError: false,
        })
      : studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentLastNameError: true,
        });
  }, [studentState.studentObject.studentLastName]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    if (isDateFormatYYYYMMDD(studentState.studentObject.studentDateOfBirth)) {
      isDatePast(studentState.studentObject.studentDateOfBirth)
        ? studentState.setStudentObject({
            ...studentState.studentObject,
            isStudentDateOfBirthError: false,
          })
        : studentState.setStudentObject({
            ...studentState.studentObject,
            isStudentDateOfBirthError: true,
          });
    } else {
      studentState.setStudentObject({
        ...studentState.studentObject,
        isStudentDateOfBirthError: true,
      });
    }
  }, [studentState.studentObject.studentDateOfBirth]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentGender == studentState.Genders.MALE ||
    studentState.studentObject.studentGender == studentState.Genders.FEMALE ||
    studentState.studentObject.studentGender ==
      studentState.Genders.NOT_DECLARED
      ? studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentGenderError: false,
        })
      : studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentGenderError: true,
        });
  }, [studentState.studentObject.studentGender]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentCellPhoneNumber.length > 0 &&
    studentState.studentObject.studentCellPhoneNumber.length < 20 &&
    isNumber(studentState.studentObject.studentCellPhoneNumber)
      ? studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentCellPhoneNumberError: false,
        })
      : studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentCellPhoneNumberError: true,
        });
  }, [studentState.studentObject.studentCellPhoneNumber]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentHomePhoneNumber.length > 0 &&
    studentState.studentObject.studentHomePhoneNumber.length < 20 &&
    isNumber(studentState.studentObject.studentHomePhoneNumber)
      ? studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentHomePhoneNumberError: false,
        })
      : studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentHomePhoneNumberError: true,
        });
  }, [studentState.studentObject.studentHomePhoneNumber]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentAddress.length > 0 &&
    studentState.studentObject.studentAddress.length < 150
      ? studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentAddressError: false,
        })
      : studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentAddressError: true,
        });
  }, [studentState.studentObject.studentAddress]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentAddressCity.length > 0 &&
    studentState.studentObject.studentAddressCity.length < 150
      ? studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentAddressCityError: false,
        })
      : studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentAddressCityError: true,
        });
  }, [studentState.studentObject.studentAddressCity]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentAddressPostalCode.length > 0 &&
    studentState.studentObject.studentAddressPostalCode.length < 20
      ? studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentAddressPostalCodeError: false,
        })
      : studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentAddressPostalCodeError: true,
        });
  }, [studentState.studentObject.studentAddressPostalCode]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    studentState.studentObject.studentDriversLicenseNumber.length > 0 &&
    studentState.studentObject.studentDriversLicenseNumber.length < 95
      ? studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentDriversLicenseNumberError: false,
        })
      : studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentDriversLicenseNumberError: true,
        });
  }, [studentState.studentObject.studentDriversLicenseNumber]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    if (
      isDateFormatYYYYMMDD(
        studentState.studentObject.studentDriversLicenseNumberIssuedDate
      )
    ) {
      if (
        isDatePast(
          studentState.studentObject.studentDriversLicenseNumberIssuedDate
        )
      ) {
        studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentDriversLicenseNumberIssuedDateError: false,
          // below gets the expiry date by adding 5 years to issued date and then formats it to yyyy-mm-dd
          studentDriversLicenseNumberExpDate: formatDateToYYYYMMDD(
            addYearsToDate(
              studentState.studentObject.studentDriversLicenseNumberIssuedDate,
              5
            )
          ),
        });
      } else {
        studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentDriversLicenseNumberIssuedDateError: true,
          studentDriversLicenseNumberExpDate: "",
        });
      }
    } else {
      studentState.setStudentObject({
        ...studentState.studentObject,
        isStudentDriversLicenseNumberIssuedDateError: true,
        studentDriversLicenseNumberExpDate: "",
      });
    }
  }, [studentState.studentObject.studentDriversLicenseNumberIssuedDate]);

  /**
   * Validates newly selected end date date
   * @dependent courseEndDate
   */
  useEffect(() => {
    isDateFormatYYYYMMDD(
      studentState.studentObject.studentDriversLicenseNumberExpDate
    )
      ? studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentDriversLicenseNumberExpDateError: false,
        })
      : studentState.setStudentObject({
          ...studentState.studentObject,
          isStudentDriversLicenseNumberExpDateError: true,
        });
  }, [studentState.studentObject.studentDriversLicenseNumberExpDate]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    if (isNumber(studentState.studentObject.studentRegisteredCourseId)) {
      studentState.courses.some(
        (element) =>
          element.id == studentState.studentObject.studentRegisteredCourseId
      )
        ? studentState.setStudentObject({
            ...studentState.studentObject,
            isStudentRegisteredCourseIdError: false,
          })
        : studentState.setStudentObject({
            ...studentState.studentObject,
            isStudentRegisteredCourseIdError: true,
          });
    } else {
      studentState.setStudentObject({
        ...studentState.studentObject,
        isStudentRegisteredCourseIdError: true,
      });
    }
  }, [studentState.studentObject.studentRegisteredCourseId]);

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   * 3 options M F Not-Declaring
   */
  useEffect(() => {
    if (isNumber(studentState.studentObject.studentRegisteredProductId)) {
      studentState.products.some(
        (element) =>
          element.id == studentState.studentObject.studentRegisteredProductId
      )
        ? studentState.setStudentObject({
            ...studentState.studentObject,
            isStudentRegisteredProductIdError: false,
          })
        : studentState.setStudentObject({
            ...studentState.studentObject,
            isStudentRegisteredProductIdError: true,
          });
    } else {
      studentState.setStudentObject({
        ...studentState.studentObject,
        isStudentRegisteredProductIdError: true,
      });
    }
  }, [studentState.studentObject.studentRegisteredProductId]);

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
    studentState,
    studentChangeHandlers,
    studentButtonHandlers,
  };
};

export default useNewStudentScreen;
