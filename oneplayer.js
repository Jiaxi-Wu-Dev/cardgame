let tilesClicked = null;
let clickStop = false;
let numberCounter = 0


//youtube video https://www.youtube.com/watch?v=bbb9dZotsOc
function onCardClicked(e) {
    const marked = e.currentTarget;
    // if the tile has been clicked and matched, return, making it unclickable
    if (clickStop || marked === tilesClicked || marked.className.includes('done')) {
        return;
    }
    // replace the hide-color attribute with nothing, showing the tiles colors
    marked.className = marked.className.replace('hide-color', '');
    // appends the done attribute to the classname
    marked.className += ' done';
    //keep track of the card if its not clicked
    if (!tilesClicked) {
        //if the tile is not clicked, toggles the tile to marked
        tilesClicked = marked;
    } else if (tilesClicked) {
        if (
            // else if the tiles clicked, and the attribute color is not the same change change click to true
            tilesClicked.getAttribute('data-color') !== marked.getAttribute('data-color')) {
            click = true
            //runs setTimeout function, flipping the tiles after 100ms
            setTimeout(() => {
                //resets the className attributes back to hide color after done was appended
                tilesClicked.className = tilesClicked.className.replace('done', '') + ' hide-color';
                // resets the className attributes for markedTile back to hide color from done
                marked.className = marked.className.replace('done', '') + ' hide-color';
                // resets tilesClicked from marked to null
                tilesClicked = null;
                // resets click from true to false
                click = false;
            }, 100);

        } else {
            // win condition, have a alert when all the squares are done saying "congrats"
            numberCounter += 2;
            console.log(numberCounter)
            tilesClicked = null
            // since there are 16 tiles, when all 16 tiles are clicked the games over
            // one way to keep track of that is to add 2 whenever two tiles are matched until the number is 16
            if (numberCounter >= 16) {
                setTimeout(() => {
                    alert("Congradulations, you win!")
                }, 500)

            }
        }
    }

}
//loss condition
//https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer

let initialNumber = 0;


window.onload = function () {
    function incrementTimer() {
        let secondsPlus = initialNumber++;
        console.log(secondsPlus);
        document.getElementById("countdown").innerHTML = "YOU HAVE 60 SECS" + " " + secondsPlus;

        if (secondsPlus == 60) {
            alert("You have lost the game, refresh to try again!")
            secondsPlus.clear()
        }
    }

    function startTimer() {
        keepTime = setInterval(incrementTimer, 1000);
    }

    display = document.querySelector("countdown");
    startTimer(display);
};
