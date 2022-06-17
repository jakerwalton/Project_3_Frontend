import React from "react";

function Restaurant(props) {
  return (
    <div className="info">
      <img className="pic" src={props.img}></img>
      <div className="card-body">
      <h1 className="card-title">{props.name}</h1>
      <p>{props.cuisine[0]}</p>
      <p className="card-text">{props.userRating}</p>
      <Button />
        </div>
    </div>
  );
}

export default Restaurant;
