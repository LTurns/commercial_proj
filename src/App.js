import React from 'react';
import Header from './components/header'
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Category1 from './components/category1'
import Navigation from './components/navigation'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
    <Route exact path="/" component={Header} />
    <Route exact path="/category1" component={Category1}/>
    </Switch>
     </div>
    </Router>
  );
}

export default App;
