function scene() {
    this.update = function() {
        game.context.fillStyle = "green";
        game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);
    }
}