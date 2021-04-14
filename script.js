var game = {};

window.onload = function() {
    game.canvas = document.getElementById("canvas");
    game.context = canvas.getContext("2d");

    game.player = new player(310, 220);

    game.scene = new scene();
    
    //Add controller
    window.addEventListener("keydown", function(event) {
        if (event.key == "d") {
            game.player.velocity.x = game.player.speed;
        } else if (event.key == "a") {
            game.player.velocity.x = -game.player.speed;
        } else if (event.key == "s") {
            game.player.velocity.y = game.player.speed;
        } else if (event.key == "w") {
            game.player.velocity.y = -game.player.speed;
        }
    });

    window.requestAnimationFrame(loop);
}

function loop() {
    game.scene.update();
    game.player.update();

    window.requestAnimationFrame(loop);
}