import React from 'react';
import {shallow} from 'enzyme';

import { List } from '../components/list';

it('renders without crashing', () => {
    shallow(<List listType="playlist" savedPlaylists={[]} savedArtistograms={[]}/>);
  });
