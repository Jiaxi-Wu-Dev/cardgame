let tilesClicked = null;
let preventClick = false;
let numberCounter = 0 
let lossCounter = 0

//youtube video https://www.youtube.com/watch?v=bbb9dZotsOc
function onCardClicked(e) {
    const target = e.currentTarget;

    if (preventClick || target === tilesClicked || target.className.includes('done')) {
        return;
    }  

    target.className = target.className.replace('hide-color', '');
    target.className += ' done';

    if (!tilesClicked) {
        tilesClicked = target;
    } else if (tilesClicked) {
        if (
            tilesClicked.getAttribute('data-color') !== target.getAttribute('data-color')) {
            preventClick = true
            setTimeout(() => {
            //loss condition
            lossCounter +=1
            console.log(lossCounter)
            tilesClicked.className = tilesClicked.className.replace('done', '') + ' hide-color';
            target.className = target.className.replace('done', '') + ' hide-color';
            tilesClicked = null;
            preventClick = false;
        }, 100);
           
        } else {
             // Have a alert when all the squares are done saying "congrats"
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

