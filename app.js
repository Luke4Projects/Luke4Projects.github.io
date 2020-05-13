//CHANGE LOCATION FUNCTIONS

function moveToSkyDodge() {
    location.href = 'https://luke4projects.github.io/SkyDodge'
}
function goToPong() {
    location.href = 'https://luke4projects.github.io/Pong';
}
function goToBreakout() {
    location.href = "https://luke4projects.github.io/Breakout-Arkanoid"
}
function goToDodgeBall() {
    location.href = "https://luke4projects.github.io/Dodge-Ball"
}

                                        //CHANGE TO HOW TO PLAY FUNCTIONS
//----------------------------------------------------------------------------------------------------------------------------\\

//                                      FORMAT:
//document.write("<h1>What Is:</h1>");
//document.write("<h2></h2>")
//document.write("<h1>How To Play:</h1>");
//document.write("<h2></h2>")
//document.write("<button onclick='location.reload()'>Click here to go back to site</button>")

function howToPlaySkyDodge() {
    document.write("<h1>What Is Sky Dodge:</h1>");
    document.write("<h2>Sky Dodge is a game about dodging rocks while flying in your spaceship.</h2>")
    document.write("<h1>How To Play Sky Dodge:</h1>");
    document.write("<h2>To play Sky Dodge you must dodge the rocks as you fly. Your spaceship will fly automatically. The only controls are the up and down arrow keys to move your ship up and down. When you hit a rock your ship will start falling from the sky and you will loose control of the ship. Once you hit the ground you will die.</h2>")
    document.write("<button onclick='location.reload()'>Click here to go back to site</button>")
}
function howToPlayPong() {
    document.write("<h1>What Is Pong:</h1>");
    document.write("<h2>Pong is a game similar to games like tennis or ping pong. You control a padle and try to hit a ball back and fourth. You must play it with two players</h2>")
    document.write("<h1>How To Play Pong:</h1>");
    document.write("<h2>To control the padle for player one, use W and S. To control the padle for player 2, use UP and DOWN arrow keys. Hit the ball back and fourth. The first player to 10 points wins.</h2>")
    document.write("<button onclick='location.reload()'>Click here to go back to site</button>")
}
function howToPlayBreakout() {
    document.write("<h1>What is Breakout / Arkanoid:</h1>")
    document.write("<h2>Breakout / Arkanoid is a game about trying to break all of the bricks in the air. To break a brick you must hit the ball at the bricks.</h2>")
    document.write("<h1>How to play Breakout / Arkanoid</h1>")
    document.write("<h2>To control the paddle, use the left and right arrow keys on your keyboard. The ball will bounce off of the walls of the screen. It also will bounce off of your paddle and go up to hit the bricks.</h2>")
    document.write("<button onclick='location.reload()'>Click here to go back to site</button>")
}
function howToPlayDodgeBall() {
    document.write("<h1>What Is Dodge Ball:</h1>");
    document.write("<h2>Dodge ball is a game about dodging balls coming toward you. When you hit one of the balls you will die. The balls are made of lava. The balls will speed up as the game goes on.</h2>")
    document.write("<h1>How To Play Dodge Ball:</h1>");
    document.write("<h2>To dodge the balls of lava coming towards you, use the UP and DOWN arrow keys.</h2>")
    document.write("<button onclick='location.reload()'>Click here to go back to site</button>")
}

window.onscroll = function() {this.onScroll()}

function onScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
}
