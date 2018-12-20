import React from 'react';
import {shallow} from 'enzyme';

import { CreateArtistogram } from '../components/create-artistogram';
import {setFocalArtistName} from '../actions'

it('Renders without crashing', () => {
  const dispatch = jest.fn();
  const history = jest.fn();
    shallow(<CreateArtistogram history={history} dispatch={dispatch}/>);
});
