
function isIdSnakeBody(id) {
    return document.getElementById(id).classList.contains(CLASSES.ISSNAKE) === true;
}


function makeCellsSnakeBody(cell_ids) {
    makeCellsClasses(cell_ids, [CLASSES.ISSNAKE, CLASSES.ISSNAKEBODY]);
    var head_cell = document.getElementById(cell_ids[cell_ids.length - 1]);
    head_cell.classList.remove(CLASSES.ISSNAKEBODY);
    head_cell.classList.add(CLASSES.ISSNAKEHEAD);
}

function clearAllSnakeCells() {
    clearCellsClasses([CLASSES.ISSNAKE, CLASSES.ISSNAKEBODY, CLASSES.ISSNAKEHEAD])
}

function isNewHeadValid(new_head_id) {

    if (isIdSnakeBody(new_head_id)) {
        return false;
    }
    if (isIdRockCell(new_head_id)) {
        return false;
    }
    head_dir = toCR(new_head_id);
    return inGrid(head_dir);
}

function markCellAsVisited(id) {
    document.getElementById(id).classList.add(CLASSES.VISITED);
}

function generateNewSnakeBody(currentCells, direction) {

    var head = currentCells[currentCells.length - 1];
    head_dir = toCR(head);
    var new_head = [
        direction[0] + head_dir.x,
        direction[1] + head_dir.y
    ];

    new_head_id = toId(new_head[0], new_head[1]);

    // die if the new head is invalid (e.g., snake
    // hits itself, outside board, or hits a rock).
    if (!isNewHeadValid(new_head_id)) {
        return null;
    }
    if (isFoodCell(new_head_id)) {
        removeCellsFood([new_head_id]);
    } else {
        // delete the tail of the snake
        old_tail = currentCells.shift();
        markCellAsVisited(old_tail);
    }
    // add on the head of the snake
    currentCells.push(new_head_id);
    return currentCells;
}