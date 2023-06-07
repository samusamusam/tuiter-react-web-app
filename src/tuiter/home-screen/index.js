import React from "react";
import TuitsList from "../tuits/index";
import WhatsHappening from "../whats-happening";

function HomeScreen() {
  return (
    <div>
      <h4>Home</h4>
      <WhatsHappening />
      <TuitsList />
    </div>
  );
}

export default HomeScreen;
