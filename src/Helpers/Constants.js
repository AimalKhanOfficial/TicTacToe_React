export default class Constants {
    static baseAreaCells = [
        [11, 21, 31], [12, 22, 32], [13, 23, 33]
    ];

    static winningPatterns = [
        [11, 21, 31], [12, 22, 32], [13, 23, 33],
        [11, 12, 13], [21, 22, 23], [31, 32, 33],
        [11, 22, 33], [31, 22, 13]
    ];

    static emojiGifTypes = {
        Hurrah: "/imgs/hurrah.gif",
        GameTied: "/imgs/tied.gif",
        ChooseAnotherBox: "/imgs/thinking.gif",
        GameRefreshed: "/imgs/Whistle.gif"
    }
}