import React from 'react';
import {shallow} from 'enzyme';

import ListItem from '../components/list-item';

it('renders without crashing', () => {
    shallow(<ListItem artistName="oasis" created=" "/>);
  });
