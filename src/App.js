import { useState } from 'react';
import './App.css';

function App() {
  //  allow a functional component to use a component-level state
  const [dark, setDark] = useState(false);

  return (
    <div style={{backgroundColor:dark?'black':'white'}}>
      <p style={{color:dark?'white':'black'}}>Colour: {dark?'black':'white'}</p>
      <button onClick={() => setDark(!dark)}>
        set theme {dark? 'white':'black'}
      </button>
    </div>
  );
}

export default App;
