import React from "react";
import "./Weather.css";

export default function Weather() { 
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

        <h1>London</h1>
        <ul>
            <li>Thursday 16:00</li>
            <li>Partly Cloudy</li>
            </ul>
            
        <div className="row mt-3">
            <div className="col-6">
                 <div className="clearfix">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="Mostly Cloudy"/>
            
                <span className="temperature">6</span>
                <span className="unit">°C</span>
                 
                </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Preciptiation: 70%
                    </li>
                     <li>
                        Humidity: 20%
                    </li>
                     <li>
                        Wind: 13 km/h%
                    </li>
                </ul>
            </div>
        </div>
    
    </div>
    );
    }