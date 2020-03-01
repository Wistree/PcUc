import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';

import Header from './components/header/header.component';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path = '/' component = {Home} />
      <Route path = '/about' component = {About} />
      <Route path = '/contact' component = {Contact} />
    </Switch>
  </div>
);

export default App;
