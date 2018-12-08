import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './components/landing-page';
import ArtistogramPage from './components/artistogram-page';
import Dashboard from './components/dashboard';
import LogIn from './components/log-in';
import SignUp from './components/sign-up';
import PlaylistPage from './components/playlist-page';
import CreateArtistogram from './components/create-artistogram';
import SavePlaylist from './components/save-playlist';

import './components/main.css';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <main>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/artistogram/" component={ArtistogramPage} />
                    <Route exact path="/dashboard/" component={Dashboard} />
                    <Route exact path="/login/" component={LogIn} />
                    <Route exact path="/signup/" component={SignUp} />
                    <Route exact path="/playlist/" component={PlaylistPage} />
                    <Route exact path="/create/" component={CreateArtistogram} />
                    <Route exact path="/save-playlist/" component={SavePlaylist} />
                </main>
            </div>
        </Router>
    );
}
