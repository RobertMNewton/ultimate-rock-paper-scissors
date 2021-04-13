window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f){return setTimeout(f, 1000/60)};

var canvas;
var context;
var myPlayer;
var myNPC;
var background;
var coordinate;
var text;


window.onload = function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    myPlayer = new player(0, 0);
    myPlayer.setDirection("down");
    
    window.addEventListener("keydown", function (e) {
        myPlayer.isWalking = true;

        if (e.key == "e") {
            if (!text) {
                text = [].concat(myPlayer.talkingTo.speech);
            } else {
                text.shift();

                if (text.length == 0) {
                    text = undefined;
                }
            }
        } else if (e.key == "w") {
            myPlayer.setDirection("up");
        } else if (e.key == "s"){
            myPlayer.setDirection("down");
        } else if (e.key == "d") {
            myPlayer.setDirection("right");
        } else if (e.key == "a") {
            myPlayer.setDirection("left");
        }
    });
    
    window.addEventListener("keyup", function (e) {
        myPlayer.isWalking = false;
    });

    window.addEventListener("click", function(e) {
        console.log("x: " + e.clientX + ", y: " + e.clientY);
    });

    coordinate = 0;
    background = map[coordinate];

    window.requestAnimationFrame(update);
}

function update() {
    if (text) {
        context.fillStyle = "black";
        context.fillRect(0, 380, 680, 100);

        context.fillStyle = "white";
        context.fillRect(10, 390, 620, 80);

        context.fillStyle = "black";
        context.font = "12px serif";
        context.fillText(text[0], 21, 401);
        
        if ("speakAnimation" in myPlayer.talkingTo) {
            context.fillStyle = "green";
            context.fillRect(myPlayer.talkingTo.position.x, myPlayer.talkingTo.position.y, myPlayer.talkingTo.dimensions.width, myPlayer.talkingTo.dimensions.height);

            myPlayer.talkingTo.speakAnimation();
        } 

    } else {
        context.clearRect(0, 0, canvas.width, canvas.height);

        var background2 = [];
        var i;
        for (i = 0; i < background.length; i++) {
            if (background[i].collisionBox.y2 > myPlayer.collisionBox.y2) {
                background2.push(background[i]);
            } else {
                background[i].update();
            }

            if (distanceToPlayer(background[i]) < 50) {
                myPlayer.talkingTo = background[i];
            }
        }

        myPlayer.update();

        for (i = 0; i < background2.length; i++) {
            background2[i].update();
        }
    }

    window.requestAnimationFrame(update);
}

function distanceToPlayer(object) {
    return Math.hypot(object.position.x - myPlayer.position.x, object.position.y - myPlayer.position.y);
}