import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="container">
            <div className = "d-flex justify-content-center align-items-center">
            </div>
            <div className = "d-flex">
                <img src="https://static.thenounproject.com/png/91988-200.png" alt="bank"
                style={{ width: 50, height: 50 }}/>
                <h1>Bank of React</h1>
                </div>
                <div className = "mt-2">
                <Link className ="btn btn-danger" to="/login">Login</Link>
                <Link className ="btn btn-danger ml-1" to="/userProfile">User Profile</Link>
                <Link className ="btn btn-danger ml-1" to="/Debits">Debits</Link>
                <Link className ="btn btn-danger ml-1" to="/Credits">Credits</Link>
                </div>
                <AccountBalance accountBalance = {this.props.accountBalance}/>
                </div>
        );
    }
}

export default Home;