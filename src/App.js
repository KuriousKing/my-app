import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },600);
  }
  const toggleMode=() => {
    if (mode==='dark') {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode enabled","success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="My Utils" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Enter your text here" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;