
function generateSnakeTable() {
    var snakeTable = document.createElement('table');
    for (var r = 0; r < NROWS; r++) {
        var row = document.createElement('tr');
        for (var c = 0; c < NCOLS; c++) {
            var col = document.createElement('td');
            col.setAttribute('id', toId(c, r));
            col.classList.add(CLASSES.GRIDCELL);
            row.appendChild(col);
        }
        snakeTable.appendChild(row);
    }
    return snakeTable
}

function pickUnoccupiedCell(tries = 0) {
    var r = getRandomInt(0, NROWS);
    var c = getRandomInt(0, NCOLS);
    var id = toId(c, r);
    if (isCellOccupied(id)) {
        return pickUnoccupiedCell(tries += 1);
    }
    if (tries > 10) {
        return null;
    }
    return id;
}

function isCellOccupied(id) {
    if (isIdSnakeBody(id)) {
        return true
    } else if (isFoodCell(id)) {
        return true
    } else if (isIdRockCell(id)) {
        return true
    }
    return false
}

function dispatchGameStatus(id, text) {
    document.getElementById(id).innerHTML = text;
}

function inGrid(head_dir) {
    if (head_dir.x < 0) {
        return false;
    }
    if (head_dir.y < 0) {
        return false;
    }
    if (head_dir.x >= NCOLS) {
        return false;
    }
    if (head_dir.y >= NROWS) {
        return false;
    }
    return true;
}