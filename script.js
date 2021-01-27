var character = document.getElementById("character")
var block = document.getElementById("block")
function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate")
    };
    setTimeout(function (){
        character.classList.remove("animate")
    }, 400);
};

var checkDead = setInterval(function (){
    var characterTop = parseInt(getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"))
    if (blockLeft > 100 && blockLeft< 145 && characterTop >= 395){
        block.style.animation = "none"
        alert("You Died")
        block.style.animation = "block 1s infinite linear"
    }
}, 10);