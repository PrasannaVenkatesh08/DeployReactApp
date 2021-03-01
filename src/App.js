import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Clock from './components/Clock';


export default class App extends React.Component {
  
  variable = "prasanna" ;

  render() {
    return (
    <div >
      <Clock />
    </div>
  );
}
}
