import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import UserInterface from "./Containers/Admin/UserInterface";
import Calculation from "./Containers/CalculationNew/CalculationNew";
import Layout from "./Containers/Hoc/Layout/Layout";
import Home from "./Containers/Home/Home";
import Register from "./Containers/Register/Register";
import Login from './Containers/Login/Login'
import Contactus from "./Containers/Contactus/Contactus";


class App extends Component {
  state={

  }
  render(){
  return (
    <div className="App">

<Layout>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/register" component={Register} exact/>
      <Route path="/signin" component={Login} exact/>
      <Route path="/contact" component={Contactus} exact/>
    </Switch>
</Layout>


        {/* <Home /> */}
        {/* <UserInterface/> */}
        {/* <Register /> */}
        {/* <Calculation /> */}
    </div>
  );
};
}

export default App;
