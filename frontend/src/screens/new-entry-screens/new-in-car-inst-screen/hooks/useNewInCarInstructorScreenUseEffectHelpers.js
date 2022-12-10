import { inCarInstTableHeadings } from "../../../../domain/constants/dbConstants";
import { getOneInCarInstructorUC } from "../../../../domain/db";

const useNewInCarInstructorScreenUseEffectHelpers = (inCarInstructorState) => {
  /**
   *
   */
  const onRender = async () => {
    inCarInstructorState.uiModifiersObject.setIsLoading(true);

    if (inCarInstructorState.primary_key != 0) {
      await _handleGetSpecificInCarInstructor();
      inCarInstructorState.uiModifiersObject.setIsNewEntry(false);
      inCarInstructorState.uiModifiersObject.setAreFieldsEditable(false);
    } else {
      inCarInstructorState.uiModifiersObject.setIsNewEntry(true);
      inCarInstructorState.uiModifiersObject.setAreFieldsEditable(true);
    }

    inCarInstructorState.uiModifiersObject.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const _handleGetSpecificInCarInstructor = async () => {
    const result = await getOneInCarInstructorUC(inCarInstructorState.primary_key);

    if (result.data.status == 200) {
      inCarInstructorState.inCarInstructorObject.setFirstName(result.data.query[0][inCarInstTableHeadings.firstName]);
      inCarInstructorState.inCarInstructorObject.setIsFirstNameError(false);

      inCarInstructorState.inCarInstructorObject.setLastName(result.data.query[0][inCarInstTableHeadings.lastName]);
      inCarInstructorState.inCarInstructorObject.setIsLastNameError(false);

      inCarInstructorState.inCarInstructorObject.setInstDriversLicenseId(
        result.data.query[0][inCarInstTableHeadings.driversLicenseId]
      );
      inCarInstructorState.inCarInstructorObject.setIsInstDriversLicenseIdError(false);

      inCarInstructorState.inCarInstructorObject.setInstDriversLicenseExpDate(
        result.data.query[0][inCarInstTableHeadings.driversLicenseExpDate]
      );
      inCarInstructorState.inCarInstructorObject.setIsInstDriversLicenseExpDateError(false);

      inCarInstructorState.inCarInstructorObject.setGDriversLicenseId(
        result.data.query[0][inCarInstTableHeadings.gDriversLicenseId]
      );
      inCarInstructorState.inCarInstructorObject.setIsGDriversLicenseIdError(false);

      inCarInstructorState.inCarInstructorObject.setGDriversLicenseExpDate(
        result.data.query[0][inCarInstTableHeadings.gDriversLicenseExpDate]
      );
      inCarInstructorState.inCarInstructorObject.setIsGDriversLicenseExpDateError(false);

      inCarInstructorState.uiModifiersObject.setFailedToGetData(false);
    } else {
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
