class Snake {
    constructor() {
        this.cells = ['1_1', '1_2', '1_3', '1_4', '1_5'];
        this.snake_classes = [CLASSES.ISSNAKE, CLASSES.ISSNAKEBODY];
    }
    markCellAsVisited(id) {
        document.getElementById(id).classList.add(CLASSES.VISITED);
    }

    isNewHeadValid(new_head_id) {
        if (STATE.isIdSnakeBody(new_head_id)) {
            return false;
        }
        if (STATE.isIdRockCell(new_head_id)) {
            return false;
        }
        var head_dir = toCR(new_head_id);
        return inGrid(head_dir);
    }
    render() {
        makeCellsClasses(this.cells, this.snake_classes);
        var head_cell = document.getElementById(this.cells[this.cells.length - 1]);
        head_cell.classList.remove(CLASSES.ISSNAKEBODY);
        head_cell.classList.add(CLASSES.ISSNAKEHEAD);
    }

    length() {
        return this.cells.length
    }

    move(direction) {
        var head = this.cells[this.cells.length - 1];
        var head_dir = toCR(head);

        var new_head = addLocations(direction, head_dir);
        var new_head_id = dirToID(new_head);

        // die if the new head is invalid (e.g., snake
        // hits itself, outside board, or hits a rock).
        if (!this.isNewHeadValid(new_head_id)) {
            return false;
        }
        if (STATE.isFoodCell(new_head_id)) {
            removeCellsFood([new_head_id]);
        } else {
            // delete the tail of the snake
            var old_tail = this.cells.shift();
            this.markCellAsVisited(old_tail);
        }
        // add on the head of the snake
        this.cells.push(new_head_id);
        return true;
    }

    deleteCells() {
        clearCellsClasses([CLASSES.ISSNAKE, CLASSES.ISSNAKEBODY, CLASSES.ISSNAKEHEAD])
    }
}