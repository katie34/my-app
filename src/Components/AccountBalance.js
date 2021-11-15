
import React, { Component } from 'react'

class AccountBalance extends Component{
    render(){
        return (
           <div className="text-center">
               <h4>Balance: {this.props.accountBalance}</h4>
           </div>
        );
    }
}

export default AccountBalance;