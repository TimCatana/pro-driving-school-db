import { inCarInstTableHeadings } from "../../../../domain/constants/dbConstants";
import { getOneInCarInstructorUC } from "../../../../domain/db";

const useNewInCarInstructorScreenUseEffectHelpers = (inCarInstructorState) => {
  const onRender = async () => {
    inCarInstructorState.setIsLoading(true);

    if (inCarInstructorState.primary_key != 0) {
      await handleGetSpecificInCarInstructor();
      inCarInstructorState.setIsNewEntry(false);
    }

    inCarInstructorState.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificInCarInstructor = async () => {
    const result = await getOneInCarInstructorUC(
      inCarInstructorState.primary_key
    );

    if (result.data.status == 200) {
      inCarInstructorState.setInCarInstructorObject({
        ...inCarInstructorState.inCarInstructorObject,
        iciFirstName: result.data.query[0][inCarInstTableHeadings.firstName],
        isICIFirstNameError: false,
        iciLastName: result.data.query[0][inCarInstTableHeadings.lastName],
        isICILastNameError: false,
        iciDriversLicenseNum:
          result.data.query[0][inCarInstTableHeadings.driversLicenseId],
        isICIDriversLicenseNumError: false,
        iciDriversLicenseExpDate:
          result.data.query[0][inCarInstTableHeadings.driversLicenseExpDate],
        isICIDriversLicenseExpDateError: false,
        iciGLicenseNum:
          result.data.query[0][inCarInstTableHeadings.gDriversLicenseId],
        isICIGLicenseNumError: false,
        iciGLicenseExpDate:
          result.data.query[0][inCarInstTableHeadings.gDriversLicenseExpDate],
        isICIGLicenseExpDateError: false,
      });
    } else {
      console.log(result.data);
    }
  };
  /**
   *
   */
  const inCarInstructorUseEffectHelpers = {
    onRender,
  };
  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    inCarInstructorUseEffectHelpers,
  };
};

export default useNewInCarInstructorScreenUseEffectHelpers;
