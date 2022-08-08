import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupStore } from "./store";
import { Provider } from 'react-redux';
import { DepsProvider } from './context/depContext';
import moreEffectService from './services/moreEffectService';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <DepsProvider services={{
            moreEffectService: moreEffectService()
        }}>
            <App/>
        </DepsProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
