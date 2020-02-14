import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/landing-page';
import CreateArtistogramPage from './components/create-artistogram-page';
import ArtistogramPage from './components/artistogram-page';
import Dashboard from './components/dashboard';
import LogIn from './components/log-in';
import SignUp from './components/sign-up';
import PlaylistPage from './components/playlist-page';
import CreateArtistogram from './components/create-artistogram';
import SavePlaylist from './components/save-playlist';
import SaveArtistogram from './components/save-artistogram';

import './components/main.css';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/create-artistogram/" component={CreateArtistogramPage} />
                    <Route exact path="/artistogram/" component={ArtistogramPage} />
                    <Route exact path="/dashboard/" component={Dashboard} />
                    <Route exact path="/login/" component={LogIn} />
                    <Route exact path="/signup/" component={SignUp} />
                    <Route exact path="/playlist/" component={PlaylistPage} />
                    <Route exact path="/create/" component={CreateArtistogram} />
                    <Route exact path="/save-playlist/" component={SavePlaylist} />
                    <Route exact path="/save-artistogram/" component={SaveArtistogram} />
            </div>
        </Router>
    );
}
