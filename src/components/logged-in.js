import React  from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoggedIn, setUser } from '../actions';

export class LoggedIn extends React.Component {
    handleToggleLoggedIn(event){
      if(this.props.loggedIn){
        this.props.dispatch(setLoggedIn(false));
        this.props.dispatch(setUser({username: '', savedPlaylists: [], savedArtistograms: []}));
      }
    }
  render() {
    const inOrOut = this.props.loggedIn ? "out":"in";
    const url = this.props.loggedIn ? "/":"/login";
    return (
      <Link to={url} className="nav-bar-link"><li onClick={event => this.handleToggleLoggedIn(event)}>log{inOrOut}</li></Link>
    )
  }
}

const mapStateToProps = (state, props) => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(LoggedIn);
