import React from 'react';
import {shallow} from 'enzyme';
import { decades, decadeWords } from '../components/dataStore';
import uuid from 'uuid/v4';
import { Decade } from '../components/decade';

it('Renders without crashing', () => {
  const dispatch = jest.fn();
  const decade = [];
    shallow(<Decade
      title={decade}
      class='decade fifties'
      fiftiesArtists={[]}
      key={uuid()}
      decade='fifties'
    />);
});
