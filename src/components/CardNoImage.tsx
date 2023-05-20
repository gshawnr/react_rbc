import React from "react";

interface CardProps {
  headerText: string;
}

function CardNoImage({ headerText }: CardProps) {
  return (
    <div>
      <h2 className="card-no-img-header">{headerText}</h2>
      <div className="card-no-img-body"></div>
      <div className="card-no-img-footer"></div>
    </div>
  );
}

export default CardNoImage;
