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
    this.isWalking = false;
    
    var dh = 0;
    var hMax = false;
    var speed = 2;
    
    this.update = function () {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.isWalking ) {
            if (hMax) {
                dh -= 0.2;
                if (dh <= 0) {
                    hMax = false;
                }
            } else {
                dh += 0.2;
                if  (dh >= 5) {
                    hMax = true;
                }
            }
        } else {
            if (this.velocity.x > 0) {
                this.velocity.x -= 0.2;
            } else if (this.velocity.y > 0) {
                this.velocity.y -= 0.2;
            } else if (this.velocity.x < 0) {
                this.velocity.x += 0.2;
            } else if (this.velocity.y < 0) {
                this.velocity.y += 0.2;
            }

            if (Math.abs(this.velocity.x) < 0.2 || Math.abs(this.velocity.y) < 0.2) {
                this.velocity.x = 0;
                this.velocity.y = 0;
            }

            if (dh > 0)  {
                dh -= 0.2;
            } else {
                dh = 0;
            }
        }

        context.fillStyle = "white";
        context.fillRect(this.position.x, this.position.y + dh, this.dimensions.width, this.dimensions.height - dh)

    }

    this.setDirection = function(direction) {
        switch (direction) {
            case "down":
               this.dimensions.width = 20;
               this.dimensions.height = 40;

                this.velocity.x = 0;
                this.velocity.y = speed;

                break;
            case "up":
                this.dimensions.width = 20;
                this.dimensions.height = 40;

                this.velocity.x = 0;
                this.velocity.y = -speed;

                break;
            case "left":
                this.dimensions.width = 15;
                this.dimensions.height = 40;

                this. velocity.x = -speed;
                this.velocity.y = 0;

                break;
            case "right":
                this.dimensions.width = 15;
                this.dimensions.height = 40;

                this.velocity.x = speed;
                this.velocity.y = 0;

                break;
        }
    }
}