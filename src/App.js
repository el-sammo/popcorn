import React, { Component } from 'react';
import diagMsg from './new_flavors.gif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
      		<div className="col-md-8 col-md-offset-2 showBorders">
      		</div>
        </div>
        <div className="App-body">
      		<div className="App-diag-msg">
      			<img src={diagMsg} className="App-diag-msg" alt="Check Out Our New Flavors!" />
     			</div>
        </div>
      </div>
    );
  }
}

export default App;
