import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import AccountBalance from './AccountBalance';
    
class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27
    }
  } 

  render() {
    return (
      <Router>
        <div className="App">
          Hello, World!
        </div>
      </Router>
    );
  }
}
//export default App;

// src/components/Home.js
class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://i.picsum.photos/id/408/201/201.jpg?hmac=G2DODrvjG9jMtGHJh--DOFmtsQBExiUgINpVR0ARad8" alt="bank"/>
          <h1>Bank of React</h1>
        </div>
    );
  }
}
export default Home;

class AccountBalance extends Component {
  render() {
    return (
      <div>
        Balance: {this.props.accountBalance}
      </div>
    )
  }
}

export default AccountBalance;

render (
  <Router>
    <Switch>
      <Route exact path="/" component={<Home accountBalance={this.state.accountBalance}/>}/>
    </Switch>
  </Router>
)

