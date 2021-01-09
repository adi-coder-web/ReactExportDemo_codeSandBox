import React from "react";
import ReactDOM from "react-dom";
// import {Kiran,prakash} from './App';
import App from './App'
 import * as data from './App'

const rootElement = document.getElementById("root");
ReactDOM.render(
<>
  <ol>
    <li><App /></li>
    <li>{data.Kiran()}</li>
    <li>{data.prakash()}</li>
</ol>
   </>,
 document.getElementById('root')
);
