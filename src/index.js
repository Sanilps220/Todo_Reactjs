import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Counter from './Counter';
//import Counternew from './Counternew';
//var x = setInterval(()=>{
//import Demonew from './Demonew';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <App library="React"/>
    </React.StrictMode>

);



reportWebVitals();
