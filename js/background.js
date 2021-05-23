const Background = {

    x: 0,
    y: 0,
    w: 480,
    h: 640,

    draw: function () {
        ctx.drawImage(background, this.x, this.y, this.w, this.h);
        // ctx.drawImage(background, this.x, this.y, this.w, this.h);
        // console.log(this.w, canvas.width)
        // console.log(this.h, canvas.height)
    }
}


//block

const Block = {
    x: 0,
    y: 530,
    w: block.width,
    h: block.height,

    draw: function () {
        ctx.drawImage(block, this.x, this.y, this.w, this.h);
        ctx.drawImage(block, this.x+this.w, this.y, this.w, this.h); 
    },

    update: function(){
        if(states.current == states.ongame){
            this.x -= 3;
            if(this.x < -150){
                this.x = 0;
            }
            // console.log(this.x)
         }
    }

}