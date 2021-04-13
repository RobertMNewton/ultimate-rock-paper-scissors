function nonPlayerCharacter(x, y, width, height, colour) {
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
        y2: this.position.y + this.dimensions.height
    };
    this.colour = colour;
    this.speech = ["..."];

    var hMax = false;
    var dh = 0;

    this.update = function() {
        context.fillStyle = colour;
        context.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    }

    this.speakAnimation = function() {
        if (hMax) {
            dh -= 0.5;
            if (dh <= 0) {
                hMax = false;
            }
        } else {
            dh += 0.25;
            if  (dh >= 5) {
                hMax = true;
            }
        }

        context.fillStyle = colour;
        context.fillRect(this.position.x, this.position.y + dh, this.dimensions.width, this.dimensions.height - dh);
    }

    this.collision = function() {
        var xAverage = (this.collisionBox.x1 + this.collisionBox.x2 + myPlayer.collisionBox.x1 + myPlayer.collisionBox.x2) / 4;
        var yAverage = (this.collisionBox.y1 + this.collisionBox.y2 + myPlayer.collisionBox.y1 + myPlayer.collisionBox.y2) / 4;

        if (xAverage < this.collisionBox.x2 && xAverage > this.collisionBox.x1 && yAverage > this.collisionBox.y1 && yAverage < this.collisionBox.y2) {
            return true;
        }

        return false;
    }

    this.setSpeech = function(text) {
        this.speech = text;
    }
}