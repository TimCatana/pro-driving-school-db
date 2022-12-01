import { getOneInClassInstructorUC } from "../../../../domain/db";

const useNewInClassInstructorScreenUseEffectHelpers = (
  inClassInstructorState
) => {
  const onRender = async () => {
    inClassInstructorState.setIsLoading(true);

    if (inClassInstructorState.primary_key != 0) {
      await handleGetSpecificInClassInst();
      inClassInstructorState.setIsNewEntry(false);
    }

    inClassInstructorState.setIsLoading(false);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleGetSpecificInClassInst = async () => {
    const result = await getOneInClassInstructorUC(
      inClassInstructorState.primary_key
    );

    if (result.data.status == 200) {
      inClassInstructorState.setInClassInstructorObject({
        ...inClassInstructorState.inClassInstructorObject,
        iciFirstName: result.data.query[0].first_name,
        isICIFirstNameError: false,
        iciLastName: result.data.query[0].last_name,
        isICILastNameError: false,
        iciDriversLicenseNum: result.data.query[0].inst_drivers_license_id,
        isICIDriversLicenseNumError: false,
        iciDriversLicenseExpDate:
          result.data.query[0].inst_drivers_license_exp_date,
        isICIDriversLicenseExpDate: false,
      });

      console.log(result.data.query[0]);
    } else {
      console.log(result.data);
    }
  };

  /**
   *
   */
  const inClassInstructorUseEffectHelpers = {
    onRender,
  };
  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    inClassInstructorUseEffectHelpers,
  };
};

export default useNewInClassInstructorScreenUseEffectHelpers;
