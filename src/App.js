
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import React from "react";
import Menu from './Components/Menu';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/Menu">
            <Menu />
          </Route>
          <Route  path="/Blog">
            <Blog />
          </Route>
          <Route  path="/About">
            <About />
          </Route>
          <Route  path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
