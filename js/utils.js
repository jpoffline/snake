
function clearCellsClasses(to_remove) {
    for (var r = 0; r < NROWS; r++) {
        for (var c = 0; c < NCOLS; c++) {
            var cell = document.getElementById(toId(c, r));
            to_remove.forEach(class_name => {
                cell.classList.remove(class_name);
            });
        }
    }
}

function toId(c, r) {
    return c + "_" + r;
}
function toCR(id) {
    tkns = id.split('_').map(i => Number(i));
    return { x: tkns[0], y: tkns[1] };
}
function getRandomInt(min, max) {
    //The maximum is exclusive and the minimum is inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);

    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function isNull(val) {
    return val === null
}

function makeCellsClasses(cell_ids, class_names) {
    cell_ids.forEach(cell_id => {
        class_names.forEach(class_name => { document.getElementById(cell_id).classList.add(class_name); });

    });
}