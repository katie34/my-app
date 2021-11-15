import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import AccountBalance from './AccountBalance';
import UserProfile from './Components/UserProfile'
import {Link} from 'react-router-dom';
import LogIn from './Components/Login'
    
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

  onChnage = (newName) => {this.setState({accountBalance: newName });}

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
//export default App;
// src/components/Home.js
//export default Home;
//export default AccountBalance;

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () =>(
      <UserProfile userName = {this.state.currentUser.userName} memberSince = {this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)

  return (
    <Router>
      <Switch> //is it div or switch?
        <Route exact path="/" component={<Home accountBalance={this.state.accountBalance}/>}/>
        <Route exact path="/" render={HomeComponent}/>
        <Route exact path='/userProfile' render={UserProfileComponent} />
        <Route exact path="/login" render={LogInComponent}/>
      </Switch>
    </Router>
  );
}

export default App;
