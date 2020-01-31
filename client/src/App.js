import React from 'react';
import Home from './views/index';
import Header from './components/header.js'


function App() {
  return (
    <div className="App">
        <div className="wrapper">
          <Header />
          <Home />
        </div>
    </div>
  );
}

export default App;
