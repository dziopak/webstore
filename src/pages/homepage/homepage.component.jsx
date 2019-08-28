import React from "react";
import "./homepage.style.scss";
import Directory from "../../components/directory/directory.component";
import BestsellersBar from "../../components/bestsellers-bar/bestsellers.component";

const HomePage = () => (
  <div className="homepage">
    <Directory />
    <BestsellersBar />
  </div>
);

export default HomePage;
