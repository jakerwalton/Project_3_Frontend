import React, { useEffect, useState } from "react";

import Card from "../components/Restaurant-card";

function Austin(props) {
  const [restaurants, setRestaurants] = useState(null);

  const URL = "https://project-3-backend-hard.herokuapp.com/austin";

  const getAustinRestaurants = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRestaurants(data);
  };

  useEffect(() => {
    getAustinRestaurants();
  }, []);

  return (
    <div>
      <h1>The Austin Page</h1>
      <Card restaurants={restaurants} />
    </div>
  );
}

export default Austin;
