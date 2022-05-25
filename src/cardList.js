import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    const cardComponent = robots.map((robot) => { }
  return<div>



    {/* {props.robots.map((robots) => {
      return (
        <Card
          key={robots.id}
          id={robots.id}
          name={robots.name}
          email={robots.email}
        />
      );
    })} */}
  </div>;
};
export default CardList;