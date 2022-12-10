import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { isDateFormatYYYYMMDD } from "../../../../domain/validators";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  useNewInClassInstructorScreenButtonHandlers,
  useNewInClassInstructorScreenChangeHandlers,
  useNewInClassInstructorScreenStates,
  useNewInClassInstructorScreenUseEffectHelpers,
} from ".";

const useNewInClassInstructorScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const { inClassInstructorState } = useNewInClassInstructorScreenStates();

  const { InClassInstructorChangeHandlers } = useNewInClassInstructorScreenChangeHandlers(inClassInstructorState);
  const { inClassInstructorButtonHandlers } = useNewInClassInstructorScreenButtonHandlers(inClassInstructorState);
  const { inClassInstructorUseEffectHelpers } = useNewInClassInstructorScreenUseEffectHelpers(inClassInstructorState);
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
    if (inClassInstructorState.uiModifiersObject.dataSaved) {
      inClassInstructorUseEffectHelpers.navigateAfterSave();
    }
  }, [inClassInstructorState.uiModifiersObject.dataSaved]);

  /**
   * Validates newly inputted inClassInstFirstName
   * @dependent inClassInstFirstName
   */
  useEffect(() => {
    inClassInstructorState.inClassInstructorObject.firstName.length > 0 &&
    inClassInstructorState.inClassInstructorObject.firstName.length < 75
      ? inClassInstructorState.inClassInstructorObject.setIsFirstNameError(false)
      : inClassInstructorState.inClassInstructorObject.setIsFirstNameError(true);
  }, [inClassInstructorState.inClassInstructorObject.firstName]);

  /**
   * Validates newly inputted inClassInstLastName
   * @dependent inClassInstLastName
   */
  useEffect(() => {
    inClassInstructorState.inClassInstructorObject.lastName.length > 0 &&
    inClassInstructorState.inClassInstructorObject.lastName.length < 75
      ? inClassInstructorState.inClassInstructorObject.setIsLastNameError(false)
      : inClassInstructorState.inClassInstructorObject.setIsLastNameError(true);
  }, [inClassInstructorState.inClassInstructorObject.lastName]);

  /**
   * Validates newly inputted inClassInstLastName
   * @dependent inClassInstLastName
   */
  useEffect(() => {
    inClassInstructorState.inClassInstructorObject.driversLicenseId.length > 0 &&
    inClassInstructorState.inClassInstructorObject.driversLicenseId.length < 100
      ? inClassInstructorState.inClassInstructorObject.setIsDriversLicenseIdError(false)
      : inClassInstructorState.inClassInstructorObject.setIsDriversLicenseIdError(true);
  }, [inClassInstructorState.inClassInstructorObject.driversLicenseId]);

  /**
   * Validates newly inputted inClassInstLastName
   * @dependent inClassInstLastName
   */
  useEffect(() => {
    isDateFormatYYYYMMDD(inClassInstructorState.inClassInstructorObject.driversLicenseExpDate)
      ? inClassInstructorState.inClassInstructorObject.setIsDriversLicenseExpDateError(false)
      : inClassInstructorState.inClassInstructorObject.setIsDriversLicenseExpDateError(true);
  }, [inClassInstructorState.inClassInstructorObject.driversLicenseExpDate]);

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    inClassInstructorState,
    InClassInstructorChangeHandlers,
    inClassInstructorButtonHandlers,
  };
};

export default useNewInClassInstructorScreen;
