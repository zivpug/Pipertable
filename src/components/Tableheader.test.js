import React from 'react';
import {shallow} from 'enzyme';

import Tableheader from "./Tableheader";

it('renders basic componernt', () => {
	let headers = ['first name', 'last name', 'address', 'dog name', 'test cell'];

	const wrapper = shallow(<Tableheader cell={2} headers={headers}/>);
	expect(wrapper.find('li')).toHaveLength(5);
});

it('Gives the right class to selected cell', () => {
	let headers = ['first name', 'last name', 'address', 'dog name', 'test cell'];

	const wrapper = shallow(<Tableheader cell={2} headers={headers}/>);
	expect(wrapper.find('li').at(2)).toHaveClassName('selectedHeader');
});

it('Raise user error if too many cells', () => {
	let headers = ['first name', 'last name', 'address', 'dog name', 'test cell'];

	const wrapper = shallow(<Tableheader cell={6} headers={headers}/>);
	expect(wrapper.find('.error')).toHaveLength(1);
});
