import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import AlertVariants from "../../../../domain/constants/AlertVariants";

const useHomeScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/

  const navigation = useNavigate();
  const [_searchParams, _setSearchParams] = useSearchParams();
  const query = {
    initialSelection: _searchParams.get("initial_selection"),
  };

  /**
   * ENUMS
   */

  const Data = {
    COURSES: "courses",
    PRODUCTS: "products",
    STUDENTS: "students",
    IN_CLASS_INST: "in-class-instructors",
    IN_CAR_INST: "in-car-instructors",
  };

  /**
   * Parameters that change the UI based on their value
   */

  const [isLoading, setIsLoading] = useState(true);
  const [displaying, setDisplaying] = useState(Data.COURSES);
  const [displayData, setDisplayData] = useState([]);
  const [failedToGetData, setFailedToGetData] = useState(true);

  const uiModifiersObject = {
    isLoading,
    setIsLoading,

    displaying,
    setDisplaying,

    displayData,
    setDisplayData,

    failedToGetData,
    setFailedToGetData,
  };

  /**
   * For error messages
   */

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState(AlertVariants.DANGER);

  const messageObject = {
    showMessage,
    setShowMessage,
    message,
    setMessage,
    messageColor,
    setMessageColor,
  };

  /**
   * The state object of the screen
   */

  const homeState = {
    navigation,
    query,

    Data,

    uiModifiersObject,
    messageObject,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { homeState };
};

export default useHomeScreenStates;
