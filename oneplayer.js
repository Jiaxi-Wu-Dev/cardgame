let tilesClicked = null;
let preventClick = false;
let numberCounter = 0 

//youtube video https://www.youtube.com/watch?v=bbb9dZotsOc
function onCardClicked(e) {
    const target = e.currentTarget;

    if (preventClick || target === tilesClicked || target.className.includes('done')) {
        return;
    }  

    target.className = target.className.replace('hide-color', '').trim();
    target.className += ' done';

    if (!tilesClicked) {
        tilesClicked = target;
    } else if (tilesClicked) {
        if (
            tilesClicked.getAttribute('data-color') !== target.getAttribute('data-color')) {
            preventClick = true
            setTimeout(() => {
            tilesClicked.className = tilesClicked.className.replace('done', '').trim() + ' hide-color';
            target.className = target.className.replace('done', '').trim() + ' hide-color';
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
                    alert ("congrats you win!")
                }, 500)
                
            }
        }
    }

   


}

