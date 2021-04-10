window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f){return setTimeout(f, 1000/60)};

var canvas;
var context;
var myPlayer;

window.onload = function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    myPlayer = new player(canvas.width / 2 - 10, canvas.height / 2 - 20);
    window.addEventListener("keydown", function (e) {
        myPlayer.isWalking = true;

        if (e.key == "w") {
            myPlayer.updateDirection("up");
        } else if (e.key == "s"){
            myPlayer.updateDirection("down");
        }
        if (e.key == "d") {
            myPlayer.updateDirection("right");
        } else if (e.key == "a") {
            myPlayer.updateDirection("right");
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

    myPlayer.update();

    window.requestAnimationFrame(update);
}