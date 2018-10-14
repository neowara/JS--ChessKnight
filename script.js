function horseKnight(cell) {
    var possibleMoves = [];
    var letters = ["a","b","c","d","e","f","g","h"];
    var cellX = letters.indexOf(cell[0]) + 1; // this will give us the X position
    var cellY = parseInt(cell[1]); //this will give us the Y position

    //this will find all possible X positions
    var cellXpositions = [
        cellX + 2,
        cellX - 2,
        cellX - 1,
        cellX + 1
    ].filter(function(cellPosition){
        return (cellPosition > 0 && cellPosition < 9);
    });

    //this will find all possible Y positions 
    var cellYpositions = [
        cellY + 2,
        cellY - 1,
        cellY - 1,
        cellY + 1
    ].filter(function(cellPosition){
        return (cellPosition > 0 && cellPosition < 9);
    });
    
}