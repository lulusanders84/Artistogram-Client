import React from 'react';
import {shallow} from 'enzyme';

import { LoggedIn } from '../components/logged-in';

it('renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<LoggedIn loggedIn={true} dispatch={dispatch} />);
  });
