import React from "react";
import "./App.css";
import Calculation from "./Containers/Calculation/Calculation";
import Layout from "./Containers/Hoc/Layout/Layout";
import Home from "./Containers/Home/Home";
import Register from "./Containers/Register/Register";

const App = () => {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <Register /> */}
        <Calculation />
      </Layout>
    </div>
  );
};

export default App;
