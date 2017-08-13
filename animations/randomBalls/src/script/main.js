var anime = require('animejs');

function main(){
    generateBall();
}

// Create the balls animation
function generateBall(){
    var center = document.getElementById('center');
    // set the animation timming timming 
    var time = 400;
    
    // create the counts
    var countCreate = 1;
    
    // creates differents balls so it can delete some later
    setInterval(function(){
        if(countCreate == 15)
            countCreate = 1;
        // creates the ball
        var ball = document.createElement('div');
        ball.className = 'ball'+countCreate;
        center.appendChild(ball);
        var x, y;
            
            // to choose positive or negative numbers
            if(Math.random() > 0.5){
                x = getRandomNumber(0, (window.innerWidth / 2)- 100);
            }
            else{
                x = -getRandomNumber(0, (window.innerWidth / 2)- 100);
            }
            if(Math.random() > 0.5){
                y = getRandomNumber(0, (window.innerHeight / 2) - 100);
            }
            else{
                y = -getRandomNumber(0, (window.innerHeight / 2) - 100);
            }
            
            // animes the element
            anime({
                targets: '.ball'+countCreate,
                translateX: x,
                translateY: y,
                opacity: {
                    value: 0,
                    duration: 30000
                },
                duration: 500,
                backgroundColor: getRandomColor()
            });
            
        countCreate++;
    }, time);
        
        
    
    // deletes some balls
        setInterval(function(){
            center.removeChild(center.childNodes[0]);
            center.removeChild(center.childNodes[1]);
            center.removeChild(center.childNodes[2]);
            center.removeChild(center.childNodes[3]);
            center.removeChild(center.childNodes[4]);
        }, time * 13);
    
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor(){
    var n = getRandomNumber(1, 10);
        switch(n){
            case 1:
                return '#fc9300';
            case 2:
                return '#00fcf7';
            case 3:
                return '#ac00fc';
            case 4:
                return '#910000';
            case 5:
                return '#e9ff00';
            case 6:
                return '#ff7cd1';
            case 7:
                return '#4193f2';
            case 8:
                return '#b9e5be';
            case 9:
                return '#c700f9';
            case 10:
                return '#964077';
            
        }
}
window.onload = main;