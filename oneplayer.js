let clickedCard = null;
let preventClick = false;
let numberCounter = 0 

//youtube video https://www.youtube.com/watch?v=bbb9dZotsOc
function onCardClicked(e) {
    const target = e.currentTarget;

    if (preventClick || 
        target === clickedCard || 
        target.className.includes('done')
    ) {
        return;
    }  

    target.className = target.className
    .replace('color-hidden', '')
    .trim();
    target.className += ' done';

    if (!clickedCard) {
        clickedCard = target;
    } else if (clickedCard) {
        if (
            clickedCard.getAttribute('data-color') !== 
            target.getAttribute('data-color')
            ) {
            preventClick = true
            setTimeout(() => {
            clickedCard.className = 
            clickedCard.className.replace('done', '').trim() + 
            ' color-hidden';
            target.className = 
            target.className.replace('done', '').trim() + 
            ' color-hidden';
            clickedCard = null;
            preventClick = false;
        }, 100);
           //youtube video https://www.youtube.com/watch?v=bbb9dZotsOc
        } else {
            numberCounter += 2;
            console.log(numberCounter)
            clickedCard = null;
            if (numberCounter >= 16) {
                setTimeout(() => {
                    alert ("congrats you win!")
                }, 500)
                
            }
        }
    }

    // Have a alert when all the squares are done saying "congrats"


}

