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

IDS = {
    MAIN: 'grid',
    ALIVE: 'alive',
    SCORE: 'score',
    TURNS: 'turns'
}

var SCORE = 0;
var TURNS = 0;
var ALIVE = true;

document.getElementById(IDS.MAIN).appendChild(generateSnakeTable());
var STATE = new State();
var game = new SnakeGame();
dispatchGameStatus(IDS.ALIVE, 'Yes');
dispatchGameStatus(IDS.SCORE, SCORE);





document.addEventListener("keydown", function (event) {

    direction = directionFromKey(event.key);
    if (!isNull(direction)) {
        game.handle_direction_change(direction);
    }

});