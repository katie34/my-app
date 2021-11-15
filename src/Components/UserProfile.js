import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div className = "container d-flex justify-content-center align-items-center">
          <div>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <Link className ="btn btn-danger"  to="/">Home</Link>
          </div>
        </div>
    );
  }
}

export default UserProfile;