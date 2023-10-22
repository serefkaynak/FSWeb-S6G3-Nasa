import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";


import "./App.css";

const API_KEY = "OrG448C73BjcAit6gEXRdkjk4vRqDaZo8zJDZrzg";
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

function App() {

  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((data) => setNasaData(data));
      console.log(nasaData);
      console.log("Nasa Data Verileri Çekildi.");
  },[]);

  return (
    <div className="App">
      <Header />
      <Content nasaData = {nasaData}/>
      <Footer />
    </div>
  );
}

export default App;
