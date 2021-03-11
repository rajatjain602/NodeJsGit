import logo from './logo.svg';
import './App.css';
import Profile from './Profile'
import About from './About'
import Employee from './Employee';
import EmployeeClass from './Employee';
import StateClass from './StateClass';
import {BrowserRouter as Router, Link, Switch, Route,NavLink } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import AboutUS from './AboutUs';
import FatchApi from './FatchApi';

function App() {
  // var EmployeeArr=[{Name:"Rajat Jain",Age="29",Company="Allen" }
  // ,{Name:"Rohit",Age="30",Company="TATA" },
  // {Name:"Mohit",Age="31",Company="INFOSYS" },]
  // {Name:"Rohit",Age="30",Company="Airtel" }
  return (
    <div className="App">
      {/* <Profile data="Data From Profile.dont try to change" data2="data2"> </Profile>
      <About data="Data From Class Component"></About> */}
      {/* <Employee Name="Rajat Jain" Age="29" Company="Allen"></Employee>
      <Employee Name="Rohit" Age="30" Company="TATA"></Employee>
      <Employee Name="Mohit" Age="31" Company="INFOSYS"></Employee>
      <Employee Name="Sohan" Age="32" Company="Airtel"></Employee> */}

      {/* <EmployeeClass Name="Rajat Jain" Age="29" Company="Allen"></EmployeeClass>
      <EmployeeClass Name="Rohit" Age="30" Company="TATA"></EmployeeClass>
      <EmployeeClass Name="Mohit" Age="31" Company="INFOSYS"></EmployeeClass>
      <EmployeeClass Name="Sohan" Age="32" Company="Airtel"></EmployeeClass> */}

      {/* <StateClass Name="Rajat Jain"></StateClass> */}
<FatchApi></FatchApi>
      <Router>
      {/* <div><ul><li><Link to="/">Home</Link></li> <li><Link to="/AboutUs">AboutUS</Link></li><li><Link to="/Contact">Contact</Link></li></ul></div> */}
      <div><ul><li><NavLink exact activeClassName="activeClass" to="/">Home</NavLink></li> <li><NavLink activeClassName="activeClass" to="/AboutUs">AboutUS</NavLink></li><li><NavLink activeClassName="activeClass" to="/Contact">Contact</NavLink></li></ul></div>


      <div>
      
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/AboutUs" exact component={AboutUS}/>
            <Route path="/Contact" exact component={Contact}/>

          </Switch>
       
      </div>
      </Router>
    </div>
    


  );
}

export default App;
