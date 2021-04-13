function background(colour) {
    this.colour = colour;
    this.position = {
        x: 0,
        y: 0
    };
    this.dimensions = {
        width: canvas.width,
        height: canvas.height
    };
    this.collisionBox = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
    };

    this.update = function() {
        context.fillStyle = colour;
        context.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
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
        y1: this.position.y,
        y2: this.position.y + this.dimensions.height
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

        if (xAverage < this.collisionBox.x2 && xAverage > this.collisionBox.x1 && yAverage > this.collisionBox.y1 && yAverage < this.collisionBox.y2) {
            return true;
        }

        return false;
    }
}
function bush(x, y, width, height) {
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
        y1: this.position.y + this.dimensions.height - 20,
        y2: this.position.y + this.dimensions.height
    };
    this.speech = ["A bush..."]

    this.update = function() {
        context.fillStyle = "darkgreen";
        context.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    }

    this.collision = function() {
        var xAverage = (this.collisionBox.x1 + this.collisionBox.x2 + myPlayer.collisionBox.x1 + myPlayer.collisionBox.x2) / 4;
        var yAverage = (this.collisionBox.y1 + this.collisionBox.y2 + myPlayer.collisionBox.y1 + myPlayer.collisionBox.y2) / 4;

        if (xAverage < this.collisionBox.x2 && xAverage > this.collisionBox.x1 && yAverage > this.collisionBox.y1 && yAverage < this.collisionBox.y2) {
            return true;
        }

        return false;
    }
}

function horizontalFence(x, y) {
    this.position = {
        x: x,
        y: y
    };
    this.dimensions = {
        width: 70,
        height: 40
    };
    this.collisionBox = {
        x1: this.position.x,
        x2: this.position.x + this.dimensions.width,
        y1: this.position.y + this.dimensions.height - 10,
        y2: this.position.y + this.dimensions.height
    };
    this.speech = ["A fence..."]

    this.update = function() {
        context.fillStyle = "brown";
        context.fillRect(this.position.x, this.position.y + 10, this.dimensions.width, 10);
        context.fillRect(this.position.x, this.position.y + 25, this.dimensions.width, 10);
        context.fillRect(this.position.x, this.position.y, 5, this.dimensions.height);
        context.fillRect(this.position.x + this.dimensions.width, this.position.y, -5, this.dimensions.height);
    }

    this.collision = function() {
        var xAverage = (this.collisionBox.x1 + this.collisionBox.x2 + myPlayer.collisionBox.x1 + myPlayer.collisionBox.x2) / 4;
        var yAverage = (this.collisionBox.y1 + this.collisionBox.y2 + myPlayer.collisionBox.y1 + myPlayer.collisionBox.y2) / 4;

        if (xAverage < this.collisionBox.x2 && xAverage > this.collisionBox.x1 && yAverage > this.collisionBox.y1 && yAverage < this.collisionBox.y2) {
            return true;
        }

        return false;
    }
}

function verticalFence(x, y) {
    this.position = {
        x: x,
        y: y
    };
    this.dimensions = {
        width: 5,
        height: 70
    };
    this.collisionBox = {
        x1: this.position.x,
        x2: this.position.x + this.dimensions.width,
        y1: this.position.y,
        y2: this.position.y + this.dimensions.height
    };
    this.speech = ["A fence..."]

    this.update = function() {
        context.fillStyle = "brown";
        context.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    }

    this.collision = function() {
        var xAverage = (this.collisionBox.x1 + this.collisionBox.x2 + myPlayer.collisionBox.x1 + myPlayer.collisionBox.x2) / 4;
        var yAverage = (this.collisionBox.y1 + this.collisionBox.y2 + myPlayer.collisionBox.y1 + myPlayer.collisionBox.y2) / 4;

        if (xAverage < this.collisionBox.x2 && xAverage > this.collisionBox.x1 && yAverage > this.collisionBox.y1 && yAverage < this.collisionBox.y2) {
            return true;
        }

        return false;
    }
}

function tree(x, y) {
    this.position = {
        x: x,
        y: y
    };
    this.dimensions = {
        width: 20,
        height: 100
    };
    this.collisionBox = {
        x1: this.position.x,
        x2: this.position.x + this.dimensions.width,
        y1: this.position.y + this.dimensions.height - 10,
        y2: this.position.y + this.dimensions.height
    };
    this.speech = ["A tree..."]

    this.update = function() {
        context.fillStyle = "brown";
        context.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);

        context.fillStyle = "darkgreen";
        context.fillRect(this.position.x - 30, this.position.y - 60, 80, 60);
    }

    this.collision = function() {
        var xAverage = (this.collisionBox.x1 + this.collisionBox.x2 + myPlayer.collisionBox.x1 + myPlayer.collisionBox.x2) / 4;
        var yAverage = (this.collisionBox.y1 + this.collisionBox.y2 + myPlayer.collisionBox.y1 + myPlayer.collisionBox.y2) / 4;

        if (xAverage < this.collisionBox.x2 && xAverage > this.collisionBox.x1 && yAverage > this.collisionBox.y1 && yAverage < this.collisionBox.y2) {
            return true;
        }

        return false;
    }
}

function newRock(x, y, width, height, colour) {
    return new rock(x, y, width, height, colour);
}

function newBush(x, y, width, height) {
    return new bush(x, y, width, height);
}

function newFence(x, y, type) {
    if (type == "horizontal") {
        return new horizontalFence(x, y);
    } else if (type == "vertical") {
        return new verticalFence(x, y);
    }
}

function newTree(x, y) {
    return new tree(x, y);
}