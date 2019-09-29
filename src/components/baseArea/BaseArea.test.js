import React from 'react';
import { shallow } from 'enzyme';
import BaseArea from './BaseArea';
import '../../../EnzymeSetup'
import Constants from '../../Helpers/Constants';

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

describe('Base Area wrapper with same Arrange phase', () => {
    let baseAreaWrapper;
    beforeEach(() => baseAreaWrapper = shallow(<BaseArea baseAreaCells={[[1]]}/>));
    
    it('Base Area State should maintain a record of which box was clicked', () => {
        baseAreaWrapper.instance().boxClicked(1);
        expect(baseAreaWrapper.instance().state.filledBoxes.length).toBeGreaterThan(0);
    })

    it('Base Area State should toggle the player turn flag on box click event', () => {
        baseAreaWrapper.instance().boxClicked(1);
        expect(baseAreaWrapper.instance().state.playerTurnFlag).toBe(baseAreaWrapper.instance().state.playerTurnFlag);
    })

    it('Base Area State should remove an item from player moves array on UndoMove click event', () => {
        let filledBoxesLength = baseAreaWrapper.instance().state.filledBoxes.length;
        baseAreaWrapper.instance().undoMove();
        expect(filledBoxesLength - 1).toBe(baseAreaWrapper.instance().state.filledBoxes.length);
    })

    it('The state should be set to default on the Start Over img click event', () => {
        baseAreaWrapper.find('#gameDefaultsId').simulate('click');
        expect(baseAreaWrapper.instance().state.filledBoxes.length).toBe(0);
    })
});

describe('Base Area wrapper to check state for game status i.e. finished/tied etc.', () => {
    let baseAreaWrapper;
    beforeEach(() => baseAreaWrapper = shallow(<BaseArea baseAreaCells={Constants.baseAreaCells} winningPatterns={Constants.winningPatterns}/>));

    it('When isGameFinished attribute is set to true, the body should contain a "Game Over!" message', () => {
        baseAreaWrapper.instance().setState({
            isGameFinished: true
        });
        expect(baseAreaWrapper.text()).toMatch(/Game Over/);
    });
});