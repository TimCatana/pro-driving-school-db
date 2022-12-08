import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useNewInCarInstructorScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigate();
  const { primary_key } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isNewEntry, setIsNewEntry] = useState(true);

  const [inCarInstructorSaved, setInCarInstructorSaved] = useState(false);

  const [isICIInstDriversLicenseFocus, setIsICIInstDriversLicenseFocus] =
    useState(false);
  const [isICIGDriversLicenseFocus, setICIGDriversLicenseFocus] =
    useState(false);

  const [inCarInstructorObject, setInCarInstructorObject] = useState({
    iciFirstName: "",
    isICIFirstNameError: true,

    iciLastName: "",
    isICILastNameError: true,

    iciDriversLicenseNum: "",
    isICIDriversLicenseNumError: true,

    iciDriversLicenseExpDate: "",
    isICIDriversLicenseExpDateError: true,

    iciGLicenseNum: "",
    isICIGLicenseNumError: true,

    iciGLicenseExpDate: "",
    isICIGLicenseExpDateError: true,
  });

  const inCarInstructorState = {
    navigation,
    primary_key,

    isLoading,
    setIsLoading,
    isNewEntry,
    setIsNewEntry,

    inCarInstructorSaved,
    setInCarInstructorSaved,

    isICIInstDriversLicenseFocus,
    setIsICIInstDriversLicenseFocus,
    isICIGDriversLicenseFocus,
    setICIGDriversLicenseFocus,

    inCarInstructorObject,
    setInCarInstructorObject,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { inCarInstructorState };
};

export default useNewInCarInstructorScreenStates;
