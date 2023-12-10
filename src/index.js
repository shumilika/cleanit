import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/storeConfigurations";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


ReactDOM.render(
  <BrowserRouter>
<Provider store={store}>
<LocalizationProvider dateAdapter={AdapterDayjs}>
    <App />
    </LocalizationProvider>
</Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

