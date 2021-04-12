function background(colour) {
    this.colour = colour;
    this.position = {
        x: 0,
        y: 0
    };

    this.update = function() {
        context.fillStyle = colour;
        context.fillRect(this.position.x, this.position.y, canvas.width, canvas.height);
    }
    this.collision = function() {
        return false;
    }
}