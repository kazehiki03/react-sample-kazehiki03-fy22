import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './pages/App/index';
import About from "./pages/About/index";
import AboutDetails001 from "./pages/About/Details/001"
import Howto from "./pages/Howto/index";
import Contact from "./pages/Contact/index";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="about/details/001" element={<AboutDetails001 />} />
        <Route path="howto" element={<Howto />} />
        <Route path="contact" element={<Contact />} />
        <Route
        path="*"
        element={
          <main>
            <p>存在しないページです</p>
          </main>
        }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
