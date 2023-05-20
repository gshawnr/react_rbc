import React from "react";

import SearchBar from "./SearchBar";
import mapImg from "../assets/images/map-bg.jpg";
import "../components/Map.css";
import { Search } from "@mui/icons-material";

function Map() {
  return (
    <section className="map-box" style={{ backgroundImage: `url(${mapImg})` }}>
      <div className="map-info-box">
        <div className="map-info-box-inner">
          <h2 className="map-box-header">Find a Branch or ATM Near You</h2>
          <p className="map-box-text">
            Be sure to check before you visit as some branches may have reduced
            hours.
          </p>
          <div className="map-search-box">
            <h3 className="map-search-header">Search By:</h3>
            <SearchBar />
          </div>
          <div className="map-box-footer"></div>
        </div>
      </div>
    </section>
  );
}

export default Map;
