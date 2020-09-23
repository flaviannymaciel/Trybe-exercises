import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props.user;
    if (username !== 'joão' || password !== '1234') {
      // <alert>Access Denied</alert>
      return <Redirect to="/" />
    }
    return (
      <div>
        <p>Welcome {username}</p>
      </div>
    );
  }
}

export default StrictAccess;
