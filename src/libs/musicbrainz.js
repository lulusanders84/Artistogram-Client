import 
  {  
    setMbRecordingQueryRequestUrl,
    setMbRecordingUrl
  } from '../api-request-urls';

const buildPlaylistData = (playlist) => {
  const playlistStr = playlist.map(track => {
    if(track.mbid) {
      return "rid:" + encodeURI(track.mbid);
    } else return ""
    
  }).join("%20");
  const playlistObj = {};
  playlist.forEach(track => {
    if(track.mbid) {
      playlistObj[track.mbid] = 0;  
    } else playlistObj[track.name] = 0;
  })
  return { playlistStr, playlistObj,}
}

const fetchMbDataFromApi = (API_URL, source) => {
  console.log("fetching MB data from", source)
  return fetch(API_URL)
  .then(res => {
    return res.json()
  })  
}

const trackRecordingIdsOnPlaylistObj = (recordings, playlistObj) => {
  recordings.forEach(recording => {
    const { id, title: name, "artist-credit": artistCredit, releases } = recording;
    const artist = artistCredit[0].name;
    const year = releases.reduce((acc, release) => {
      if(release.date) {
        const year = parseInt(release.date.substring(0, 4));
        acc.push(year)
      }
      return acc;
    }, []) 
    const track = {
      id,
      name,
      artist,
      year,
    }
    playlistObj[recording.id] = track;
  })
  return playlistObj;
}

const findUnfoundTracks = (playlist, playlistObj) => {
  return Object.keys(playlistObj).reduce((acc, key) => {
      if(playlistObj[key] === 0) {
        const track = playlist.find(track => {
          return track.mbid === key;
        })
        if(track) {
          acc.push(track)
        }  
      }
      return acc;
    }, [])
}

const fetchMbidsOfUnfoundTracks = (unfoundTracks) => {
  return Promise.all(unfoundTracks.map(track => {
    return fetch(setMbRecordingUrl(track.mbid))
    .then(res => {
      return res.json()
    })
    .then(res => {
      track.mbid = res.id;
      return track;
    })
  }))
}

const fetchMbDataAndReturnUnfoundTracksAndPlaylistObj = (playlist, playlistStr, playlistObj) => {
  return fetchMbDataFromApi(setMbRecordingQueryRequestUrl(playlistStr), "recording search endpoint").then(res => {
    
    playlistObj = trackRecordingIdsOnPlaylistObj(res.recordings, playlistObj);
    
    const unfoundTracks = findUnfoundTracks(playlist, playlistObj);
    
    return fetchMbidsOfUnfoundTracks(unfoundTracks).then(res => {
      console.log(res);
      return {
        unfoundTracks: res,
        playlistObj,
      }
    })
  })
}

export const fetchTracksFromMb = (playlist) => {
  let { playlistStr, playlistObj } = buildPlaylistData(playlist);
  
  fetchMbDataAndReturnUnfoundTracksAndPlaylistObj(playlist, playlistStr, playlistObj).then(res => {
      const { unfoundTracks, playlistObj } = res;
      const { playlistStr } = buildPlaylistData(unfoundTracks);
      fetchMbDataAndReturnUnfoundTracksAndPlaylistObj(playlist, playlistStr, playlistObj).then(res => {
        console.log(res)
      })
    })
}