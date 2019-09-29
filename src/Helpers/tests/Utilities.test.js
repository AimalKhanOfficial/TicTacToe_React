import checkResult from '../Utilities';
import Constants from '../Constants';

it("passing valid winning patterns and playerMoves to checkResult method should return true", () => {
    expect(checkResult([
        {
            cellId: 11,
            playerFlag: true
        },
        {
            cellId: 12,
            playerFlag: true
        },
        {
            cellId: 13,
            playerFlag: true
        }
    ], true, Constants.winningPatterns)).toBe(true);
});

it("passing undefined winning patterns to checkResult method should return false", () => {
    expect(checkResult([
        {
            cellId: 11,
            playerFlag: true
        },
        {
            cellId: 12,
            playerFlag: true
        },
        {
            cellId: 13,
            playerFlag: true
        }
    ], true, undefined)).toBe(false);
});

it("passing undefined playerMoves to checkResult method should return false", () => {
    expect(checkResult(undefined, true, Constants.winningPatterns)).toBe(false);
});