function player(x, y) {
    this.position = {
        x: x,
        y: y
    };
    this.velocity = {
        x: 0,
        y: 0
    };
    this.dimensions = {
        width: 20,
        height: 40
    };
    this.collisionBox = {
        x1: this.position.x,
        x2: this.position.x + this.dimensions.width,
        y1: this.position.y + this.dimensions.height - 10,
        y2: this.position.y + this.dimensions.width
    };
    this.isWalking = false;
    this.direction = "down";

    this.talkingTo = null;
    
    var dh = 0;
    var hMax = false;
    var speed = 2;
    var delay = 0;
    
    this.update = function () {
        if (this.talkingTo != null) {
            if (distanceToPlayer(this.talkingTo) >= 50) {
                this.talkingTo = null;
            }
        }

        this.collisionBox = {
            x1: this.position.x,
            x2: this.position.x + this.dimensions.width,
            y1: this.position.y + this.dimensions.height - 10,
            y2: this.position.y + this.dimensions.width
        };

        if (this.position.x < 0) {
            this.position.x = canvas.width - this.dimensions.width;
        } else if (this.position.x > canvas.width) {
            this.position.x = 0;
        } else if (this.position.y < -this.dimensions.height) {
            this.position.y = canvas.height - this.dimensions.height;
        } else if (this.position.y > canvas.height) {
            this.position.y = 0;
        } 

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        
        if(this.talkingTo) {
            if (this.talkingTo.collision()) {
                this.position.x -= this.velocity.x;
                this.position.y -= this.velocity.y;
            }
        }

        if (this.isWalking ) {
            delay = 60;

            if (hMax) {
                dh -= 0.5;
                if (dh <= 0) {
                    hMax = false;
                }
            } else {
                dh += 0.5;
                if  (dh >= 10) {
                    hMax = true;
                }
            }
        } else {
            if (delay > 0) {
                this.velocity.x *= 0.9;
                this.velocity.y *= 0.9;

                delay--;
            } else {
                this.velocity.x = 0;
                this.velocity.y = 0;
            }

            if (dh > 0)  {
                dh -= 0.5;
            } else {
                dh = 0;
            }
        }

        context.fillStyle = "white";
        context.fillRect(this.position.x, this.position.y + dh, this.dimensions.width, this.dimensions.height - dh);

    }

    this.setDirection = function(direction) {
        switch (direction) {
        case "down":
        this.dimensions.width = 20;
        this.dimensions.height = 40;

            this.velocity.x = 0;
            this.velocity.y = speed;

            this.direction = "down";

            break;
        case "up":
            this.dimensions.width = 20;
            this.dimensions.height = 40;

            this.velocity.x = 0;
            this.velocity.y = -speed;

            this.direction = "up";

            break;
        case "left":
            this.dimensions.width = 15;
            this.dimensions.height = 40;

            this. velocity.x = -speed;
            this.velocity.y = 0;

            this.direction = "left"

            break;
        case "right":
            this.dimensions.width = 15;
            this.dimensions.height = 40;

            if (this.direction != "right") {
                this.position.x += 5;
            }

            this.velocity.x = speed;
            this.velocity.y = 0;

            this.direction = "right";

            break;
        }
    }
}