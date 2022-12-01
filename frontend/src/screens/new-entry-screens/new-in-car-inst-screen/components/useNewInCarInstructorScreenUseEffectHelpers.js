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
        iciFirstName: result.data.query[0].first_name,
        isICIFirstNameError: false,
        iciLastName: result.data.query[0].last_name,
        isICILastNameError: false,
        iciDriversLicenseNum: result.data.query[0].inst_drivers_license_id,
        isICIDriversLicenseNumError: false,
        iciDriversLicenseExpDate:
          result.data.query[0].inst_drivers_license_exp_date,
        isICIDriversLicenseExpDate: false,
        iciGLicenseNum: result.data.query[0].g_drivers_license_id,
        isICIGLicenseNumError: false,
        iciGLicenseExpDate: result.data.query[0].g_drivers_license_exp_date,
        isICIGLicenseExpDateError: false,
      });

      console.log(result.data.query[0]);
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
