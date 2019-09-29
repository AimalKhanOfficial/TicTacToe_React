import React from 'react';
import { shallow } from 'enzyme';
import PopUp from './PopUp';
import '../../../EnzymeSetup';

it('PopUp Component render should not throw an error', () => {
    expect(() => shallow(<PopUp />)).not.toThrowError();
})