import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route,NavLink } from 'react-router-dom';
import AboutUs2 from './AboutAs2';
import AboutUs1 from './AboutUs1';
import './AboutUs.css'
function AboutUs() {
    return (
        <div>
              <h1>AboutUs Component</h1>
              <Router>
                  <div> <ul><li><NavLink activeClassName="activeClassForAboutCSS" exact to="/AboutUS1/123">AboutUS1</NavLink></li> <li><NavLink activeClassName="activeClassForAboutCSS" to="/AboutUS2/222">AboutUS2</NavLink></li></ul> </div>
                
                    <Switch>
                        <Route exact path="/AboutUS1/:id" component={AboutUs1} />
                        <Route exact path="/AboutUS2/:id" component={AboutUs2} />
                    </Switch>
              

              </Router>
        </div>
    )
}

export default AboutUs
