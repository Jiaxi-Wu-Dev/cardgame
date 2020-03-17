let tilesClicked = null;
let clickStop = false;
let numberCounter = 0 

//youtube video https://www.youtube.com/watch?v=bbb9dZotsOc
function onCardClicked(e) {
    const target = e.currentTarget;

    if (clickStop || target === tilesClicked || target.className.includes('done')) {
        return;
    }  

    target.className = target.className.replace('hide-color', '');
    target.className += ' done';

    if (!tilesClicked) {
        tilesClicked = target;
    } else if (tilesClicked) {
        if (
            tilesClicked.getAttribute('data-color') !== target.getAttribute('data-color')) {
            clickStop = true
            setTimeout(() => {
            tilesClicked.className = tilesClicked.className.replace('done', '') + ' hide-color';
            target.className = target.className.replace('done', '') + ' hide-color';
            tilesClicked = null;
            clickStop = false;
        }, 100);
           
        } else {
            tilesClicked = null;
                
            }
        }
    }


document.addEventListener('keydown', logKey);

function logKey(e) {
  console.log(` ${e.code}`);
}