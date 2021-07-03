var NROWS = 40;
var NCOLS = 40;

CLASSES = {
    GRIDCELL: 'snakeGridCell',
    ISFOOD: 'isFood',
    ISSNAKE: 'isSnake',
    ISSNAKEBODY: 'isSnakeBody',
    ISSNAKEHEAD: 'isSnakeHead',
    ISROCK: 'isRock',
    VISITED: 'visited'
};


var ROCKCELLS = [];
var FOODCELLS = [];
var SCORE = 0;
var TURNS = 0;
var ALIVE = true;

function startingSnakeBody() {
    return ['1_1', '1_2', '1_3', '1_4', '1_5'];
}


document.getElementById('main').appendChild(generateSnakeTable());
snakeBodyCells = startingSnakeBody();
dispatchGameStatus('alive', 'Yes');
dispatchGameStatus('score', SCORE);
makeCellsSnakeBody(snakeBodyCells);

document.addEventListener("keydown", function (event) {

    direction = directionFromKey(event.key);
    if (!isNull(direction)) {
        TURNS++;

        snakeBodyCells = generateNewSnakeBody(snakeBodyCells, direction);
        if (isNull(snakeBodyCells)) {
            dispatchGameStatus('alive', 'Nope');
        }
        clearAllSnakeCells();
        makeCellsSnakeBody(snakeBodyCells);

        food_proposed_cell = pickCellForFood()
        if (!isNull(food_proposed_cell)) { FOODCELLS.push(food_proposed_cell); }
        clearAllFoodCells();
        makeCellsFood(FOODCELLS);
        rock_proposed_cell = pickCellForRock();
        if (!isNull(rock_proposed_cell)) {
            ROCKCELLS.push(rock_proposed_cell)
        }

        makeCellsRock([rock_proposed_cell]);
        growth = grownRocks();
        makeCellsRock(growth);
        growth.forEach(cell => { ROCKCELLS.push(cell) });

        dispatchGameStatus('score', snakeBodyCells.length);
        dispatchGameStatus('turns', TURNS);
    }

});