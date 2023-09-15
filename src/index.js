import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Lifecycle from './Components/Lifecycle';
import Login from './Components/Form/Login';
// import HelloComponent from './Components/HelloComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Function dibawah tidak menghasilkan apapun
function HelloComponent() {
  return HelloComponent
}

//Class dibawah hampir memiliki fungsi yang sama dengan function stateless
class StateFullComponent extends React.Component {
  render(){
    return<p>StateFullComponent</p>
  }
}


root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
