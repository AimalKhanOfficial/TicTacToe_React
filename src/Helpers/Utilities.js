export default function checkResult(allMovesParam, playerParam, winningPatterns){
    if(!allMovesParam || !winningPatterns){
        return false;
    }
    let playerMoves = []
    let allMoves = [...allMovesParam];
    allMoves.reverse().filter(singleMove => singleMove.playerFlag === playerParam).map(singleMove => playerMoves.push(singleMove.cellId)); 
    playerMoves = playerMoves.sort((a, b) => a - b);
    let resultCalculated = false;
    let patternItemExist = true;
    winningPatterns.forEach(winningPattern => {
        winningPattern = winningPattern.sort((a, b) => a - b);
        patternItemExist = true;
        winningPattern.forEach(patternItem => {
            if (!playerMoves.toString().includes(patternItem)) {
                patternItemExist = false;
                return;
            }
        });
        if(patternItemExist){
            resultCalculated = true;
        }
    });
    return resultCalculated ? true : false
}
