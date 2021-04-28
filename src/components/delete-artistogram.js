import React, { useEffect, useState } from 'react';
import './main.css';
import './hex-grid.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { putArtistogram } from '../actions';

export function DeleteArtistogram(props) {
  const { pageTitle } = props
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    console.log(props)
    if(pageTitle.includes("Dashboard")) {
      setVisible(false)
    } else if(props.savedArtistograms && props.savedArtistograms.some(gram => gram.name === props.focalArtist.name)) {
      setVisible(true)
    }
  }, [pageTitle])
  function handleDeleteClick(e) {
    e.preventDefault();
    props.dispatch(putArtistogram(props.focalArtist, props.history))
  }
  return (
    <div>
      {visible
        ? <button onClick={event => handleDeleteClick(event)}>Delete</button>
        : null}
    </div>
  )
}

const mapStateToProps = (state) => ({
  focalArtist: state.focalArtist,
  savedArtistograms: state.savedArtistograms
});

export default withRouter(connect(mapStateToProps)(DeleteArtistogram))