import React, { useState } from "react";


import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  const [mode, setMode] = useState('light')
  const [toggle, setToggle] = useState('Enable Darkmode')
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      setToggle('Enable Lightmode');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      setToggle('Enable Darkmode');
    }
  }
  return (
    <>
 < Navbar title= "myutils" title2="About" mode={mode} toggleMode={toggleMode} toggle = {toggle}/>    {/*/// without default props.  we are settimg props here */}
  {/* <Navbar />     /// we are set props in its file itself as a default props */}
  <div className='container my-4' >
  <Textform heading="This is your workbook" mode={mode}/>
  {/* <About/> */}

  </div>
  </>      
  );
}

export default App;
