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

function rock(x, y, width, height, colour)  {
    this.position = {
        x: x,
        y: y
    };
    this.dimensions = {
        width: width,
        height: height
    };
    this.collisionBox = {
        x1: this.position.x,
        x2: this.position.x + this.dimensions.width,
        y1: this.position.y + this.dimensions.height - 10,
        y2: this.position.y + this.dimensions.width
    };
    this.speech = ["A rock ..."];
    this.colour = colour;

    this.update = function() {
        context.fillStyle = this.colour;
        context.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    }

    this.collision = function() {
        var xAverage = (this.collisionBox.x1 + this.collisionBox.x2 + myPlayer.collisionBox.x1 + myPlayer.collisionBox.x2) / 4;
        var yAverage = (this.collisionBox.y1 + this.collisionBox.y2 + myPlayer.collisionBox.y1 + myPlayer.collisionBox.y2) / 4;

        if (xAverage <= this.collisionBox.x2 && xAverage >= this.collisionBox.x1 && yAverage >= this.collisionBox.y2 && yAverage <= this.collisionBox.y1) {
            return true;
        }

        return false;
    }
}

function createRock(x, y, width, height, colour) {
    return new rock(x, y, width, height, colour);
}