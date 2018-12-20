import React from 'react';
import {shallow} from 'enzyme';

import { PlaylistIcon } from '../components/playlist-icon';

it('renders without crashing', () => {
  const dispatch = jest.fn();
    shallow(<PlaylistIcon
      imageUrl="imageUrl"
      artistName="oasis"
      className="hexagon"
      linkType="playlist" 
      dispatch={dispatch}/>);
  });
