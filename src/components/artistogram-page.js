import React from 'react';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import Artistogram from './artistogram';
import { connect } from 'react-redux';
import { saveDestination, setLoading} from '../actions';
import { spotifyAuth } from '../libs/spotify';

export class ArtistogramPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(saveDestination('/artistogram'));
    this.props.dispatch(setLoading(true));
    spotifyAuth();
  }
  render() {
    const links = ["sign up", "create new artistogram", "view playlist", "save artistogram"];
    const pageTitle = `${this.props.focalArtist.name}`;
    const loading = () => {
      if(this.props.loading) {
        return 'loading'
      } else {
        return 'loading inactive'
      }
    }
    return (
      <div>
        <header>
          <NavBar links={links} playlist='add' title={pageTitle} />
        </header>
        <div>
          <div className={loading()}><p>Loading...</p></div>
          <Artistogram />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
  loading: state.loading
});

export default connect(mapStateToProps)(ArtistogramPage);
