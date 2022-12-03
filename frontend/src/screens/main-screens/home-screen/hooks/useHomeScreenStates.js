import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useHomeScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const Data = {
    COURSES: 0,
    PRODUCTS: 1,
    STUDENTS: 2,
    IN_CLASS_INST: 3,
    IN_CAR_INST: 4,
  };

  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [displaying, setDisplaying] = useState(Data.COURSES);
  const [displayData, setDisplayData] = useState([]);

  const homeState = {
    navigation,

    Data,

    isLoading,
    setIsLoading,

    displaying,
    setDisplaying,
    displayData,
    setDisplayData,
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return { homeState };
};

export default useHomeScreenStates;
