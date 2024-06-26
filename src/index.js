import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ui/LoginUI';
import reportWebVitals from './reportWebVitals';
import AppStack from './AppStack';
import NoteState from './context/NoteState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoteState>
      <AppStack />
    </NoteState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
