let clickedTiles = null; 

function onTilesClicked(e) {
    const target = e.currentTarget
    target.className = target.className.replace("color", "color-hidden").trim()
    
    if(!clickedTiles){
        clickedCard = target; 
    } else if (clickedTiles){

    }
}