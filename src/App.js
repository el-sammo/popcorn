import React, { Component } from 'react';
import logo from './logo.gif';
import diagMsg from './new_flavors.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
      		<div className="col-md-8 col-md-offset-2 offset15">
      			<div className="pull-right">
      				<span>
      					Already Have an Account? <a href="" className="no-deco">Sign In</a> to Access Your Account
      				</span>
      			</div>
      		</div>
        </div>
        <div className="App-body">
      		<div className="App-diag-msg">
      			<img src={diagMsg} className="App-diag-msg" alt="Check Out Our New Flavors!" />
     			</div>
     			<div className="col-md-8 col-md-offset-2">
     				<div className="row">
     					<div className="col-md-12 offset15">
      					<img src={logo} className="pull-left" alt="Rebecca's Gourmet Popcorn" />
     					</div>
     				</div>
     			</div>
        </div>
      </div>
    );
  }
}

export default App;
