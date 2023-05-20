import React from "react";
import "./App.css";

import Header from "../components/Header";
import Main from "../components/Main";
import Map from "../components/Map";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
