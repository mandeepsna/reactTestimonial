import React from "react";
import data from "./utils/data";
import "./App.css";
import Testimonioal from "./components/Testimonioal";

function App() {
  return (
    <React.Fragment>
      <div>
        <Testimonioal data={data}></Testimonioal>
      </div>
    </React.Fragment>
  );
}

export default App;
