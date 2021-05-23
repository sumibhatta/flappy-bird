const Startgame = {
    x: canvas.width/2,
    y: canvas.height/2,
    w: startgame.width,
    h: startgame.height,

    draw: function () {
        if (states.current === states.startgame) {
            Bird.y = 350;
            // Bird.x = 0;
            ctx.drawImage(startgame, this.x, this.y+100, this.w, this.h);
        }

    }
}