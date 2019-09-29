import React from 'react';
import Stats from './Stats';
import { shallow } from 'enzyme';
import '../../../EnzymeSetup';

describe('Base Area wrapper to check state for game status i.e. finished/tied etc.', () => {
    let statsWrapper;
    let testData = 1;
    beforeEach(() => statsWrapper = shallow(<Stats ties={testData} playerOneWins={testData} playerTwoWins={testData}/>));

    it('Stats should contain ties count when provided', () => {
        expect(statsWrapper.text()).toMatch('Ties: ' + testData.toString())
    })
    
    it('Stats should contains player 1 wins when provided', () => {
        expect(statsWrapper.text()).toMatch('Player One: ' + testData.toString())
    })
    
    it('Stats should contains player 2 wins when provided', () => {
        expect(statsWrapper.text()).toMatch('Player Two: ' + testData.toString())
    })
});
