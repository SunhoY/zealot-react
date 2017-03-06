import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let query = window.location.search.slice(1);
let queryMap = {};
query.split("&").map((value)=>{
    let keyValue = value.split("=");
    queryMap[keyValue[0]] = keyValue[1];

    return null;
});

ReactDOM.render(
  <App percentage={queryMap.score} nickName={queryMap.nickName} />,
  document.getElementById('root')
);
