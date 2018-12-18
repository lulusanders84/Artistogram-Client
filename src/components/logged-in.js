import React  from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class LoggedIn extends React.Component {
  render() {
    const inOrOut = this.props.loggedIn ? "out":"in";
    const url = this.props.loggedIn ? "/":"/login";
    return (
      <Link to={url} className="nav-bar-link"><li>log{inOrOut}</li></Link>
    )
  }
}

const mapStateToProps = (state, props) => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(LoggedIn);
