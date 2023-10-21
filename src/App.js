import React, { useEffect } from "react";
import { useState } from "react";

import "./App.css";

const API_KEY = "OrG448C73BjcAit6gEXRdkjk4vRqDaZo8zJDZrzg";


function App() {

  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setNasaData(data));
      console.log(nasaData);
      console.log("Nasa Data Verileri Çekildi.");
  },[]);

  return (
    <div className="App">
      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip edin
		İyi eğlenceler! <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {nasaData && <img src={nasaData.url} alt={nasaData.title} />}
      {nasaData && <h1>{nasaData.title}</h1>}
      {nasaData && <p>{nasaData.explanation}</p>}
      {nasaData && <p>{nasaData.date}</p>}
    </div>
  );
}

export default App;
