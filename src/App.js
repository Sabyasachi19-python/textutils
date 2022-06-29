import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'
import Alert from './components/Alert';
function App() {

  const [Mode, setMode] = useState('light'); //wether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (Mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success')
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
       setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Navbar title="TextUtilsSR" aboutText="About Us" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm mode={Mode} showAlert={showAlert} heading="Enter the Text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
