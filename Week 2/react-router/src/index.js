// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// 1. IMPORT REACT
import React from "react";
// 2. IMPORT REACTDOM
import ReactDOM from "react-dom";
// 3. ADDITIONAL IMPORTS
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// 4. RENDER COMPONENT TO THE SCREEN
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
