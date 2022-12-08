import { inClassInstTableHeadings } from "../../../../domain/constants/dbConstants";
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
        iciFirstName: result.data.query[0][inClassInstTableHeadings.firstName],
        isICIFirstNameError: false,
        iciLastName: result.data.query[0][inClassInstTableHeadings.lastName],
        isICILastNameError: false,
        iciDriversLicenseNum:
          result.data.query[0][inClassInstTableHeadings.driversLicenseId],
        isICIDriversLicenseNumError: false,
        iciDriversLicenseExpDate:
          result.data.query[0][inClassInstTableHeadings.driversLicenseExpDate],
        isICIDriversLicenseExpDateError: false,
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
