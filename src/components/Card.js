import React from "react";

import { CardStyled } from "../styles/CardStyled.style";

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <CardStyled layout={id%2===0?"-reverse":null}>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </CardStyled>
  );
};

export default Card;
