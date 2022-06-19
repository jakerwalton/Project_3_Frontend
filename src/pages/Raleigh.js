import React from "react";
import { useEffect, useState } from "react";

import Card from "../components/Restaurant-card";

function Raleigh(props) {
  const [restaurants, setRestaurants] = useState(null);

  const URL = "https://project-3-backend-hard.herokuapp.com/raleigh";

  const getRaleighRestaurants = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRestaurants(data);
  };

  useEffect(() => {
    getRaleighRestaurants();
  }, []);

  return (
    <div>
      <h1>The Raleigh Page</h1>
      <Card restaurants={restaurants} />
    </div>
  );
}

export default Raleigh;
