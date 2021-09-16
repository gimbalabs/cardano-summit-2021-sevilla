import React from "react";
import { Switch, Route } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./components/home/Home";
import About from "./components/about/About";
import SaturdayScheduleList from "./components/schedule/SaturdayScheduleList";
import SundayScheduleList from "./components/schedule/SundayScheduleList";
import SignupDetail from "./components/signup/SignupDetail";
import NotFound from "./components/errors/NotFound";
import Playground from "./components/playground/Playground";
import Winners from "./components/winners/Winners";

function App() {
  return (
    <>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          
          
          <Route exact path="/schedule/saturday" component={SaturdayScheduleList} />
          <Route exact path="/schedule/sunday" component={SundayScheduleList} />
          <Route path="/signup/:network" component={SignupDetail} />
          <Route exact path="/playground" component={Playground} />
          <Route exact path="/winners" component={Winners} />
          <Route component={NotFound} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
