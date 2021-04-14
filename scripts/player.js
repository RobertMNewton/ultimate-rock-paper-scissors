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
    this.speed = 2;

    let damper = 0.08;
    let dh = 0;
    let hMax = false;

    this.update = function() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        //Change direction when moving left or right. 
        if(this.velocity.x != 0) {
            this.dimensions.width = 15;
        } else {
            this.dimensions.width = 20;
        }

        //Bob while moving
        if(this.velocity.x != 0 || this.velocity.y != 0) {
            if (hMax) {
                dh -= 0.2;
            } else {
                dh += 0.2
            }

            if (dh >= 5) {
                hMax = true;
            } else if (dh <= 0) {
                hMax = false;
            }
        }

        //Slow and stop
        if(Math.abs(this.velocity.x) < damper) {
            this.velocity.x = 0;
        } else if(this.velocity.x > 0) {
            this.velocity.x -= damper;
        } else if (this.velocity.x < 0) {
            this.velocity.x += damper;
        }
        
        if(Math.abs(this.velocity.y) < damper) {
            this.velocity.y = 0;
        } else if(this.velocity.y > 0) {
            this.velocity.y -= damper;
        } else if (this.velocity.y < 0) {
            this.velocity.y += damper;
        }

        game.context.fillStyle = "white";
        game.context.fillRect(this.position.x - this.dimensions.width / 2, this.position.y - this.dimensions.height / 2 + dh, this.dimensions.width, this.dimensions.height - dh);
    }
}