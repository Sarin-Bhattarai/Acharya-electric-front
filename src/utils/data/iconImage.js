import React from "react";
const URL = "http://localhost:80/";

const IconImage = ({ services, url }) => {
  return (
    <div className="iconImage">
      <img src={`${URL}${services}`} alt={services?.title} />
    </div>
  );
};

export default IconImage;
