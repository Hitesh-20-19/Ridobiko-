import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './page1/mainpage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mainpage />
      </BrowserRouter>
    </div>
  );
}

export default App;
