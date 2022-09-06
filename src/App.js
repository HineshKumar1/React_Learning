// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
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
  <Navbar title="Textutals World" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className='container my-3'>
       <TextForm showAlert={showAlert} heading="Enter to Text Analyze below"></TextForm>
     {/* <AboutUs></AboutUs>  */}
    </div> 
    </>
  );
}

export default App;
