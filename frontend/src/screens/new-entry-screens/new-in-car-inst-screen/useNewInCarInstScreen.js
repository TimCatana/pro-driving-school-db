import { useEffect } from "react";
import { isDateFormatYYYYMMDD } from "../../../domain/validators";
import {
  useNewInCarInstructorScreenButtonHandlers,
  useNewInCarInstructorScreenChangeHandlers,
  useNewInCarInstructorScreenStates,
  useNewInCarInstructorScreenUseEffectHelpers,
} from "./components";

const useNewInCarInstScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const { inCarInstructorState } = useNewInCarInstructorScreenStates();

  const { inCarInstructorChangeHandlers } =
    useNewInCarInstructorScreenChangeHandlers(inCarInstructorState);
  const { inCarInstructorButtonHandlers } =
    useNewInCarInstructorScreenButtonHandlers(inCarInstructorState);
  const { inCarInstructorUseEffectHelpers } =
    useNewInCarInstructorScreenUseEffectHelpers(inCarInstructorState);
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
    if (
      inCarInstructorState.inCarInstructorSaved &&
      !inCarInstructorState.isLoading
    ) {
      inCarInstructorState.navigation("/");
    }
  }, [inCarInstructorState.inCarInstructorSaved]);

  /**
   * Validates newly inputted inCarInstFirstName
   * @dependent inCarInstFirstName
   */
  useEffect(() => {
    inCarInstructorState.inCarInstructorObject.iciFirstName.length > 0 &&
    inCarInstructorState.inCarInstructorObject.iciFirstName.length < 75
      ? inCarInstructorState.setInCarInstructorObject({
          ...inCarInstructorState.inCarInstructorObject,
          isICIFirstNameError: false,
        })
      : inCarInstructorState.setInCarInstructorObject({
          ...inCarInstructorState.inCarInstructorObject,
          isICIFirstNameError: true,
        });
  }, [inCarInstructorState.inCarInstructorObject.iciFirstName]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstructorState.inCarInstructorObject.iciLastName.length > 0 &&
    inCarInstructorState.inCarInstructorObject.iciLastName.length < 75
      ? inCarInstructorState.setInCarInstructorObject({
          ...inCarInstructorState.inCarInstructorObject,
          isICILastNameError: false,
        })
      : inCarInstructorState.setInCarInstructorObject({
          ...inCarInstructorState.inCarInstructorObject,
          isICILastNameError: true,
        });
  }, [inCarInstructorState.inCarInstructorObject.iciLastName]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstructorState.inCarInstructorObject.iciDriversLicenseNum.length >
      0 &&
    inCarInstructorState.inCarInstructorObject.iciDriversLicenseNum.length < 100
      ? inCarInstructorState.setInCarInstructorObject({
          ...inCarInstructorState.inCarInstructorObject,
          isICIDriversLicenseNumError: false,
        })
      : inCarInstructorState.setInCarInstructorObject({
          ...inCarInstructorState.inCarInstructorObject,
          isICIDriversLicenseNumError: true,
        });
  }, [inCarInstructorState.inCarInstructorObject.iciDriversLicenseNum]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    isDateFormatYYYYMMDD(
      inCarInstructorState.inCarInstructorObject.iciDriversLicenseExpDate
    )
      ? inCarInstructorState.setInCarInstructorObject({
          ...inCarInstructorState.inCarInstructorObject,
          isICIDriversLicenseExpDate: false,
        })
      : inCarInstructorState.setInCarInstructorObject({
          ...inCarInstructorState.inCarInstructorObject,
          isICIDriversLicenseExpDate: true,
        });
  }, [inCarInstructorState.inCarInstructorObject.iciDriversLicenseExpDate]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    inCarInstructorState.inCarInstructorObject.iciGLicenseNum.length > 0 &&
    inCarInstructorState.inCarInstructorObject.iciGLicenseNum.length < 100
      ? inCarInstructorState.setInCarInstructorObject({
          ...inCarInstructorState.inCarInstructorObject,
          isICIGLicenseNumError: false,
        })
      : inCarInstructorState.setInCarInstructorObject({
          ...inCarInstructorState.inCarInstructorObject,
          isICIGLicenseNumError: true,
        });
  }, [inCarInstructorState.inCarInstructorObject.iciGLicenseNum]);

  /**
   * Validates newly inputted inCarInstLastName
   * @dependent inCarInstLastName
   */
  useEffect(() => {
    isDateFormatYYYYMMDD(
      inCarInstructorState.inCarInstructorObject.iciGLicenseExpDate
    )
      ? inCarInstructorState.setInCarInstructorObject({
          ...inCarInstructorState.inCarInstructorObject,
          isICIGLicenseExpDateError: false,
        })
      : inCarInstructorState.setInCarInstructorObject({
          ...inCarInstructorState.inCarInstructorObject,
          isICIGLicenseExpDateError: true,
        });
  }, [inCarInstructorState.inCarInstructorObject.iciGLicenseExpDate]);

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
    inCarInstructorState,
    inCarInstructorChangeHandlers,
    inCarInstructorButtonHandlers,
  };
};

export default useNewInCarInstScreen;
