import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './components/App';
import Model from './components/pages/Model';
import Models from './components/pages/Models';
import HomePage from './components/pages/HomePage';
import NotFound from './components/pages/NotFound';

import { BrowserRouter, Routes, Route} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />}>
        {/* Passed into Outlet in App */}
        <Route exact path="/" element={<HomePage />} />
        <Route path="/model/:creator/:name" element={<Model/>} />
        <Route path="/models" element={<Models/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
