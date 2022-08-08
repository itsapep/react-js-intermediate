import { useState } from 'react';
import './App.css';
import DummyView from './components/DummyView';
import { HookComponent } from './components/hookComponent';
import MoreEffect from './components/MoreEffect';
import MyHook from './components/myHook/myHook';
import ThemeModifier from './components/ThemeModifier';
import { DepsProvider } from './context/depContext';
import moreEffectService from './services/moreEffectService';

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
  //   <DepsProvider services={{
  //     moreEffectService : moreEffectService()
  //   }}>
  //     <MoreEffect></MoreEffect>
  //   </DepsProvider>
  // )

  // const [pageId, setPageId] = useState(0);
  // return (
  //   pageId === 0 ? <ThemeModifier onNavigate={() => setPageId(1)}></ThemeModifier> : <DummyView onNavigate={() => setPageId(0)}></DummyView>
  // )

  //Hooks adalah fitur yang baru ada di React 16.8.
  //Fitur ini memungkinkan penggunaan state tanpa membuat class javascript
  //Gunakan hook di paling atas, sebelum react function yang lainnya (sebelum return)
  // return <HookComponent></HookComponent>

  return (
    <MyHook></MyHook>
  )
}

export default App;
