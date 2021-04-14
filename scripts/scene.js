function scene(colour) {
    this.isOpen = false;
    this.hasLeft = false;
    this.hasRight = false;
    this.hasUp = false;
    this.hasDown = false;

    let objects = [];
    let objectsInfront = [];

    this.update = function() {
        game.context.fillStyle = colour;
        game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

        let i;
        for (i = 0; i < objects.length; i++) {
            if (objects[i].position.y < game.player.position.y) {
                objectsInfront.push(objects[i]);
            } else {
                objects[i].update();
            }
        }
    }

    this.updateInfront = function() {
        let i;
        for (i = 0; i < objects.length; i++) {
            if (objectsInfront[i].position.y > game.player.position.y) {
                objects.splice(i);
            } else {
                objectsInfront[i].update();
            }
        }
    }
}