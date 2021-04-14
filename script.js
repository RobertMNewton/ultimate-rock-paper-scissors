var game = {};

window.onload = function() {
    game.canvas = document.getElementById("canvas");
    game.context = canvas.getContext("2d");

    game.currentScene = 0;

    const scene0 = new scene("green");
    scene0.hasRight = true;

    const scene1 = new scene("orange");
    scene1.hasLeft = true;

    game.map = [scene0, scene1];
    
    game.player = new player(310, 220);

    game.scene = game.map[game.currentScene];

    
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
    game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);

    game.scene.update();
    game.player.update();
    game.scene.updateInfront();

    game.scene = game.map[game.currentScene];

    window.requestAnimationFrame(loop);
}