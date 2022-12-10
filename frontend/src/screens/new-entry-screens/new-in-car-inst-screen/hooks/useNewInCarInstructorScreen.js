import { useEffect } from "react";
import { isDateFormatYYYYMMDD } from "../../../../domain/validators";
import {
  useNewInCarInstructorScreenButtonHandlers,
  useNewInCarInstructorScreenChangeHandlers,
  useNewInCarInstructorScreenStates,
  useNewInCarInstructorScreenUseEffectHelpers,
} from ".";

const useNewInCarInstructorScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const { inCarInstructorState } = useNewInCarInstructorScreenStates();

  const { inCarInstructorChangeHandlers } = useNewInCarInstructorScreenChangeHandlers(inCarInstructorState);
  const { inCarInstructorButtonHandlers } = useNewInCarInstructorScreenButtonHandlers(inCarInstructorState);
  const { inCarInstructorUseEffectHelpers } = useNewInCarInstructorScreenUseEffectHelpers(inCarInstructorState);
  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    inCarInstructorUseEffectHelpers.onRender();
  }, []);

  /**
   *
   */
  useEffect(() => {
    if (inCarInstructorState.uiModifiersObject.dataSaved) {
      inCarInstructorUseEffectHelpers.navigateAfterSave();
    }
  }, [inCarInstructorState.uiModifiersObject.dataSaved]);

  /**
   *
   */
  useEffect(() => {
    if (!inCarInstructorState.uiModifiersObject.areFieldsEditable && !inCarInstructorState.initialRender.current) {
      inCarInstructorUseEffectHelpers.handleGetSpecificInCarInstructor();
    }
  }, [inCarInstructorState.uiModifiersObject.areFieldsEditable]);

  /**
   * Validates newly inputted inCarInstFirstName
   * @dependent inCarInstFirstName
   */
  useEffect(() => {
    inCarInstructorState.inCarInstructorObject.firstName.length > 0 &&
    inCarInstructorState.inCarInstructorObject.firstName.length < 75
      ? inCarInstructorState.inCarInstructorObject.setIsFirstNameError(false)
      : inCarInstructorState.inCarInstructorObject.setIsFirstNameError(true);
  }, [inCarInstructorState.inCarInstructorObject.firstName]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstructorState.inCarInstructorObject.lastName.length > 0 &&
    inCarInstructorState.inCarInstructorObject.lastName.length < 75
      ? inCarInstructorState.inCarInstructorObject.setIsLastNameError(false)
      : inCarInstructorState.inCarInstructorObject.setIsLastNameError(true);
  }, [inCarInstructorState.inCarInstructorObject.lastName]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstructorState.inCarInstructorObject.instDriversLicenseId.length > 0 &&
    inCarInstructorState.inCarInstructorObject.instDriversLicenseId.length < 100
      ? inCarInstructorState.inCarInstructorObject.setIsInstDriversLicenseIdError(false)
      : inCarInstructorState.inCarInstructorObject.setIsInstDriversLicenseIdError(true);
  }, [inCarInstructorState.inCarInstructorObject.instDriversLicenseId]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    isDateFormatYYYYMMDD(inCarInstructorState.inCarInstructorObject.instDriversLicenseExpDate)
      ? inCarInstructorState.inCarInstructorObject.setIsInstDriversLicenseExpDateError(false)
      : inCarInstructorState.inCarInstructorObject.setIsInstDriversLicenseExpDateError(true);
  }, [inCarInstructorState.inCarInstructorObject.instDriversLicenseExpDate]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstructorState.inCarInstructorObject.gDriversLicenseId.length > 0 &&
    inCarInstructorState.inCarInstructorObject.gDriversLicenseId.length < 100
      ? inCarInstructorState.inCarInstructorObject.setIsGDriversLicenseIdError(false)
      : inCarInstructorState.inCarInstructorObject.setIsGDriversLicenseIdError(true);
  }, [inCarInstructorState.inCarInstructorObject.gDriversLicenseId]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    isDateFormatYYYYMMDD(inCarInstructorState.inCarInstructorObject.gDriversLicenseExpDate)
      ? inCarInstructorState.inCarInstructorObject.setIsGDriversLicenseExpDateError(false)
      : inCarInstructorState.inCarInstructorObject.setIsGDriversLicenseExpDateError(true);
  }, [inCarInstructorState.inCarInstructorObject.gDriversLicenseExpDate]);

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    inCarInstructorState,
    inCarInstructorChangeHandlers,
    inCarInstructorButtonHandlers,
  };
};

export default useNewInCarInstructorScreen;
