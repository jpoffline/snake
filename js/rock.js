
class Rocks {
    constructor() {
        this.rocks = [];
    }
    makeCellsRock(cell_ids) {
        makeCellsClasses(cell_ids, [CLASSES.ISROCK]);
    }
    place_new_rock(tries = 0) {
        var proposal = pickUnoccupiedCell(tries)
        if (!isNull(proposal)) {
            this.rocks.push(proposal);
        }
        this.render_new_rock(proposal);
    }

    render_new_rock(rock_cell_id) {
        this.makeCellsRock([rock_cell_id]);
    }

    place() {
        this.place_new_rock()
        var cell = this.rocks[~~(Math.random() * this.rocks.length)];
        var cell_coords = toCR(cell);
        var spawned = [];
        var dirsx = [1, 0, -1];
        var dirsy = [1, 0, -1];
        dirsx.forEach(dirx => {
            dirsy.forEach(diry => {
                if (dirx === 0 && diry === 0) { }
                else {
                    var prop = {
                        x: cell_coords.x + dirx,
                        y: cell_coords.y + diry
                    };
                    if (inGrid(prop)) {
                        var proposed_id = toId(prop.x, prop.y);
                        if (!STATE.isCellOccupied(proposed_id)) {
                            spawned.push(proposed_id);
                        }
                    }
                }
            });
        });

        this.makeCellsRock(spawned);
        spawned.forEach(cell => { this.rocks.push(cell) });
    }

}