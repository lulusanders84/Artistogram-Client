import React from 'react';
import {shallow} from 'enzyme';

import { Artistogram } from '../components/artistogram';
import { buildArtistogramArtists, fetchAndSetFocalArtistInfo } from '../actions';

it('Renders without crashing', () => {
  const dispatch = jest.fn();
    shallow(<Artistogram focalArtist={{name: 'oasis'}} dispatch={dispatch}/>);
});

// it('Dispatches buildArtistogramArtists from Artistogram', () => {
//   const dispatch = jest.fn();
//   const artist = 'oasis';
//   const wrapper = shallow(
//       <Artistogram focalArtist={artist} dispatch={dispatch} />
//   );
//   const instance = wrapper.instance();
//   instance.componentDidMount();
//   expect(dispatch).toHaveBeenCalledWith(buildArtistogramArtists());
// });
