import React from "react";
import Raleigh from "../pages/Raleigh";
import { useState, useEffect } from "react";

function Main(props) {
  const [restaurants, setRestaurants] = useState(null);

  const URL = "https://project-3-backend-hard.herokuapp.com/";

  const getRaleighRestaurants = async () => {
    const response = await fetch(URL + "raleigh");
    const data = await response.json();
    setRestaurants(data);
  };

  useEffect(() => {
    getRaleighRestaurants();
  }, []);

  return (
    <>
      <div>Main</div>
    </>
  );
}

export default Main;
