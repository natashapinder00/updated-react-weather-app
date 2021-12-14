import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");

  }

  function showcelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}
      </span>
      <span className="unit">
           °C |{" "}
        <a href="/" onClick={showFahrenheit}>
        °F
        </a>
         </span>
         </div>
  );

  }
}