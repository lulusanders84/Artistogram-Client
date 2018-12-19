import React from 'react';
import {shallow} from 'enzyme';

import { SaveArtistogram } from '../components/save-artistogram';

it('renders without crashing', () => {
  const dispatch = jest.fn();
    shallow(<SaveArtistogram dispatch={dispatch} loggedIn={true} focalArtist={{name: 'oasis'}} />);
  });
