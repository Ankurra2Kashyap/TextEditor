import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(() => {
      setAlert(null);

    },1500);
}
  // Change 'dark' to any other color string for different modes
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enable", "Success")
      document.title='TextUtils-DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enable", "Success")
      document.title='TextUtils-LightMode';
    }
  }
const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')

}
 
  return (
    <>
    <Router>
      <Navbar title="textutilis2" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      <Route  exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={ <Textform showAlert={showAlert} heading="Textutils-
          Word Counter, Character Counter, Remove Extra Space" mode={mode}/>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
