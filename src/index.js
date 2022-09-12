import React from 'react';
import ReactDOM from 'react-dom/client';
//Component
import {BrowserRouter} from "react-router-dom";
//Context
import ContextProvider from "./Context/ContextProvider";
//Styles
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ContextProvider>
            <App />
        </ContextProvider>
    </BrowserRouter>
);
