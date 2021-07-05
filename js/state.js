
class State {
    isCellOccupied(id) {
        if (this.isIdSnakeBody(id)) {
            return true
        } else if (this.isFoodCell(id)) {
            return true
        } else if (this.isIdRockCell(id)) {
            return true
        }
        return false
    }

    isFoodCell(id) {
        return document.getElementById(id).classList.contains(CLASSES.ISFOOD) === true;
    }
    isIdSnakeBody(id) {
        return document.getElementById(id).classList.contains(CLASSES.ISSNAKE) === true;
    }

    isIdRockCell(id) {
        return document.getElementById(id).classList.contains(CLASSES.ISROCK) === true;
    }
}