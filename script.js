window.onload = function() {
    //Initialise canvas API
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");

    c.fillStyle = '#000000';
    c.fillRect (0, 0, canvas.width, canvas.height);
}