import React from 'react';
import {shallow} from 'enzyme';

import { ArtistogramIcon } from '../components/artistogram-icon';
import { setFocalArtistName, buildArtistogramArtists } from '../actions';

it('Renders without crashing', () => {
    shallow(<ArtistogramIcon />);
});

it('Dispatches setFocalArtist from artistogramIcon', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(
            <ArtistogramIcon dispatch={dispatch} />
        );
        const instance = wrapper.instance();
        const artist = 'oasis';
        instance.handleSetFocalArtist(artist);
        expect(dispatch).toHaveBeenCalledWith(setFocalArtistName(artist));
    });
