window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f){return setTimeout(f, 1000/60)};

var canvas;
var context;
var myPlayer;
var myNPC;

window.onload = function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    myPlayer = new player(0, 0);
    myPlayer.setDirection("down");
    window.addEventListener("keydown", function (e) {
        myPlayer.isWalking = true;

        if (e.key == "w") {
            myPlayer.setDirection("up");
        } else if (e.key == "s"){
            myPlayer.setDirection("down");
        }
        if (e.key == "d") {
            myPlayer.setDirection("right");
        } else if (e.key == "a") {
            myPlayer.setDirection("left");
        }
    });
    window.addEventListener("keyup", function (e) {
        myPlayer.isWalking = false;
    });

    myNPC = new nonPlayerCharacter(340, 220, 20, 40, "skyblue");

    window.requestAnimationFrame(update);
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "green";
    context.fillRect(0, 0, canvas.width, canvas.height);

    myPlayer.update();
    myNPC.update();

    window.requestAnimationFrame(update);
}