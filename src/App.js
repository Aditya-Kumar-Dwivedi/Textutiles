import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import  React,{ useState } from 'react';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,Route,
  // Link
} from "react-router-dom";

function App() {
   const [mode,setMode]=useState('light')
   const [alert,setAlert]=useState(null)
   const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);

   }
   const toggleMode=()=>{
     if(mode ==='light')
     {
     setMode('dark');
     document.body.style.backgroundColor='#153a3f'
     showAlert("Dark mode has been enabled","Success")
     document.title="Play with Text-Dark"
     }
     else
     {
     setMode('light');
     document.body.style.backgroundColor='white'
     showAlert("Light mode has been enabled","Success")
     
     }
   }

  return (
    <>
     {/* <Navbar name={3} home="Home"/> */}
     <Router>

     <Navbar name="Play with Text" home="Home" mode={mode} toggleMode={toggleMode}></Navbar>
     <Alert alert={alert}/>
     <div className="container my-3">
    
      <Routes>
      <Route exact path="/about" element={<About/>}/>
            {/* <About /> */}
            {/* prefer using exact */}
           <Route exact path="/" showAlert={showAlert} element={<Textform mode={mode}/>}/>
          {/* <Textform heading="Enter text" mode={mode} showAlert={showAlert}></Textform> */}
      </Routes>
     </div>
     </Router>
    </>
  );
}

export default App;
