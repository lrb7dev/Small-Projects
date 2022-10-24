import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <div className='txt-001'>C A L C U L A D O R A</div>
      <div className='txt-003'>Mouse Only</div>
      <Calculator></Calculator>
      <div className='txt-003'>Criado por Luan Rabelo</div>
      <div className='txt-002'>2022</div>
    </div> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
