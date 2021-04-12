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
    this.speech = ["Hello, Duncan.", "My name is Papi Sonia.", "And I know where you live (;"];

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
}