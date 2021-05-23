const Gameover = {
    x: canvas.width/2,
    y: canvas.height/2,
    w: gameover.width,
    h: gameover.height,

    draw: function () {
        if (states.current === states.endgame) {
            ctx.drawImage(gameover, this.x, this.y+ gameover.height+100, this.w, this.h);
        }

    }
}