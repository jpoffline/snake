function clearAllFoodCells() {
    clearCellsClasses([CLASSES.ISFOOD])
}


function makeCellsFood(cell_ids) {
    makeCellsClasses(cell_ids, [CLASSES.ISFOOD])

}

function removeCellsFood(cell_ids) {
    cell_ids.forEach(cell_id => {
        document.getElementById(cell_id).classList.remove(CLASSES.ISFOOD);
        FOODCELLS = removeItemOnce(FOODCELLS, cell_id);
    });
}


function isFoodCell(id) {
    return document.getElementById(id).classList.contains(CLASSES.ISFOOD) === true;
}

function pickCellForFood(tries = 0) {
    return pickUnoccupiedCell(tries)
}