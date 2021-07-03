
function isIdRockCell(id) {
    return document.getElementById(id).classList.contains(CLASSES.ISROCK) === true;
}

function pickCellForRock(tries = 0) {
    return pickUnoccupiedCell(tries)
}

function makeCellsRock(cell_ids) {
    makeCellsClasses(cell_ids, [CLASSES.ISROCK]);
}

function grownRocks() {
    cell = ROCKCELLS[~~(Math.random() * ROCKCELLS.length)];
    cell_coords = toCR(cell);
    new_rocks = [];
    dirsx = [1, 0, -1];
    dirsy = [1, 0, -1];
    dirsx.forEach(dirx => {
        dirsy.forEach(diry => {
            if (dirx === 0 && diry === 0) { }
            else {
                prop = {
                    x: cell_coords.x + dirx,
                    y: cell_coords.y + diry
                };
                if (inGrid(prop)) {
                    proposed_id = toId(prop.x, prop.y);
                    if (!isCellOccupied(proposed_id)) {
                        new_rocks.push(proposed_id);
                    }
                }
            }
        });
    });
    return new_rocks;

}