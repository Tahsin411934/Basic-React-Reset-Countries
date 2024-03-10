import React, { useEffect, useState } from 'react';
import ShowData from './ShowData';

const LoadData = () => {

    const [countries, setCountry] = useState([])

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountry(data))
    },[])
    console.log(countries)
    return (
        <div className='main'>
            {
                countries.map(country=><ShowData country={country}></ShowData>)
            }
        </div>
    );
};

export default LoadData;