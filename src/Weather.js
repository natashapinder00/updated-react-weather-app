import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() { 
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({  
        temperature: response.data.main.temp,
        wind: 12,
        city: response.data.name
    });

setReady(true);

    }
if (ready) {
return (
    <div className="Weather">
         <form>
            <div className="row">
            <div className="col-9">

        <input type="search" 
        placeholder="Enter a city..." 
        className="form-control"
        />
</div>
        <div className="col-3">
        <input type="submit" 
        value ="Search" 
        className="btn btn-primary w-100" />
</div>
        </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
            <li>Thursday 16:00</li>
            <li>{weatherData.description}</li>
            </ul>
            
        <div className="row mt-3">
            <div className="col-6">
                 <div className="clearfix">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="Mostly Cloudy"
                className="float-left"/>
            
                
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C |°F </span>
                 
                </div>
            </div>
            <div className="col-6">
                <ul>
                     <li> Preciptiation: 70%</li>
                     <li> Humidity: 20% </li>
                     <li> Wind: {weatherData.wind} km/h% </li>
                </ul>
            </div>
        </div>
    
    </div>
    );
} else {
const apiKey = "d2b8a0db5e85065ca5e0d9c6fb59f04a";
let city = "London";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return  "Loading";

}

}

   
    
