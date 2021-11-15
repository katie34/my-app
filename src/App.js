import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import AccountBalance from './AccountBalance';
import UserProfile from './components/UserProfile';
    
class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      }
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
//export default Home;
//export default AccountBalance;

render() {

  const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
  const UserProfileComponent = () =>(
    <UserProfile userName = {this.state.currentUser.userName} memberSince = {this.state.currentUser.memberSince} />
  );

return (
  <Router>
    <Switch> //is it div or switch?
      <Route exact path="/" component={<Home accountBalance={this.state.accountBalance}/>}/>
      <Route exact path="/" render={HomeComponent}/>
      <Route exact path='/userProfile' render={UserProfileComponent} />
    </Switch>
  </Router>
);
}

export default App;
