import React from 'react';
import {shallow} from 'enzyme';

import LandingPage from '../components/landing-page';

it('renders without crashing', () => {
    shallow(<LandingPage />);
  });
