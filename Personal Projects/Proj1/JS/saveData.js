function save() {
    let save = {
        player1: player,
        inventory1: inventory,
        boss1: boss,
    }
    localStorage.setItem("save", JSON.stringify(save));
}

function load() {
    let savegame = JSON.parse(localStorage.getItem("save"));
    if (savegame != null && savegame != undefined){
        inventory = savegame.inventory1;
        player = savegame.player1;
    }
}