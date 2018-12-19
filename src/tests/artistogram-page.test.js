import React from 'react';
import {shallow} from 'enzyme';

import { ArtistogramPage } from '../components/artistogram-page';
import { saveDestination } from '../actions';

it('Renders without crashing', () => {
  const dispatch = jest.fn();
    shallow(<ArtistogramPage focalArtist={{name: 'oasis'}} dispatch={dispatch}/>);
});

it('Dispatches saveDestination from ArtistogramPage', () => {
  const dispatch = jest.fn();
  const wrapper = shallow(
      <ArtistogramPage focalArtist='oasis' dispatch={dispatch} />
  );
  const instance = wrapper.instance();
  instance.componentDidMount();
  expect(dispatch).toHaveBeenCalledWith(saveDestination('/artistogram'));
});
