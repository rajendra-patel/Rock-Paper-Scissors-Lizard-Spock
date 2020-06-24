var selected = '';
var selectionAvailable = ['Rock', 'Paper', 'Scissor', 'Lizard', 'Spock'];
var randomSelection = '';
var battleMessage = '';
var scoreCount = localStorage.getItem("score");
if (!scoreCount) {
    scoreCount = '0'
    localStorage.setItem("score", scoreCount);
}
document.getElementById('score').textContent = scoreCount;

// document.getElementById('pick').style.display = "inline";
document.getElementById('result').style.display = "none";

document.getElementById('uRockPicked').style.display = "none";
document.getElementById('uPaperPicked').style.display = "none";
document.getElementById('uScissorsPicked').style.display = "none";
document.getElementById('uLizardPicked').style.display = "none";
document.getElementById('uSpockPicked').style.display = "none";

document.getElementById('mRockPicked').style.display = "none";
document.getElementById('mPaperPicked').style.display = "none";
document.getElementById('mScissorsPicked').style.display = "none";
document.getElementById('mLizardPicked').style.display = "none";
document.getElementById('mSpockPicked').style.display = "none";

document.getElementById('retry').addEventListener('click', retry);

document.getElementById('Rock').addEventListener('click', callRandomize);
document.getElementById('Paper').addEventListener('click', callRandomize);
document.getElementById('Scissor').addEventListener('click', callRandomize);
document.getElementById('Lizard').addEventListener('click', callRandomize);
document.getElementById('Spock').addEventListener('click', callRandomize);
//document.getElementById('rules').addEventListener('click', openRulesWindow);
function callRandomize(event) {
    console.log('Randomize called');
    document.getElementById('first-one').style.display = "none";
    document.getElementById('result').style.display = "flex";

    document.getElementById('uRockPicked').style.display = "none";
    document.getElementById('uPaperPicked').style.display = "none";
    document.getElementById('uScissorsPicked').style.display = "none";
    document.getElementById('uLizardPicked').style.display = "none";
    document.getElementById('uSpockPicked').style.display = "none";

    document.getElementById('mRockPicked').style.display = "none";
    document.getElementById('mPaperPicked').style.display = "none";
    document.getElementById('mScissorsPicked').style.display = "none";
    document.getElementById('mLizardPicked').style.display = "none";
    document.getElementById('mSpockPicked').style.display = "none";

    document.getElementById('retry').className = 'close';
    document.getElementById('winMsg').className = 'win close';
    document.getElementById('loseMsg').className = 'lose close';
    document.getElementById('drawMsg').className = 'draw close';

    var userSelection = event.target.value || event.target.alt || event.target.getAttribute('data-value');
    console.log(userSelection);
    var randomNumber = getRandomInt(0, 4);
    randomSelection = selectionAvailable[randomNumber];
    battleMessage = findWinner(userSelection, randomSelection);
    console.log(battleMessage);
    if (battleMessage === 'You Win') {
        let tempScore = parseInt(scoreCount, 10);
        tempScore = tempScore + 1;
        scoreCount = '' + tempScore;
        document.getElementById('score').textContent = scoreCount;
        localStorage.setItem("score", scoreCount);
        setTimeout(function() { document.getElementById("winMsg").className = "win"; }, 1100);
    } else if (battleMessage === 'You Lose') {
        let tempScore = parseInt(scoreCount, 10);
        tempScore = tempScore - 1;
        if (tempScore < 0) {
            tempScore = 0;
        }
        scoreCount = '' + tempScore;
        document.getElementById('score').textContent = scoreCount;
        localStorage.setItem("score", scoreCount);
        setTimeout(function() { document.getElementById("loseMsg").className = "lose"; }, 1100);
    } else if (battleMessage === "Draw") {
        setTimeout(function() { document.getElementById("drawMsg").className = "draw"; }, 1100);
    }
    setTimeout(function() { document.getElementById('retry').className = 'play-again'; }, 1100);
    // alert(battleMessage);





    if (userSelection === 'Rock') {
        document.getElementById('uRockPicked').style.display = "flex";
    } else if (userSelection === 'Paper') {
        document.getElementById('uPaperPicked').style.display = "flex";
    } else if (userSelection === 'Scissor') {
        document.getElementById('uScissorsPicked').style.display = "flex";
    } else if (userSelection === 'Lizard') {
        document.getElementById('uLizardPicked').style.display = "flex";
    } else if (userSelection === 'Spock') {
        document.getElementById('uSpockPicked').style.display = "flex";
    }
    // document.getElementById('battleMessage').textContent = battleMessage;
    if (randomSelection === 'Rock') {
        setTimeout(function() { document.getElementById('mRockPicked').style.display = "flex" }, 500);
    } else if (randomSelection === 'Paper') {
        setTimeout(function() { document.getElementById('mPaperPicked').style.display = "flex" }, 500);
    } else if (randomSelection === 'Scissor') {
        setTimeout(function() { document.getElementById('mScissorsPicked').style.display = "flex" }, 500);
    } else if (randomSelection === 'Lizard') {
        setTimeout(function() { document.getElementById('mLizardPicked').style.display = "flex" }, 500);
    } else if (randomSelection === 'Spock') {
        setTimeout(function() { document.getElementById('mSpockPicked').style.display = "flex" }, 500);
    }




}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function findWinner(user, machine) {
//     var winnerMsg = '';
//     if (user === 'Rock' && machine === 'Paper') {
//         winnerMsg = 'You Loose';
//     } else if (user === 'Rock' && machine === 'Scissor') {
//         winnerMsg = 'You Won';
//     } else if (user === 'Rock' && machine === 'Rock') {
//         winnerMsg = 'Draw';
//     } else if (user === 'Paper' && machine === 'Paper') {
//         winnerMsg = 'Draw';
//     } else if (user === 'Paper' && machine === 'Scissor') {
//         winnerMsg = 'You Loose';
//     } else if (user === 'Paper' && machine === 'Rock') {
//         winnerMsg = 'You Won';
//     } else if (user === 'Scissor' && machine === 'Paper') {
//         winnerMsg = 'You Won';
//     } else if (user === 'Scissor' && machine === 'Scissor') {
//         winnerMsg = 'Draw';
//     } else if (user === 'Scissor' && machine === 'Rock') {
//         winnerMsg = 'You Loose';
//     }
//     return winnerMsg;
// }

function findWinner(user, machine) {
    var winnerMsg = '';
    if (user === 'Rock') {
        switch (machine) {
            case 'Rock':
                winnerMsg = 'Draw';
                break;
            case "Paper":
                winnerMsg = 'You Lose';
                break;
            case 'Scissor':
                winnerMsg = 'You Win';
                break;
            case "Spock":
                winnerMsg = 'You Lose';
                break;
            case "Lizard":
                winnerMsg = 'You Win';
                break;
        }
    } else if (user === 'Paper') {
        switch (machine) {
            case 'Rock':
                winnerMsg = 'You Win';
                break;
            case "Paper":
                winnerMsg = 'Draw';
                break;
            case 'Scissor':
                winnerMsg = 'You Lose';
                break;
            case "Spock":
                winnerMsg = 'You Win';
                break;
            case "Lizard":
                winnerMsg = 'You Lose';
                break;
        }
    } else if (user === 'Scissor') {
        switch (machine) {
            case 'Rock':
                winnerMsg = 'You Lose';
                break;
            case "Paper":
                winnerMsg = 'You Win';
                break;
            case 'Scissor':
                winnerMsg = 'Draw';
                break;
            case "Spock":
                winnerMsg = 'You Lose';
                break;
            case "Lizard":
                winnerMsg = 'You Win';
                break;
        }
    } else if (user === 'Spock') {
        switch (machine) {
            case 'Rock':
                winnerMsg = 'You Win';
                break;
            case "Paper":
                winnerMsg = 'You Lose';
                break;
            case 'Scissor':
                winnerMsg = 'You Win';
                break;
            case "Spock":
                winnerMsg = 'Draw';
                break;
            case "Lizard":
                winnerMsg = 'You Lose';
                break;
        }
    } else if (user === 'Lizard') {
        switch (machine) {
            case 'Rock':
                winnerMsg = 'You Lose';
                break;
            case "Paper":
                winnerMsg = 'You Win';
                break;
            case 'Scissor':
                winnerMsg = 'You Lose';
                break;
            case "Spock":
                winnerMsg = 'You Win';
                break;
            case "Lizard":
                winnerMsg = 'Draw';
                break;
        }
    }
    return winnerMsg;
}

function retry() {
    document.getElementById('result').style.display = "none";
    document.getElementById('winMsg').className = 'win close';
    document.getElementById('loseMsg').className = 'lose close';
    document.getElementById('drawMsg').className = 'draw close';
    document.getElementById('first-one').style.display = "flex";
}

/*click animation animejs*/
// window.human = false;

// var canvasEl = document.querySelector('.fireworks');
// var ctx = canvasEl.getContext('2d');
// var numberOfParticules = 30;
// var pointerX = 0;
// var pointerY = 0;
// var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
// var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

// function setCanvasSize() {
//     canvasEl.width = window.innerWidth * 2;
//     canvasEl.height = window.innerHeight * 2;
//     canvasEl.style.width = window.innerWidth + 'px';
//     canvasEl.style.height = window.innerHeight + 'px';
//     canvasEl.getContext('2d').scale(2, 2);
// }

// function updateCoords(e) {
//     pointerX = e.clientX || e.touches[0].clientX;
//     pointerY = e.clientY || e.touches[0].clientY;
// }

// function setParticuleDirection(p) {
//     var angle = anime.random(0, 360) * Math.PI / 180;
//     var value = anime.random(50, 180);
//     var radius = [-1, 1][anime.random(0, 1)] * value;
//     return {
//         x: p.x + radius * Math.cos(angle),
//         y: p.y + radius * Math.sin(angle)
//     }
// }

// function createParticule(x, y) {
//     var p = {};
//     p.x = x;
//     p.y = y;
//     p.color = colors[anime.random(0, colors.length - 1)];
//     p.radius = anime.random(16, 32);
//     p.endPos = setParticuleDirection(p);
//     p.draw = function() {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
//         ctx.fillStyle = p.color;
//         ctx.fill();
//     }
//     return p;
// }

// function createCircle(x, y) {
//     var p = {};
//     p.x = x;
//     p.y = y;
//     p.color = '#FFF';
//     p.radius = 0.1;
//     p.alpha = .5;
//     p.lineWidth = 6;
//     p.draw = function() {
//         ctx.globalAlpha = p.alpha;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
//         ctx.lineWidth = p.lineWidth;
//         ctx.strokeStyle = p.color;
//         ctx.stroke();
//         ctx.globalAlpha = 1;
//     }
//     return p;
// }

// function renderParticule(anim) {
//     for (var i = 0; i < anim.animatables.length; i++) {
//         anim.animatables[i].target.draw();
//     }
// }

// function animateParticules(x, y) {
//     var circle = createCircle(x, y);
//     var particules = [];
//     for (var i = 0; i < numberOfParticules; i++) {
//         particules.push(createParticule(x, y));
//     }
//     anime.timeline().add({
//             targets: particules,
//             x: function(p) { return p.endPos.x; },
//             y: function(p) { return p.endPos.y; },
//             radius: 0.1,
//             duration: anime.random(1200, 1800),
//             easing: 'easeOutExpo',
//             update: renderParticule
//         })
//         .add({
//             targets: circle,
//             radius: anime.random(80, 160),
//             lineWidth: 0,
//             alpha: {
//                 value: 0,
//                 easing: 'linear',
//                 duration: anime.random(600, 800),
//             },
//             duration: anime.random(1200, 1800),
//             easing: 'easeOutExpo',
//             update: renderParticule,
//             offset: 0
//         });
// }

// var render = anime({
//     duration: Infinity,
//     update: function() {
//         ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
//     }
// });

// document.addEventListener(tap, function(e) {
//     window.human = true;
//     render.play();
//     updateCoords(e);
//     animateParticules(pointerX, pointerY);
// }, false);

// var centerX = window.innerWidth / 2;
// var centerY = window.innerHeight / 2;

// function autoClick() {
//     if (window.human) return;
//     animateParticules(
//         anime.random(centerX - 50, centerX + 50),
//         anime.random(centerY - 50, centerY + 50)
//     );
//     anime({ duration: 200 }).finished.then(autoClick);
// }

// autoClick();
// setCanvasSize();
// window.addEventListener('resize', setCanvasSize, false);