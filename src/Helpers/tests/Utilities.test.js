import checkResult from '../Utilities';
import Constants from '../Constants';

it("passing valid winning patterns and player moves to checkResult method should return true", () => {
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