import React from "react";
import { useEffect, useState } from "react";

import Card from "../components/Restaurant-card";

function Houston(props) {
  const [restaurants, setRestaurants] = useState(null);

  const URL = "https://project-3-backend-hard.herokuapp.com/houston/";

  const getHoustonRestaurants = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRestaurants(data);
  };

  useEffect(() => {
    getHoustonRestaurants();
  }, []);

  return (
    <div>
      <h1>The Houston's Page</h1>
      <div className="card-container">
        <Card restaurants={restaurants} />
      </div>
    </div>
  );
}

export default Houston;
