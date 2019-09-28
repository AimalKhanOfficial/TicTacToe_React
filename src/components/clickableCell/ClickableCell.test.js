import React from 'react';
import { shallow } from 'enzyme';
import ClickableCell from './ClickableCell';
import '../../../EnzymeSetup'

it('Clickable Cell should have some text', () => {
    let baseAreaWrapper = shallow(<ClickableCell cellId={1}/>);
    expect(baseAreaWrapper.text().length).toBeGreaterThan(0);
})

it('Clickable Cell onClick should respond to click event', () => {
    const fnClick = jest.fn();
    let baseAreaWrapper = shallow(<ClickableCell cellId={1} onBoxClick={fnClick}/>);
    baseAreaWrapper.find('button').simulate('click');
    expect(fnClick).toHaveBeenCalled();
})