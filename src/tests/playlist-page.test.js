import React from 'react';
import {shallow} from 'enzyme';

import { PlaylistPage } from '../components/playlist-page';

it('renders without crashing', () => {
  const dispatch = jest.fn();
    shallow(<PlaylistPage dispatch={dispatch} focalArtist={{name: "oasis"}}/>);
  });
