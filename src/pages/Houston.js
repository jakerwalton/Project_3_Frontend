import React from "react";
import { useEffect, useState } from "react";
// import '../houston-style.css';
import Card from "../components/Restaurant-card";
import Htown from "../assets/Houstoncity.png";


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
        {/* <div className="background">
            <img src={Htown} className="pic" />
           
        </div> */}
        <div>
            <h1 className="cityHeader">The Houston's Page</h1>
            </div>

      
      <div className="card-container">
        <Card restaurants={restaurants} />
      </div>
    </div>
  );
}

export default Houston;
