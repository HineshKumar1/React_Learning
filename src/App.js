// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from "react";
// import {
//   BrowserRouter,
//   // Switch,
//   Route,
//   // Link,
//   Routes
// } from "react-router-dom";
import Navbar from './components/Navbar';
// import AboutUs from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';




function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }
   

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode enable","success");
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode enable","success");
    }
  }

    return(
    <>
    {/* <BrowserRouter> */}
      <Navbar title="Textutals World" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className='container my-3'>
      <TextForm showAlert={showAlert} heading="Enter to Text Analyze below" />
      </div> 
      {/* <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter to Text Analyze below" />} />
        <Route exact path="/about" element={<AboutUs></AboutUs>} />
      {/* </Routes> */}
      
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
