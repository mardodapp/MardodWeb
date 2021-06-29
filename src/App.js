import './App.css';
import React from "react";
import Header from "./Header";
import FAQ from './FAQ';
import Footer from './Footer';
import Main from './Main';
import Policy from './Policy';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Header/>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/faq" component={FAQ} />
          <Route path="/policy" component={Policy} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
