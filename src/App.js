import React from "react";
import "bootstrap";
import "popper.js";
import "jquery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingV from "./home/LandingV";
import CourseDV from "./course/CourseDV";
import AboutPageV from "./about/AboutPageV";
import BecomeTutorV from "./tutor/BecomeTutorV";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingV} exact />
        <Route path="/about/" component={AboutPageV} exact />
        <Route path="/tutor/become-a-tutor/" component={BecomeTutorV} exact />

        {/* Course Routes */}
        <Route path="/course/:pk?" component={CourseDV} exact />

        {/* Teacher Routes */}
        {/* <Route path="/teacher/" component={ItemCategoryV} exact />
        <Route path="/teacher/list/" component={ItemCategoryLV} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
