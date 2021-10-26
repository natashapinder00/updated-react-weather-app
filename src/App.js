import React from "react";
import Weather from "./Weather";
import "./App.css";


export function App() {
  return (
    <div className="App">
      <div className="container">

        <Weather defaultCity="Lisbon"/>
        
        <footer> 
  This project was coded by <a href="https://www.linkedin.com/in/natasha-p-9a3621173/" 
  target="_blank" rel="noreferrer">Natasha Pinder</a>  and is{" "}
  <a href="https://github.com/natashapinder00/updated-react-weather-app" 
  target="_blank" 
  rel="noreferrer">
  open-sourced on Github
  </a>
  </footer>
  </div>
    </div>
  );
}

export default App;
