window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)}

var canvas;
var context;
var framesElapsed;
var lastTime;
var myPlayer;

window.onload = function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    framesElapsed = 0;

    myPlayer = new player(canvas.width / 2 - 10, canvas.height / 2 - 20);
    window.addEventListener("keydown", function (e) {
        myPlayer.isWalking = true;

        if (e.key == "w") {
            myPlayer.position.y -= myPlayer.speed;
        } else if (e.key == "s"){
            myPlayer.position.y += myPlayer.speed;
        }
        if (e.key == "d") {
            myPlayer.position.x += myPlayer.speed;;
        } else if (e.key == "a") {
            myPlayer.position.x -= myPlayer.speed;
        }
    });
    window.addEventListener("keyup", function (e) {
        myPlayer.isWalking = false;
    });

    window.requestAnimationFrame(update);
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    myPlayer.update(framesElapsed);

    window.requestAnimationFrame(update);

    framesElapsed++;

}

function player(x, y) {
    this.position = {x: x, y: y};
    this.speed = 1;
    this.width;
    this.height;
    this.isWalking = false;

    var dh = 0;
    var hMax = false;

    this.update = function(framesElapsed) {
        if (this.isWalking) {
            this.width= 20;
            this.height = 40 - dh;

            context.fillStyle = "white";
            context.fillRect(this.position.x, this.position.y + dh, this.width, this.height);

            if (hMax) {
                dh -= 0.2;
                if (dh <= 0) {
                    hMax = false;
                }
            } else {
                dh += 0.2;
                if (dh >= 5) {
                    hMax = true;
                }
            }

        } else {
            this.width = 20;
            this.height = 40 - dh;

            if  (dh > 0) {
                dh  -= 0.2;
            }

            context.fillStyle = "white";
            context.fillRect(this.position.x, this.position.y + dh, this.width, this.height);

        }
    }
}