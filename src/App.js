import { useState } from 'react';
import './App.css';
import DummyView from './components/DummyView';
import MoreEffect from './components/MoreEffect';
import ThemeModifier from './components/ThemeModifier';

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

  // return(
  //   <MoreEffect></MoreEffect>
  // )

  const [pageId, setPageId] = useState(0);
  return (
    pageId === 0 ? <ThemeModifier onNavigate={() => setPageId(1)}></ThemeModifier> : <DummyView onNavigate={() => setPageId(0)}></DummyView>
  )
}

export default App;
