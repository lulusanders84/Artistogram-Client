import React from 'react';
import {shallow} from 'enzyme';

import { SignUp } from '../components/sign-up';

it('renders without crashing', () => {
    shallow(<SignUp errorMsg='error message' />);
  });
