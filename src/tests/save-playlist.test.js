import React from 'react';
import {shallow} from 'enzyme';

import { SavePlaylist } from '../components/save-playlist';

it('renders without crashing', () => {
  const dispatch = jest.fn();
    shallow(<SavePlaylist dispatch={dispatch} loggedIn={true} focalArtist={{name: 'oasis'}} />);
  });
