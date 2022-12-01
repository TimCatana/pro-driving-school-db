import {
  addOneCourseUC,
  addOneInClassInstructorUC,
  deleteOneCourseUC,
  deleteOneInClassInstructorUC,
  editOneCourseUC,
  editOneInClassInstructorUC,
} from "../../../../domain/db";

const useNewInClassInstructorScreenButtonHandlers = (
  inClassInstructorState
) => {
  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewInClassInstructor = async () => {
    // TODO - axios call to node backend that adds new course entry
    // console.log(`axios call to backend, not implemented yet but button works!
    //     values:
    //     il ${isLoading}
    //     ${_setIsLoading}
    //     icifn  ${inClassInstructorState.inClassInstructorObject.iciFirstName}
    //     ${typeof inClassInstructorState.inClassInstructorObject.iciFirstName}
    //     ${inClassInstructorState.inClassInstructorObject.isICIFirstNameError}
    //     iniln ${inClassInstructorState.inClassInstructorObject.iciLastName}
    //     ${typeof inClassInstructorState.inClassInstructorObject.iciLastName}
    //     ${inClassInstructorState.inClassInstructorObject.isICILastNameError}
    //     icidl ${
    //       inClassInstructorState.inClassInstructorObject.iciDriversLicenseNum
    //     }
    //     ${typeof inClassInstructorState.inClassInstructorObject
    //       .iciDriversLicenseNum}
    //     ${
    //       inClassInstructorState.inClassInstructorObject
    //         .isICIDriversLicenseNumError
    //     }
    //     icidled ${
    //       inClassInstructorState.inClassInstructorObject
    //         .iciDriversLicenseExpDate
    //     }
    //     ${typeof inClassInstructorState.inClassInstructorObject
    //       .iciDriversLicenseExpDate}
    //       ${
    //         inClassInstructorState.inClassInstructorObject
    //           .isICIDriversLicenseExpDateError
    //       }
    // `);

    inClassInstructorState.setIsLoading(true);
    if (
      !inClassInstructorState.inClassInstructorObject.isICIFirstNameError &&
      !inClassInstructorState.inClassInstructorObject.isICILastNameError &&
      !inClassInstructorState.inClassInstructorObject
        .isICIDriversLicenseNumError &&
      !inClassInstructorState.inClassInstructorObject
        .isICIDriversLicenseExpDateError
    ) {
      await addOneInClassInstructorUC(
        inClassInstructorState.inClassInstructorObject
      );
    }

    inClassInstructorState.setIsLoading(false);
    inClassInstructorState.setInClassInstructorSaved(true);
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleEditInClassInstEntry = async () => {
    if (
      !inClassInstructorState.inClassInstructorObject.isICIFirstNameError &&
      !inClassInstructorState.inClassInstructorObject.isICILastNameError &&
      !inClassInstructorState.inClassInstructorObject
        .isICIDriversLicenseNumError &&
      !inClassInstructorState.inClassInstructorObject
        .isICIDriversLicenseExpDateError
    ) {
      await editOneInClassInstructorUC(
        inClassInstructorState.inClassInstructorObject,
        inClassInstructorState.primary_key
      );
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInClassInst = async () => {
    const result = deleteOneInClassInstructorUC;

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };

  const inClassInstructorButtonHandlers = {
    handleAddNewInClassInstructor,
    handleEditInClassInstEntry,
    handleDeleteInClassInst,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { inClassInstructorButtonHandlers };
};

export default useNewInClassInstructorScreenButtonHandlers;
