import React from 'react';
import { shallow } from 'enzyme';
import BaseArea from './BaseArea';
import '../../../EnzymeSetup'

it('Base Area should have some text', () => {
    let baseAreaWrapper = shallow(<BaseArea/>);
    expect(baseAreaWrapper.text().length).toBeGreaterThan(0);
})