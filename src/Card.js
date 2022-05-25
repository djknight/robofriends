import React from "react";

const Card = (props) => {
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robo" src={`https://robohash.org/${props.id}?size=200x200`} />
      <div className="card-body">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
};
export default Card;
