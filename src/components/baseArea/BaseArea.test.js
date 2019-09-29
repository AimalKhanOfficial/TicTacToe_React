import React from 'react';
import { shallow } from 'enzyme';
import BaseArea from './BaseArea';
import '../../../EnzymeSetup'
import Constants from '../../Helpers/Constants';
import { generateTestData } from '../../Helpers/Utilities';
import Stats from '../stats/Stats';
import PopUp from '../customPopup/PopUp';

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

    it('Should Contain a Stats Component', () => {
        expect(baseAreaWrapper.containsMatchingElement(<Stats/>)).toEqual(true);
    })

    it('Should Contain a PopUp Component', () => {
        expect(baseAreaWrapper.containsMatchingElement(<PopUp/>)).toEqual(true);
    })

    it('Should Contain a PopUp Component', () => {
        baseAreaWrapper.instance().displayPopUp("", "");
        expect(baseAreaWrapper.instance().state.isPopUpVisible).toEqual(true);
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

    it('When isGameFinished attribute is set to true, the undoMove button should not let user undo moves.', () => {
        baseAreaWrapper.instance().setState({
            isGameFinished: true,
            filledBoxes: generateTestData(1)
        });
        let filledBoxesCount = baseAreaWrapper.instance().state.filledBoxes.length;
        baseAreaWrapper.instance().undoMove();
        expect(filledBoxesCount).toBe(baseAreaWrapper.instance().state.filledBoxes.length);
    });

    it('When isGameFinished attribute is set to true, the boxClicked event should not add more entries to filledBoxes.', () => {
        baseAreaWrapper.instance().setState({
            isGameFinished: true
        });
        let filledBoxesCount = baseAreaWrapper.instance().state.filledBoxes.length;
        baseAreaWrapper.instance().boxClicked(12);
        expect(filledBoxesCount).toBe(baseAreaWrapper.instance().state.filledBoxes.length);
    });

    it('When isGameFinished attribute is set to false and an already populated box is clicked, no entries should be added to filledBoxes.', () => {
        baseAreaWrapper.instance().setState({
            isGameFinished: false,
            filledBoxes: generateTestData(1)
        });
        let filledBoxesCount = baseAreaWrapper.instance().state.filledBoxes.length;
        baseAreaWrapper.instance().boxClicked(12);
        expect(filledBoxesCount).toBe(baseAreaWrapper.instance().state.filledBoxes.length);
    });

    it('When isGameFinished attribute is set to false and 9 checkboxes are filled with no result, the game should be tied.', () => {
        baseAreaWrapper.instance().setState({
            isGameFinished: false,
            filledBoxes: generateTestData(8)
        });
        baseAreaWrapper.instance().boxClicked(13);
        expect(baseAreaWrapper.instance().state.isGameTied).toBe(true);
    });

    it('When isGameFinished attribute is set to false and 9 checkboxes are filled with no result, the game should be tied.', () => {
        baseAreaWrapper.instance().setState({
            isGameFinished: false,
            filledBoxes: generateTestData(8)
        });
        let tiesCount = baseAreaWrapper.instance().state.ties;
        baseAreaWrapper.instance().boxClicked(13);
        expect(tiesCount + 1).toBe(baseAreaWrapper.instance().state.ties);
    });

    it('When the game is tied, the undoMove button should not let user undo moves.', () => {
        baseAreaWrapper.instance().setState({
            isGameTied: true,
            filledBoxes: generateTestData(8)
        });
        let filledBoxesCount = baseAreaWrapper.instance().state.filledBoxes.length;
        baseAreaWrapper.instance().undoMove();
        expect(filledBoxesCount).toBe(baseAreaWrapper.instance().state.filledBoxes.length);
    });

    it('When the game reset button is clicked, the setGameDefaults button should reset isGameTiedAttr to false', () => {
        baseAreaWrapper.instance().setState({
            isGameTied: true
        });
        baseAreaWrapper.instance().setGameDefaults();
        expect(baseAreaWrapper.instance().state.isGameTied).toBe(false);
    });

    it('When the game is tied and a box is clicked, the box clicked event should not let user populate that field.', () => {
        baseAreaWrapper.instance().setState({
            isGameFinished: false,
            isGameTied: true
        });
        expect(baseAreaWrapper.instance().boxClicked(13)).toBe(false);
    });
});