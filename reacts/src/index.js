import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Clock(propes){
    return(
        <div>
            <span>现在是</span>
            <div>{propes.data.toLocaleTimeString()}</div>
        </div>
    )
}
function tick(){
    ReactDOM.render(
        <Clock data={new Date()}/>,
        document.getElementById('root')
    )
}
setInterval(tick,1000)
reportWebVitals();
