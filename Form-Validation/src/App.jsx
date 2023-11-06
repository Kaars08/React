import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import Form from './components/Form';
import Welcome from './components/Welcome';
import "./App.css"
function App() {
  return(
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element= {<Form />} />
        <Route path= "/welcome" element = {<Welcome />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
