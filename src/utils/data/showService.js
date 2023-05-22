import React from "react";
// const URL = "http://localhost:80/";

const ShowService = ({ services, url }) => {
  // console.log(services);
  return (
    <div className="showService">
      <img src={services} alt={services?.title} />
    </div>
  );
};

export default ShowService;
