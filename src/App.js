// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import AboutUs from './components/About';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
    <Navbar title="Textutals World"></Navbar>
    <div className='container my-3'>
      <TextForm heading="Enter to Text Analyze below"></TextForm>    
      {/* <AboutUs></AboutUs> */}
    </div> 
    </>
  );
}

export default App;
