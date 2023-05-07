import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Array from './Array';
import ArrayMap from './ArrayMap';
import Mapcarousel from './Mapcarousel';
import MapTable from './MapTable';
import UseState from './UseState';
import UseStateCount from './UseStateCount';
import ChangeText from './ChangeText';
import ChangeTextColor from './ChangeTextColor';
import SpreadOperator from './SpreadOperator';
import SpreadOperator2 from './SpreadOperator2';
import SpreadSimple from './SpreadSimple';
import Props from './Props';
import Ternary from './Ternary';
import UseEffect1 from './UseEffect1';
import AddDataIntoTable from './AddDataIntoTable';
import AddArray from './AddArray';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AddArray/>
    <AddDataIntoTable/>
    <Mapcarousel/>
    <MapTable/>
    <UseState/>
    <Array/>
    <ArrayMap/>
    <UseStateCount/>
    <ChangeText/>
    <ChangeTextColor/>
    <SpreadOperator/>
    <SpreadOperator2/>
    <SpreadSimple/>
    <Props/>
    <Ternary/>
    <UseEffect1/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
