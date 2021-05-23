
const Pipes = {
    x: 1,
    y: 0,
    gap: 130,
    w: pipedown.width,
    h: pipedown.height,
    maxYPos: -200,
    pipe: [],
    draw: function () {

        for (let i = 0; i < this.pipe.length; i++) {
            let p = this.pipe[i];
            // console.log(p)
            // ctx.drawImage(pipeUp, p.x, p.y+pipedown+ this.gap, this.w, this.h)
            ctx.drawImage(pipeup, p.x, p.y + pipedown.height + this.gap, this.w, this.h);
            ctx.drawImage(pipedown, p.x, p.y, this.w, this.h);

        }
    },
    update: function () {
        if (states.current == states.ongame) {
            if (frame % 200 === 0) {
                this.pipe.push(
                    {
                        x: 480,
                        y: this.maxYPos * Math.random()
                    }
                )
                // console.log("pipe", this.pipe)
            }
            for (let i = 0; i < this.pipe.length; i++) {
                let p = this.pipe[i];
                p.x -= 2;
                if (p.x + this.w <= 0) {
                    score += 1;
                    this.pipe.shift();
                }
                console.log(score)

                let bottomPipeYPos = p.y + this.h + this.gap;

                //collision
                if(Bird.x + Bird.radius > p.x && Bird.x - Bird.radius < p.x + this.w && Bird.y + Bird.radius > p.y && Bird.y - Bird.radius < p.y + this.h){
                    states.current = states.endgame;
                    // console.log('over') 
                }


                if(Bird.x + Bird.radius > p.x && Bird.x - Bird.radius < p.x + this.w && Bird.y + Bird.radius > bottomPipeYPos && Bird.y - Bird.radius < bottomPipeYPos + this.h){
                    states.current = states.endgame;
                    // console.log('over')
                }
            }
        }

    }
}