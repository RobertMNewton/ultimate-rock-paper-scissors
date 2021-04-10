function nonPlayerCharacter(x, y, width, height, colour) {
    this.position = {
        x: x,
        y: y
    };
    this.dimensions = {
        width: width,
        height: height
    };
    this.colour = colour;

    this.update = function() {
        context.fillStyle = colour;
        context.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    }
}