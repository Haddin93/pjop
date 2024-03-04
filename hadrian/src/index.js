import React from "react";
import "./assets/scss/style.scss";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import Home from "./main/components/Home.js";
import "../src/main/components/App.css";
import About from "./main/components/About.js";
import DCA from "./main/components/DCA.js";
import Desktop from "./main/components/Desktop.js";
import Software_development from "./main/components/Software_development.js";
import Web_designing from "./main/components/Web_designing.js";
import Advanced_python from "./main/components/Advanced_python.js";
import Hardware_networking from "./main/components/Hardware_networking.js";
import Courses from "./main/components/Courses.js";
import Login from "./main/components/Login.js";
import Contact from "./main/components/Contact.js";
import Header from "./main/components/Header.js";
import Training from "./main/components/Training.js";
import Videos from "./main/components/Videos.js";




const root = ReactDOM.createRoot(document.getElementById('root'));

var hist = createBrowserHistory();
root.render(
  <BrowserRouter basename="/demo3">
  {/* <HashRouter history={hist}> */}
  
    <Routes>
       {/* <Route path="/" element={<Home />} />
      <Route path='/' element={<About />} />  */}
      <Route path='/' element={<Home />} />
      <Route path='/dca' element={<DCA />} />
      <Route path='/desktop' element={<Desktop />} />
      <Route path='/software_development' element={<Software_development />} />
      <Route path='/web_designing' element={<Web_designing />} />
      <Route path='/Advanced_python' element={<Advanced_python />} />
      <Route path='/Hardware_networking' element={<Hardware_networking />} />
      <Route path='/courses' element={<Courses />} />
      {/* <Route path='/login' element={<Login />} /> */}
      {/* <Route path='/contact' element={<Contact />} /> */}
      <Route path='/header' element={<Header />} />
      <Route path='/training' element={<Training />} />
      <Route path='/videos' element={<Videos />} />

      
      
      
      
      <Route path="/custom-components" element={<CustomComponents />} />

    </Routes>
    {/* </HashRouter> */}
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
