import React from "react";

const Card = (props) => {
  const { id, name, email } = props;

  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robo" src={`https://robohash.org/${name}`} />
      <div className="card-body">
        <h2>{name}</h2>
        <p>{email}</p>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
};
export default Card;
