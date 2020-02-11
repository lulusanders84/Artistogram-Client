import React, {useEffect} from 'react';
import './main.css';
import './forms.css';
import './hex-grid.css';
import {setFocalArtistName} from '../actions'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { spotifyAuth } from '../libs/spotify';

export function CreateArtistogram(props) {
  useEffect(() => {
    spotifyAuth();
  }, [spotifyAuth])
  const handleSetFocalArtist = (event) => {
    const artist = textInput.value;
    event.preventDefault();
    props.dispatch(setFocalArtistName(artist));
    props.history.push(`/artistogram`);
  }
  let textInput = React.createRef();

    return (
      <div id="create">
        <form onSubmit={event => handleSetFocalArtist(event)}>
          <fieldset>
            <legend>Enter your favourite musician or band</legend>
            <div>
              <input type="text" ref={input => textInput = input}/>
              <input id="create-button" type="submit" value="Create Artistogram" />
            </div>
          </fieldset>
        </form>
      </div>
    )
}

export default withRouter(connect()(CreateArtistogram));
