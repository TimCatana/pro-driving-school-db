import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const useHomeScreenStates = () => {
  /******************/
  /***** STATES *****/
  /******************/
  const Data = {
    COURSES: 'courses',
    PRODUCTS: 'products',
    STUDENTS: 'students',
    IN_CLASS_INST: 'in-class-instructors',
    IN_CAR_INST: 'in-car-instructors',
  };

  const navigation = useNavigate();
  const [_searchParams, _setSearchParams] = useSearchParams();

  const query = {
    initialSelection: _searchParams.get("initial_selection"),
  };
  
  const [isLoading, setIsLoading] = useState(true);





  const [displaying, setDisplaying] = useState(Data.COURSES);
  const [displayData, setDisplayData] = useState([]);

  const homeState = {
    navigation,
    query,

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
