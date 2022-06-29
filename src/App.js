import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'
function App() {

  const [Mode, setMode] = useState('light'); //wether dark mode is enabled or not

  const toggleMode = () => {
    if (Mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
  }
  return (
    <>
      <Navbar title="TextUtilsSR" aboutText="About Us" mode={Mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm mode={Mode} heading="Enter the Text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
