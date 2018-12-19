import React from 'react';
import {shallow} from 'enzyme';

import CreateArtistogramPage from '../components/create-artistogram-page';

it('Renders without crashing', () => {
    shallow(<CreateArtistogramPage />);
});
