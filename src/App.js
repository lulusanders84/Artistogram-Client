import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './components/landing-page';
import ArtistogramPage from './components/artistogram-page';

import './components/main.css';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <main>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/artistogram/" component={ArtistogramPage} />
                </main>
            </div>
        </Router>
    );
}
