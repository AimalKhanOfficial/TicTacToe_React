import React from 'react';
import Stats from './Stats';
import { shallow } from 'enzyme';
import '../../../EnzymeSetup';

describe('Stats component tests with valid props data.', () => {
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

describe('Stats component tests with no props provided.', () => {
    let statsWrapper;
    let resultingValue = 'X';
    beforeEach(() => statsWrapper = shallow(<Stats/>));

    it('Stats should not have ties count', () => {
        expect(statsWrapper.text()).toMatch('Ties: ' + resultingValue)
    })
    
    it('Stats should not have player 1 wins count', () => {
        expect(statsWrapper.text()).toMatch('Player One: ' + resultingValue)
    })
    
    it('Stats should not have player 2 wins count', () => {
        expect(statsWrapper.text()).toMatch('Player Two: ' + resultingValue)
    })
});
