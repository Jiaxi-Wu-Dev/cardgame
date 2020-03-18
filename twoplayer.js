let tilesClicked = null;
let clickStop = false;
let numberCounter = 0 

//youtube video https://www.youtube.com/watch?v=bbb9dZotsOc
function onCardClicked(e) {
    const marked = e.currentTarget;

    if (clickStop || marked === tilesClicked || marked.className.includes('done')) {
        return;
    }  

    marked.className = marked.className.replace('hide-color', '');
    marked.className += ' done';

    if (!tilesClicked) {
        tilesClicked = marked;
    } else if (tilesClicked) {
        if (
            tilesClicked.getAttribute('data-color') !== marked.getAttribute('data-color')) {
            clickStop = true
            setTimeout(() => {
            tilesClicked.className = tilesClicked.className.replace('done', '') + ' hide-color';
            marked.className = marked.className.replace('done', '') + ' hide-color';
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