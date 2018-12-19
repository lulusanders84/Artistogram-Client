import React from 'react';
import {shallow} from 'enzyme';

import { LogIn } from '../components/log-in';

it('renders without crashing', () => {
    const dispatch = jest.fn();
    const history = jest.fn();
    shallow(<LogIn dispatch={dispatch} history={history} errorMsg='error message' />);
  });
