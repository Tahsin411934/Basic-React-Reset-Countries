import React from "react";
import "./ShowData1.css";

const ShowData = ({ country }) => {
  console.log(country);
  const image = country.flags.png;
  const imageUrl = country.flags.png;
  return (
    <div className="">
      <div className="mainDiv">
        <img className="image" src={imageUrl} />
        <h1>{country.name.common}</h1>
        <h2>{country.name.official}</h2>
        <h3>Capital: {country.capital}</h3>
        <button onClick={ShowDeatils} >Show Details</button>
        {/* <a href="{country.flags.png}">dd</a> */}
        {/* <a>{country.flags.png}</a>  */}
      </div>
    </div>
  );
};

export default ShowData;

function ShowDeatils(){
    alert('feature added soon')
}
