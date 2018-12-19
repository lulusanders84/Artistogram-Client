import React from 'react';
import {shallow} from 'enzyme';

import { LoggedIn } from '../components/logged-in';

it('renders without crashing', () => {
    shallow(<LoggedIn loggedIn={true} />);
  });
