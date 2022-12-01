import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { isDateFormatYYYYMMDD } from "../../../domain/validators";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  useNewInClassInstructorScreenButtonHandlers,
  useNewInClassInstructorScreenChangeHandlers,
  useNewInClassInstructorScreenStates,
  useNewInClassInstructorScreenUseEffectHelpers,
} from "./components";

const useNewInClassInstScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const { inClassInstructorState } = useNewInClassInstructorScreenStates();

  const { InClassInstructorChangeHandlers } =
    useNewInClassInstructorScreenChangeHandlers(inClassInstructorState);
  const { inClassInstructorButtonHandlers } =
    useNewInClassInstructorScreenButtonHandlers(inClassInstructorState);
  const { inClassInstructorUseEffectHelpers } =
    useNewInClassInstructorScreenUseEffectHelpers(inClassInstructorState);
  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   * Validates newly inputted courseId
   * @dependent courseId
   */
  useEffect(() => {
    inClassInstructorUseEffectHelpers.onRender();
  }, []);

  /**
   *
   */
  useEffect(() => {
    if (
      inClassInstructorState.inClassInstructorSaved &&
      !inClassInstructorState.isLoading
    ) {
      inClassInstructorState.navigation("/");
    }
  }, [inClassInstructorState.inClassInstructorSaved]);

  /**
   * Validates newly inputted inClassInstFirstName
   * @dependent inClassInstFirstName
   */
  useEffect(() => {
    inClassInstructorState.inClassInstructorObject.iciFirstName.length > 0 &&
    inClassInstructorState.inClassInstructorObject.iciFirstName.length < 75
      ? inClassInstructorState.setInClassInstructorObject({
          ...inClassInstructorState.inClassInstructorObject,
          isICIFirstNameError: false,
        })
      : inClassInstructorState.setInClassInstructorObject({
          ...inClassInstructorState.inClassInstructorObject,
          isICIFirstNameError: true,
        });
  }, [inClassInstructorState.inClassInstructorObject.iciFirstName]);

  /**
   * Validates newly inputted inClassInstLastName
   * @dependent inClassInstLastName
   */
  useEffect(() => {
    inClassInstructorState.inClassInstructorObject.iciLastName.length > 0 &&
    inClassInstructorState.inClassInstructorObject.iciLastName.length < 75
      ? inClassInstructorState.setInClassInstructorObject({
          ...inClassInstructorState.inClassInstructorObject,
          isICILastNameError: false,
        })
      : inClassInstructorState.setInClassInstructorObject({
          ...inClassInstructorState.inClassInstructorObject,
          isICILastNameError: true,
        });
  }, [inClassInstructorState.inClassInstructorObject.iciLastName]);

  /**
   * Validates newly inputted inClassInstLastName
   * @dependent inClassInstLastName
   */
  useEffect(() => {
    inClassInstructorState.inClassInstructorObject.iciDriversLicenseNum.length >
      0 &&
    inClassInstructorState.inClassInstructorObject.iciDriversLicenseNum.length <
      100
      ? inClassInstructorState.setInClassInstructorObject({
          ...inClassInstructorState.inClassInstructorObject,
          isICIDriversLicenseNumError: false,
        })
      : inClassInstructorState.setInClassInstructorObject({
          ...inClassInstructorState.inClassInstructorObject,
          isICIDriversLicenseNumError: true,
        });
  }, [inClassInstructorState.inClassInstructorObject.iciDriversLicenseNum]);

  /**
   * Validates newly inputted inClassInstLastName
   * @dependent inClassInstLastName
   */
  useEffect(() => {
    isDateFormatYYYYMMDD(
      inClassInstructorState.inClassInstructorObject.iciDriversLicenseExpDate
    )
      ? inClassInstructorState.setInClassInstructorObject({
          ...inClassInstructorState.inClassInstructorObject,
          isICIDriversLicenseExpDateError: false,
        })
      : inClassInstructorState.setInClassInstructorObject({
          ...inClassInstructorState.inClassInstructorObject,
          isICIDriversLicenseExpDateError: true,
        });
  }, [inClassInstructorState.inClassInstructorObject.iciDriversLicenseExpDate]);

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
    inClassInstructorState,
    InClassInstructorChangeHandlers,
    inClassInstructorButtonHandlers,
  };
};

export default useNewInClassInstScreen;
