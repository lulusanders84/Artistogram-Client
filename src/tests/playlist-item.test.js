import React from 'react';
import {shallow} from 'enzyme';
import uuid from 'uuid/v4';
import PlaylistItem from '../components/playlist-item';

it('renders without crashing', () => {
    shallow(<PlaylistItem name='Wonderwall'
    artist='oasis'
    duration='2:45'
    key={uuid()} />);
  });
