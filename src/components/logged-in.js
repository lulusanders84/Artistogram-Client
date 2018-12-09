import React, { Component } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class LoggedIn extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const inOrOut = this.props.loggedIn ? "out":"in";
    const url = this.props.loggedIn ? "/logout":"/login";
    return (
      <li><Link to={url}  className="nav-bar-link">log{inOrOut}</Link></li>
    )
  }
}

const mapStateToProps = (state, props) => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps, store)(LoggedIn);
