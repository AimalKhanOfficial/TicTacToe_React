import React from 'react';
import { shallow } from 'enzyme';
import ClickableCell from './ClickableCell';
import '../../../EnzymeSetup'

it('Clickable Cell should have some text', () => {
    let baseAreaWrapper = shallow(<ClickableCell cellId={1}/>);
    expect(baseAreaWrapper.text().length).toBeGreaterThan(0);
})