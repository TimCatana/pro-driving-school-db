import { inClassInstTableHeadings } from "../../../../domain/constants/dbConstants";
import { getOneInClassInstructorUC } from "../../../../domain/db";

const useNewInClassInstructorScreenUseEffectHelpers = (inClassInstructorState) => {
  /**
   *
   */
  const onRender = async () => {
    inClassInstructorState.uiModifiersObject.setIsLoading(true);

    if (inClassInstructorState.primary_key != 0) {
      await handleGetSpecificInClassInst();
      inClassInstructorState.uiModifiersObject.setIsNewEntry(false);
      inClassInstructorState.uiModifiersObject.setAreFieldsEditable(false);
    } else {
      inClassInstructorState.uiModifiersObject.setIsNewEntry(true);
      inClassInstructorState.uiModifiersObject.setAreFieldsEditable(true);
    }

    inClassInstructorState.uiModifiersObject.setIsLoading(false);
    inClassInstructorState.initialRender.current = false;
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificInClassInst = async () => {
    const result = await getOneInClassInstructorUC(inClassInstructorState.primary_key);

    if (result.data.status == 200) {
      inClassInstructorState.inClassInstructorObject.setFirstName(
        result.data.query[0][inClassInstTableHeadings.firstName]
      );
      inClassInstructorState.inClassInstructorObject.setIsFirstNameError(false);

      inClassInstructorState.inClassInstructorObject.setLastName(
        result.data.query[0][inClassInstTableHeadings.lastName]
      );
      inClassInstructorState.inClassInstructorObject.setIsLastNameError(false);

      inClassInstructorState.inClassInstructorObject.setDriversLicenseId(
        result.data.query[0][inClassInstTableHeadings.driversLicenseId]
      );
      inClassInstructorState.inClassInstructorObject.setIsDriversLicenseIdError(false);

      inClassInstructorState.inClassInstructorObject.setDriversLicenseExpDate(
        result.data.query[0][inClassInstTableHeadings.driversLicenseExpDate]
      );
      inClassInstructorState.inClassInstructorObject.setIsDriversLicenseExpDateError(false);

      inClassInstructorState.uiModifiersObject.setFailedToGetData(false);
    } else {
      inClassInstructorState.uiModifiersObject.setFailedToGetData(true);
    }
  };

  /**
   *
   */
  const navigateAfterSave = async () => {
    inClassInstructorState.navigation("/?initial_selection=in-class-instructors");
  };

  /**
   *
   */
  const inClassInstructorUseEffectHelpers = {
    onRender,
    handleGetSpecificInClassInst,
    navigateAfterSave,
  };
  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    inClassInstructorUseEffectHelpers,
  };
};

export default useNewInClassInstructorScreenUseEffectHelpers;
