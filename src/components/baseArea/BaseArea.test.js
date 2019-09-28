import React from 'react';
import { shallow } from 'enzyme';
import BaseArea from './BaseArea';
import '../../../EnzymeSetup'

it('Base Area should have some text', () => {
    let baseAreaWrapper = shallow(<BaseArea baseAreaCells={[[1]]}/>);
    expect(baseAreaWrapper.text().length).toBeGreaterThan(0);
})

it('Base Area prop with undefined props should not fail', () => {
    expect(() => shallow(<BaseArea />)).not.toThrowError();
})

it('Base Area prop having a nested array with undefined should not Throw Error', () => {
    expect(() => shallow(<BaseArea baseAreaCells={[ undefined ]}/>)).not.toThrowError();
})

describe("Base Area wrapper with same Arrange phase", () => {
    let baseAreaWrapper;
    beforeEach(() => baseAreaWrapper = shallow(<BaseArea baseAreaCells={[[1]]}/>));
    
    it('Base Area State should maintain a record of which box was clicked', () => {
        baseAreaWrapper.instance().boxClicked(1);
        expect(baseAreaWrapper.instance().state.filledBoxes.length).toBeGreaterThan(0);
    })

    it('Base Area State should toggle the player turn flag on box click event', () => {
        baseAreaWrapper.instance().boxClicked(1);
        expect(baseAreaWrapper.instance().state.playerTurnFlag).toBe(!baseAreaWrapper.instance().state.playerTurnFlag);
    })
});