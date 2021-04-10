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
    this.updateDirection("down");
    
    var dh = 0;
    var hMax = false;
    
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

            context.fillStyle = "white";
            context.fillRect(this.positon.x, this.position.y + dh, this.dimensions.width, this.dimensions.height - dh);
        } else {
            if (this.velocity.x > 0) {
                this.velocity.x -= 0.5;
            } else if (this.velocity.y > 0) {
                this.velocity.y -= 0.5;
            } else if (this.velocity.x < 0) {
                this.velocity.x += 0.5;
            } else if (this.velocity.y < 0) {
                this.velocity.y += 0.5;
            }

            if (dh >= 0) {
                dh -= 0.2;
            }

            context.fillStyle = "white";
            context.fillRect(his.positon.x, this.position.y + dh, this.dimensions.width, this.dimensions.height - dh)
        }
    }

    this.updateDirection = function (direction){
        switch (direction) {
            case "down":
               this.dimensions.width = 20;
               this.dimensions.height = 40;

                this.velocity.x = 0;
                this.velocity.y = -5;

                break;
            case "up":
                this.dimensions.width = 20;
                this.dimensions.height = 40;

                this.velocity.x = 0;
                this.velocity.y = -5;

                break;
            case "left":
                this.dimensions.width = 15;
                this.dimensions.height = 40;

                this. velocity.x = -5
                this.velocity.y = 0;

                break;
            case "right":
                this.dimensions.width = 15;
                this.dimensions.height = 40;

                this.velocity.x = 5;
                this.velocity.y = 0;

                break;
        }
    }
}