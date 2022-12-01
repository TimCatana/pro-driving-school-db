import {
  addOneInCarInstructorUC,
  deleteOneInCarInstructorUC,
  editOneInCarInstructorUC,
} from "../../../../domain/db";

const useNewInCarInstructorScreenButtonHandlers = (inCarInstructorState) => {
  /**
   * Updates the subscript to mailing list option.
   */
  const handleAddNewInCarInstructor = async () => {
    // TODO - axios call to node backend that adds new course entry
    //     console.log(`axios call to backend, not implemented yet but button works!
    //     values:
    //     il ${isLoading}
    //     ${_setIsLoading}
    //     icifn  ${inCarInstructorState.inCarInstructorObject.iciFirstName}
    //     ${typeof inCarInstructorState.inCarInstructorObject.iciFirstName}
    //     ${inCarInstructorState.inCarInstructorObject.isICIFirstNameError}
    //     iniln ${inCarInstructorState.inCarInstructorObject.iciLastName}
    //     ${typeof inCarInstructorState.inCarInstructorObject.iciLastName}
    //     ${inCarInstructorState.inCarInstructorObject.isICILastNameError}
    //     icidl ${inCarInstructorState.inCarInstructorObject.iciDriversLicenseNum}
    //     ${typeof inCarInstructorState.inCarInstructorObject.iciDriversLicenseNum}
    //     ${inCarInstructorState.inCarInstructorObject.isICIDriversLicenseNumError}
    //     icidled ${
    //       inCarInstructorState.inCarInstructorObject.iciDriversLicenseExpDate
    //     }
    //     ${typeof inCarInstructorState.inCarInstructorObject
    //       .iciDriversLicenseExpDate}
    //     ${inCarInstructorState.inCarInstructorObject.isICIDriversLicenseExpDate}
    //     icigl ${inCarInstructorState.inCarInstructorObject.iciGLicenseNum}
    //     ${typeof inCarInstructorState.inCarInstructorObject.iciGLicenseNum}
    //     ${inCarInstructorState.inCarInstructorObject.isICIGLicenseExpDateError}
    //     icigled ${inCarInstructorState.inCarInstructorObject.iciGLicenseExpDate}
    //     ${typeof inCarInstructorState.inCarInstructorObject.iciGLicenseExpDate}
    //     ${inCarInstructorState.inCarInstructorObject.iciGLicenseExpDate}
    // `);

    if (
      !inCarInstructorState.inCarInstructorObject.isICIFirstNameError &&
      !inCarInstructorState.inCarInstructorObject.isICILastNameError &&
      !inCarInstructorState.inCarInstructorObject.isICIDriversLicenseNumError &&
      !inCarInstructorState.inCarInstructorObject.isICIDriversLicenseExpDate &&
      !inCarInstructorState.inCarInstructorObject.isICIGLicenseNumError &&
      !inCarInstructorState.inCarInstructorObject.isICIGLicenseExpDateError
    ) {
      await addOneInCarInstructorUC(inCarInstructorState.inCarInstructorObject);
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleEditInCarInstructor = async () => {
    if (
      !inCarInstructorState.inCarInstructorObject.isICIFirstNameError &&
      !inCarInstructorState.inCarInstructorObject.isICILastNameError &&
      !inCarInstructorState.inCarInstructorObject.isICIDriversLicenseNumError &&
      !inCarInstructorState.inCarInstructorObject.isICIDriversLicenseExpDate &&
      !inCarInstructorState.inCarInstructorObject.isICIGLicenseNumError &&
      !inCarInstructorState.inCarInstructorObject.isICIGLicenseExpDateError
    ) {
      await editOneInCarInstructorUC(
        inCarInstructorState.inCarInstructorObject,
        inCarInstructorState.primary_key
      );
    }
  };

  /**
   * Updates the subscript to mailing list option.
   */
  const handleDeleteInCarInstructor = async () => {
    const result = await deleteOneInCarInstructorUC(
      inCarInstructorState.primary_key
    );

    if (result.data.status != 200) {
      console.log("failed to delete item");
    } else {
      console.log("successfully deleted item");
    }
  };

  const inCarInstructorButtonHandlers = {
    handleAddNewInCarInstructor,
    handleEditInCarInstructor,
    handleDeleteInCarInstructor,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { inCarInstructorButtonHandlers };
};

export default useNewInCarInstructorScreenButtonHandlers;
