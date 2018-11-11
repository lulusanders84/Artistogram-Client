import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './components/landing-page';
import ArtistogramPage from './components/artistogram-page';
import LogIn from './components/log-in';
import SignUp from './components/sign-up';

import './components/main.css';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <main>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/artistogram/" component={ArtistogramPage} />
                    <Route exact path="/login/" component={LogIn} />
                    <Route exact path="/signup/" component={SignUp} />
                </main>
            </div>
        </Router>
    );
}
