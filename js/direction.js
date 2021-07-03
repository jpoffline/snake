
DIRECTION = {
    LEFT: [-1, 0],
    RIGHT: [1, 0],
    UP: [0, -1],
    DOWN: [0, 1]
}
function directionFromKey(key) {
    if (key == 'd' | key == 'ArrowRight') {
        return DIRECTION.RIGHT;
    }
    else if (key == 'a' | key == 'ArrowLeft') {
        return DIRECTION.LEFT;
    } else if (key == 'w' | key == 'ArrowUp') {
        return DIRECTION.UP;
    }
    else if (key == 's' | key == 'ArrowDown') {
        return DIRECTION.DOWN;
    }
    return null;
}
