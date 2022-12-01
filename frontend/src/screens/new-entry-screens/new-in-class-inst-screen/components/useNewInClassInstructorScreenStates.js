import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useNewInClassInstructorScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigate();
  const { primary_key } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [showAddButton, setShowAddButton] = useState(true);

  const [isICIDriversLicenseFocus, setIsICIDriversLicenseFocus] =
    useState(false);

  const [inClassInstructorObject, setInClassInstructorObject] = useState({
    iciFirstName: "",
    isICIFirstNameError: true,

    iciLastName: "",
    isICILastNameError: true,

    iciDriversLicenseNum: "",
    isICIDriversLicenseNumError: true,

    iciDriversLicenseExpDate: "",
    isICIDriversLicenseExpDateError: true,
  });

  const inClassInstructorState = {
    navigation,
    primary_key,

    isLoading,
    setIsLoading,
    showAddButton,
    setShowAddButton,

    isICIDriversLicenseFocus,
    setIsICIDriversLicenseFocus,

    inClassInstructorObject,
    setInClassInstructorObject,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    inClassInstructorState,
  };
};

export default useNewInClassInstructorScreenStates;
