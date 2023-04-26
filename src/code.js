function randomColours()
{
    const tiles = document.getElementsByClassName("tile");

    for (let i of tiles)
    {
        console.log(i.style.background);
        i.style.background = '#' + (0x1000000 + Math.floor(Math.random() * 0x1000000)).toString(16).substring(1);
    }
}

window.addEventListener('load', function() {
    randomColours()
})