import React from "react";
const URL = "http://localhost:80/";

const ShowImage = ({ services, url }) => {
  // console.log(services);
  return (
    <div className="showImage">
      <img src={`${URL}${services}`} alt={services?.title} />
    </div>
  );
};

export default ShowImage;
