
function onTilesClicked(e) {
    const target = e.currentTarget
    console.log('clicked', e.currentTarget);
    target.className = target.className.replace("color", "color-hidden").trim()
}