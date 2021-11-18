import React from "react";
import { AnimatedWeatherIcon } from 'animated-weather-icon';

export default function WeatherIcon(props) {

    return (
    <img src="https://animated-weather-icon.netlify.com/" 
    alt={props.alt} />

     ); 
     }