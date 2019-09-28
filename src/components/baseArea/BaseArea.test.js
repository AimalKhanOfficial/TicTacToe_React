import React from 'react';
import { shallow } from 'enzyme';
import BaseArea from './BaseArea';
import '../../../EnzymeSetup'

it('Base Area should have some text', () => {
    let baseAreaWrapper = shallow(<BaseArea baseAreaCells={[1, 2, 3]}/>);
    expect(baseAreaWrapper.text().length).toBeGreaterThan(0);
})

it('Base Area prop with undefined props should not fail', () => {
    expect(() => shallow(<BaseArea />)).not.toThrowError();
})