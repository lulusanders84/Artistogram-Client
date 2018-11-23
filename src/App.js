import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './components/landing-page';
import ArtistogramPage from './components/artistogram-page';
import Dashboard from './components/dashboard';
import LogIn from './components/log-in';
import SignUp from './components/sign-up';
import PlaylistPage from './components/playlist-page';

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
                </main>
            </div>
        </Router>
    );
}
