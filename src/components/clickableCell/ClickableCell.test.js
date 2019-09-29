import React from 'react';
import { shallow } from 'enzyme';
import ClickableCell from './ClickableCell';
import '../../../EnzymeSetup'

it('Clickable Cell should have some text', () => {
    let clickableCellWrapper = shallow(<ClickableCell cellId={1} boxesToFill={[{cellId: 1, playerFlag: true}]}/>);
    expect(clickableCellWrapper.text().length).toBeGreaterThan(0);
})

it('Clickable Cell onClick should respond to click event', () => {
    const fnClick = jest.fn();
    let clickableCellWrapper = shallow(<ClickableCell cellId={1} onBoxClick={fnClick}/>);
    clickableCellWrapper.find('button').simulate('click');
    expect(fnClick).toHaveBeenCalled();
})