import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useNewInCarInstructorScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigate();
  const { primary_key } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [showAddButton, setShowAddButton] = useState(true);

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
    isICIDriversLicenseExpDate: true,

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
    showAddButton,
    setShowAddButton,

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
