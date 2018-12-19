import React from 'react';
import {shallow} from 'enzyme';

import { NavBar } from '../components/nav-bar';

it('renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<NavBar dispatch={dispatch} links={[]} title="title" page={true} />);
  });
