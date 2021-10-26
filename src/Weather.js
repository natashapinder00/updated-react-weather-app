import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() { 
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({  
        ready: true,
        temperature: response.data.main.temp,
        date: "Tuesday 19:00",
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
        wind: response.data.wind.speed,
        city: response.data.name
    });


    }
if (weatherData.ready) {
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
            <li className="text-capitalize">
                Thursday 16:00 </li>
            <li>{weatherData.description}</li>
            </ul>
            
        <div className="row mt-3">
            <div className="col-6">
                 <div className="clearfix">
                <img src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"/>
            
                
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C |°F </span>
                 
                </div>
            </div>
            <div className="col-6">

                <ul>
                     <li> Humidity: {weatherData.humidity}% </li>
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

   
    
