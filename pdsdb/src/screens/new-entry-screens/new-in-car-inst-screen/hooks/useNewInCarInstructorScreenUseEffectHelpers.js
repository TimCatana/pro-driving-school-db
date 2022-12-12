import { inCarInstTableHeadings } from "../../../../domain/constants/dbConstants";
import { getOneInCarInstructorUC } from "../../../../domain/db";

const useNewInCarInstructorScreenUseEffectHelpers = (inCarInstructorState) => {
  /**
   *
   */
  const onRender = async () => {
    inCarInstructorState.uiModifiersObject.setIsLoading(true);

    if (inCarInstructorState.primary_key != 0) {
      await handleGetSpecificInCarInstructor();
      inCarInstructorState.uiModifiersObject.setIsNewEntry(false);
      inCarInstructorState.uiModifiersObject.setAreFieldsEditable(false);
    } else {
      inCarInstructorState.uiModifiersObject.setIsNewEntry(true);
      inCarInstructorState.uiModifiersObject.setAreFieldsEditable(true);
    }

    inCarInstructorState.uiModifiersObject.setIsLoading(false);
    inCarInstructorState.initialRender.current = false;
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificInCarInstructor = async () => {
    try {
      const result = await getOneInCarInstructorUC(inCarInstructorState.primary_key);

      inCarInstructorState.inCarInstructorObject.setFirstName(result.data[0][inCarInstTableHeadings.firstName]);
      inCarInstructorState.inCarInstructorObject.setIsFirstNameError(false);

      inCarInstructorState.inCarInstructorObject.setLastName(result.data[0][inCarInstTableHeadings.lastName]);
      inCarInstructorState.inCarInstructorObject.setIsLastNameError(false);

      inCarInstructorState.inCarInstructorObject.setInstDriversLicenseId(
        result.data[0][inCarInstTableHeadings.driversLicenseId]
      );
      inCarInstructorState.inCarInstructorObject.setIsInstDriversLicenseIdError(false);

      inCarInstructorState.inCarInstructorObject.setInstDriversLicenseExpDate(
        result.data[0][inCarInstTableHeadings.driversLicenseExpDate]
      );
      inCarInstructorState.inCarInstructorObject.setIsInstDriversLicenseExpDateError(false);

      inCarInstructorState.inCarInstructorObject.setGDriversLicenseId(
        result.data[0][inCarInstTableHeadings.gDriversLicenseId]
      );
      inCarInstructorState.inCarInstructorObject.setIsGDriversLicenseIdError(false);

      inCarInstructorState.inCarInstructorObject.setGDriversLicenseExpDate(
        result.data[0][inCarInstTableHeadings.gDriversLicenseExpDate]
      );
      inCarInstructorState.inCarInstructorObject.setIsGDriversLicenseExpDateError(false);

      inCarInstructorState.uiModifiersObject.setFailedToGetData(false);
    } catch (e) {
      inCarInstructorState.uiModifiersObject.setFailedToGetData(true);
    }
  };

  /**
   *
   */
  const navigateAfterSave = async () => {
    inCarInstructorState.navigation("/?initial_selection=in-car-instructors");
  };

  /**
   *
   */
  const inCarInstructorUseEffectHelpers = {
    onRender,
    handleGetSpecificInCarInstructor,
    navigateAfterSave,
  };
  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    inCarInstructorUseEffectHelpers,
  };
};

export default useNewInCarInstructorScreenUseEffectHelpers;
