import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";


import "./App.css";

const API_KEY = "OrG448C73BjcAit6gEXRdkjk4vRqDaZo8zJDZrzg";

function App() {

  const [nasaData, setNasaData] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
      .then((response) => response.json())
      .then((data) => setNasaData(data));
      console.log(nasaData);
      console.log("Nasa Data Verileri Çekildi.");
  },[date]);

  return (
    <div className="App">
      <Header />
      <input className="dateSelect" 
             type="date" 
             onChange={(e) => setDate(e.target.value)} value={date}>
       </input>
      <Content nasaData = {nasaData}/>
      <Footer />
    </div>
  );
}

export default App;
