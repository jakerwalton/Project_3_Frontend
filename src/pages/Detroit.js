import React from "react";
import { useState, useEffect } from "react";

import Card from "../components/Restaurant-card";

function Detroit(props) {
  const [restaurants, setRestaurants] = useState(null);

  const URL = "https://project-3-backend-hard.herokuapp.com/detroit/";

  const getDetroitRestaurants = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRestaurants(data);
  };

  useEffect(() => {
    getDetroitRestaurants();
  }, []);

  return (
    <div>
      <h1>The Detroit Page</h1>
      <div className="card-container">
        <Card restaurants={restaurants} />
      </div>
    </div>
  );
}

export default Detroit;
