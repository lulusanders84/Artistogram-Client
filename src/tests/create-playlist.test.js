import React from 'react';
import {shallow} from 'enzyme';

import { CreatePlaylist } from '../components/create-playlist';


it('Renders without crashing', () => {
  const dispatch = jest.fn();
  const history = jest.fn();
    shallow(<CreatePlaylist history={history} dispatch={dispatch}/>);
});
