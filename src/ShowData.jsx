import React from "react";
import "./ShowData1.css";

const ShowData = ({ country }) => {
  console.log(country.flags.png);
  const image = country.flags.png;
  const imageUrl = country.flags.png;
  return (
    <div className="">
      <div className="mainDiv">
        <img className="image" src={imageUrl} />
        <h1>{country.name.common}</h1>
        <h1>Capital: {country.capital}</h1>
        <a href="{country.flags.png}">dd</a>
        {/* <a>{country.flags.png}</a>  */}
      </div>
    </div>
  );
};

export default ShowData;
