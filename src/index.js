import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './Context';


ReactDOM.render(
  <BrowserRouter>
  <ThemeProvider>
   <App />
     
     {/* <Navbar/>
     <Intro/> */}
  </ThemeProvider>
     </BrowserRouter>
  ,




  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
