import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Demo from './features/demo/Demo';
import Menu from './features/menu/Menu';
import Home from './features/home/Home';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Menu />
      <Router>
        <Home path='/' />
        <Demo path='demo' />
      </Router>
    </React.Fragment>
  );
}

export default App;
