import React from 'react';
import {shallow} from 'enzyme';

import { Playlist } from '../components/playlist';

it('renders without crashing', () => {
    shallow(<Playlist playlist={[]} />);
  });
