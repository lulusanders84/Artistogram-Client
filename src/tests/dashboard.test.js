import React from 'react';
import {shallow} from 'enzyme';

import { Dashboard } from '../components/dashboard';

it('Renders without crashing', () => {
  const dispatch = jest.fn();
  const history = jest.fn();
    shallow(<Dashboard history={history} dispatch={dispatch}/>);
});
