import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: 'Ivan' },
  { id: 2, name: 'Taras' },
  { id: 3, name: 'Kolia' },
  { id: 2, name: 'Max' }
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How' },
  { id: 3, message: 'how how' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
