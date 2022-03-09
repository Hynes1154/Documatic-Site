var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var ovar = document.getElementById('game-over')

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        jump()
    }
    })

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        ovar.innerText = 'Game Over! Score: ' + Math.floor(counter/100)
        counter=0;
        block.style.animation = "block 2s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);