let clickedTiles = null; 

function onTilesClicked(e) {
    const target = e.currentTarget

    if(target.className.includes('done')){
        return;
    }

    target.className = target.className.replace("color", "color-hidden").trim()
    
    if(!clickedTiles){
        clickedCard = target; 
    } else if (clickedTiles){
        if (clickedTiles.getAttribute('data-color') === target.getAttribute('data.color')) {
            clickedTiles.className += " done"
        }
    }
}