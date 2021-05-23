canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

//load assets
background = new Image();
background.src = "../assets/background-night.png";


block = new Image();
block.src = "../assets/base.png";

startgame = new Image();
startgame.src = "../assets/message.png";

flappy1 = new Image();
flappy1.src = "../assets/flappy1.png";

flappy2 = new Image();
flappy2.src = "../assets/flappy2.png";

flappy3 = new Image();
flappy3.src = "../assets/flappy3.png";

pipeup = new Image();
pipeup.src = "../assets/pipe-red.png";

pipedown = new Image();
pipedown.src = "../assets/pipe-redd.png";


gameover = new Image();
gameover.src = "../assets/gameover.png";

let frame= 0;
let score = 0;

let states = {
    current: 0,
    startgame: 0,
    ongame: 1,
    endgame: 2
}



window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        console.log('Space')
        switch (states.current) {
            case states.startgame:
                states.current = states.ongame;
                break;

            case states.ongame:
                Bird.flapflap();
                break;

            case states.endgame:
                states.current = states.startgame;
                frame = 0;
                Pipes.pipe.length = 0;
                break;
        }
    }
});