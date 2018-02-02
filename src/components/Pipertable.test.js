import React from 'react';
import {shallow} from 'enzyme';

import Pipertable from './Pipertable';

it('renders basic componernt', () => {
	const wrapper = shallow(<Pipertable />);

	expect(wrapper.find('#pipertable')).toHaveLength(1);
});
