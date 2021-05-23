const Bird = {
    x: 60,
    y: 350,
    w: flappy1.width,
    h: flappy1.height,
    frame: 0,
    radius: 8,

    draw: function () {
        if (this.frame <= 0) {
            ctx.drawImage(flappy1, this.x, this.y, this.w + 5, this.h + 5);
        }
        else if (this.frame <= 1) {
            ctx.drawImage(flappy2, this.x, this.y, this.w + 5, this.h + 5);
        }
        else if (this.frame <= 2) {
            ctx.drawImage(flappy3, this.x, this.y, this.w + 5, this.h + 5);
        }
        else if (this.frame <= 3) {
            ctx.drawImage(flappy1, this.x, this.y, this.w + 5, this.h + 5);
        }
    },

    flapflap: function () {
        
        this.y -= 70;
    },

    fall: function () {
        //to flap the wings
        if (this.frame % 3 === 0) {
            this.frame = 0;
        }
        this.frame += 0.25;


        if (states.current == states.ongame) {
            if (this.y <= (615 - block.height)) {
                this.y += 2;
                // this.x += 3;
            }
            else{
                states.current = states.endgame;
                // console.log("hi")
            }
        }
    }
}