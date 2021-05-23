function draw() {
    frame++;
    canvas.height = 640;
    canvas.width = 480;

    Background.draw();
    Startgame.draw();
    Block.draw();
    Bird.draw();
    Pipes.draw();
    Gameover.draw();

}

function update() {
    // Bird.flapflap();
    Bird.fall();
    Block.update();
    Pipes.update();
}

function loop() {
    draw();
    update();
    requestAnimationFrame(loop)
}

loop();