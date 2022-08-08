import { useState } from 'react';
import './App.css';
import MoreEffect from './components/MoreEffect';

function App() {
  // //  allow a functional component to use a component-level state
  // const [dark, setDark] = useState(false);

  // return (
  //   <div style={{backgroundColor:dark?'black':'white'}}>
  //     <p style={{color:dark?'white':'black'}}>Colour: {dark?'black':'white'}</p>
  //     <button onClick={() => setDark(!dark)}>
  //       set theme {dark? 'white':'black'}
  //     </button>
  //   </div>
  // );

  return(
    <MoreEffect></MoreEffect>
  )
}

export default App;
