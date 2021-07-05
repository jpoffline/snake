


function removeCellsFood(cell_ids) {
    cell_ids.forEach(cell_id => {
        game.food.remove_food_cell(cell_id)
    });
}





class Food {
    constructor() {
        this.cells = [];
    }

    makeCellsFood(cell_ids) {
        makeCellsClasses(cell_ids, [CLASSES.ISFOOD])

    }

    place() {
        var proposed = pickUnoccupiedCell(0)
        if (!isNull(proposed)) {
            this.cells.push(proposed);
            this.render_food_cell(proposed);
        }

    }

    render_food_cell(food_id) {
        this.makeCellsFood([food_id]);
    }

    remove_food_cell(food_id) {
        console.log('removing');
        document.getElementById(food_id).classList.remove(CLASSES.ISFOOD);
        this.cells = removeItemOnce(this.cells, food_id);
    }
}