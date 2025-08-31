const canvas = document.getElementById("pong-canvas");
const ctx = canvas.getContext("2d");

class Racket {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 200;
    }
    draw() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        if(this.y+this.height/2 < ball.y-ball.radius) {
            this.y+=3;
        }
        if(this.y+this.height/2 > ball.y+ball.radius) {
            this.y-=3;
        }
        if(this.y+this.height > canvas.height) {
            this.y = canvas.height-this.height;
        }
        if(this.y < 0) {
            this.y = 0;
        }
    }
}

class Ball {
    constructor() {
        this.radius = 10;
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.xSpeed = 3;
        this.ySpeed = 3;
    }
    draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        ctx.fill();
        ctx.closePath();
    }
    update() {
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;

        let x = this.x-this.radius;
        let y = this.y-this.radius;
        let s = this.radius*2;;
        if(x + s > racket1.x && x < racket1.x + racket1.width && y + s > racket1.y && y < racket1.y + racket1.height) {
            this.onCollision(racket1.y+racket1.height/2)
        }
        if(x + s > racket2.x && x < racket2.x + racket2.width && y + s > racket2.y && y < racket2.y + racket2.height) {
            this.onCollision(racket2.y+racket2.height/2)
        }
        if(this.y-this.radius <= 0) {
            this.ySpeed = -this.ySpeed;
        }
        if(this.y+this.radius >= canvas.height) {
            this.ySpeed = -this.ySpeed;
        }

        if(this.x > canvas.width || this.x < 0) {
            init();
        } 
    }
    onCollision(y) {
        this.xSpeed = -this.xSpeed;
        if(y > this.y) {
            //this.ySpeed = (this.y-y)/100;
            this.ySpeed = -3;
        } else {
            //this.ySpeed = (y-this.y)/100
            this.ySpeed = 3;
        }
    }
}

var racket1,racket2,ball;

function init() {
    racket1 = new Racket(10, 200);
    racket2 = new Racket(570, 200);
    ball = new Ball();
}

function start() {
    init();
    draw();
}

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ball.update();
    if(ball.xSpeed > 0) {
        racket2.update()
    } else {
        racket1.update();
    }
    racket1.draw();
    racket2.draw();
    ball.draw();

    requestAnimationFrame(draw);
}

document.body.onload = start;