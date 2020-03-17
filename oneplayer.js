let tilesClicked = null;
let preventClick = false;
let numberCounter = 0 


//youtube video https://www.youtube.com/watch?v=bbb9dZotsOc
function onCardClicked(e) {
    const target = e.currentTarget;

    if (preventClick || target === tilesClicked || target.className.includes('done')) {
        return;
    }  

    target.className = target.className.replace('hide-color', '');
    target.className += ' done';
    //keep track of the card if its not clicked
    if (!tilesClicked) {
        tilesClicked = target;
    } else if (tilesClicked) {
        if (
            tilesClicked.getAttribute('data-color') !== target.getAttribute('data-color')) {
            preventClick = true
            setTimeout(() => {
            tilesClicked.className = tilesClicked.className.replace('done', '') + ' hide-color';
            target.className = target.className.replace('done', '') + ' hide-color';
            tilesClicked = null;
            preventClick = false;
        }, 100);

        } else {
             // win condition, have a alert when all the squares are done saying "congrats"
            numberCounter += 2;
            console.log(numberCounter)
            tilesClicked = null;
            if (numberCounter >= 16) {
                setTimeout(() => {
                    alert ("Congradulations, you win!")
                }, 500)
                
            }
        }
    }

}
//loss condition
//https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer == 0) {
        alert ("You have lost the game, refresh to try again!")
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};