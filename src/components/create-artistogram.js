import React from 'react';
import './main.css';
import './forms.css';
import './hex-grid.css';
import {setFocalArtistName, setLoading} from '../actions'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Spotify } from '../libs/spotify';

export class CreateArtistogram extends React.Component {

  componentDidMount() {
    this.props.dispatch(setLoading(true))
    Spotify.auth().then(() => {
      this.props.dispatch(setLoading(false))
    });
  };
  handleSetFocalArtist(event) {
    const artist = this.textInput.value;
    event.preventDefault();
    this.props.dispatch(setFocalArtistName(artist));
    this.props.history.push(`/artistogram`);
  }
  textInput = React.createRef();
  render() {
    return (
      <div id="create">
        <form onSubmit={event => this.handleSetFocalArtist(event)}>
          <fieldset>
            <legend>Enter your favourite musician or band</legend>
            <div>
              <input type="text" ref={input => this.textInput = input}/>
              {this.props.loading 
                ? <input id="create-button" type="submit" value="Loading..." disabled />
                : <input id="create-button" type="submit" value="Create Artistogram" />
              }
            </div>
          </fieldset>
        </form>
      </div>
    )    
  }

}

const mapStateToProps = (state) => ({
  loading: state.loading
});

export default withRouter(connect(mapStateToProps)(CreateArtistogram));
