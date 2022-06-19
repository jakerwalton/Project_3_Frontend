import React from "react";

// Cards
function Card(props) {
  return (
    <div className="info">
      {/* <img className="pic" src={props.image}></img>
      <div className="card-body">
      <h1 className="card-title">{props.name}hello</h1>
      <p>{props.cuisine[0]}</p>
      <p className="card-text">{props.userRating}</p> */}
      <button className="card_button">SUBMIT</button>
    </div>
    // </div>
  );
}

export default Card;
