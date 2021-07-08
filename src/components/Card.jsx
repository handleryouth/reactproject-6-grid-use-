import React from "react";

function Card(props) {
  return (
    <div className={props.class}>
      <div className="personal-container">
        <div>
          <img className="personal-picture" src={props.image} alt="Photos" />
        </div>

        <div className="personal">
          <p>{props.name}</p>
          <p className="position">{props.position}</p>
        </div>
      </div>

      <p className="title">{props.title}</p>

      <p className="description">{props.description}</p>
    </div>
  );
}

export default Card;
