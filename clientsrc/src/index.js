import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {RecoilRoot} from "recoil";

ReactDOM.render(
    <BrowserRouter>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </BrowserRouter>,
    document.getElementById('root')
);
