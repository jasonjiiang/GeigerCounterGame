"use strict";
function randomColours() {
    const tiles = document.getElementsByClassName("tile");
    for (let i of tiles) {
        i.style.background = '#' + (0x1000000 + Math.floor(Math.random() * 0x1000000)).toString(16).substring(1);
    }
}
function gridSize() {
    const size = 100;
    for (let i = 0; i < size; i++) {
        const tempLi = document.createElement("li");
        tempLi.classList.add("tile");
        document.getElementById("tiles").insertAdjacentElement("beforeend", tempLi);
    }
}
function randomTile() {
    const tiles = document.getElementsByClassName("tile");
    const goal = tiles[Math.floor(Math.random() * tiles.length)];
    return goal;
}
function addButton() {
    const tempButton = document.createElement("button");
    tempButton.id = "finish";
    tempButton.setAttribute("type", "button");
    tempButton.innerHTML = "Finish";
    document.getElementById("goal").insertAdjacentElement("beforeend", tempButton);
}
window.addEventListener('load', function () {
    gridSize();
    randomTile().id = ("goal");
    addButton();
    randomColours();
});
//# sourceMappingURL=code.js.map