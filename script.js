function horseKnight(cell) {
    var possibleMoves = [];
    var letters = ["A","B","C","D","E","F","G","H"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
    var cellX = letters.indexOf(cell[0]); // this will give us the X position
    var cellY = numbers.indexOf(cell[1]); //this will give us the Y position

    //this will find all possible X positions
    var cellXpositions = [
        cellX + 2,
        cellX - 2,
        cellX + 1,
        cellX - 1
    ].filter(function(cellPosition){
        return (cellPosition > 0 && cellPosition < 9);
    });

    //this will find all possible Y positions 
    var cellYpositions = [
        cellY + 2,
        cellY - 2,
        cellY + 1,
        cellY - 1
    ].filter(function(cellPosition){
        return (cellPosition > 0 && cellPosition < 9);
    });
    
    // this will go through every possible combination of X and Y positions
    // and push it to our PossibleMoves array, if it isn't there already
    //then it will print the output in console.log 
    
    for (var i = 0; i < cellXpositions.length; i++) {
        for (var j = 0; j < cellYpositions.length; j++) {
            if (Math.abs(cellX - cellXpositions[i]) + Math.abs(cellY - cellYpositions[j]) === 3) {
                console.log('These are the possible moves: ' + letters[cellXpositions[i]], numbers[cellYpositions[j]]);
                if (!possibleMoves.includes([cellXpositions[i], cellYpositions[j]])) {
                    possibleMoves.push([cellXpositions[i], cellYpositions[j]]);
                }
            }
        }
    }
    return possibleMoves.length;
}