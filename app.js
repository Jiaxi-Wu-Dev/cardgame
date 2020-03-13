let clickedTiles = null; 
let preventClick = false; 


function onTilesClicked(e) {
    const target = e.currentTarget;

    if(preventClick || target === clickedTiles || target.className.includes('done')){
        return;
    }

    target.className = target.className.replace("color", " ").trim();

    target.className += " done";
    
    if (!clickedTiles) {
        clickedTiles = target; 
    } else if (clickedTiles){
        if (clickedTiles.getAttribute('data-color') !== target.getAttribute('data-color')){
             preventClick = true;
            setTimeout(() => {
                clickedTiles.className = clickedTiles.className.replace('done', '').trim() + " color";
                target.className = target.className.replace('done', '').trim() + " color";
                clickedTiles = null;
                preventClick = false;
            }, 100);
        } else {
            clickedTiles = null;
        }
    }
}