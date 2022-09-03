// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
// import AboutUs from './components/About';
import TextForm from './components/TextForm';



function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#343a40';
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
    return(
    <>    
    <Navbar title="Textutals World" mode={mode} toggleMode={toggleMode}></Navbar>
    <div className='container my-3'>
       <TextForm heading="Enter to Text Analyze below"></TextForm>
     {/* <AboutUs></AboutUs>  */}
    </div> 
    </>
  );
}

export default App;
