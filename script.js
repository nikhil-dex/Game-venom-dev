score = 0;
cross = true;
duraChange = 5;
let bgAudio = new Audio("sound/bg.mp3");
let failAudio = new Audio("sound/lost.mp3");
let clickAudio = new Audio("sound/click.mp3");
bgAudio.play()
document.onkeydown = function(e){
    clickAudio.play()
    // console.log("down",e.keyCode)
    if(e.keyCode === 38 || e.keyCode === 87){
       document.querySelector(".dino").classList.add("JumpHero");
        setTimeout(() => {
            document.querySelector(".dino").classList.remove("JumpHero");
            
        }, 1000);
    }else if(e.keyCode === 39 || e.keyCode === 68){
        hero = document.querySelector(".dino");
        HLx = parseInt(window.getComputedStyle(hero,null).getPropertyValue("left"));
        hero.style.left = HLx + 50 + "px";
    }else if(e.keyCode === 37 || e.keyCode === 65){
        hero = document.querySelector(".dino");
        HLx = parseInt(window.getComputedStyle(hero,null).getPropertyValue("left"));
        hero.style.left = HLx - 50 + "px";
    }
}

setInterval(() => {
    
    hero = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    villain = document.querySelector(".obstacle");

    dx = parseInt(window.getComputedStyle(hero,null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(hero,null).getPropertyValue("bottom"));

    fx = parseInt(window.getComputedStyle(villain,null).getPropertyValue("left"));
    fy = parseInt(window.getComputedStyle(villain,null).getPropertyValue("bottom"));
    if(fx < 0 && fx > -51 && cross){
        score+=1
        updateScore(score);
        cross =false;
        setTimeout(() => {
            cross=true
            
        }, 1000);

    }else if(score === duraChange){
        dura = parseFloat(window.getComputedStyle(villain,null).getPropertyValue("animation-duration"));
        // dura = 5;
        newDura = dura - 0.1;
        document.querySelector(".obstacleRun").style.animationDuration = `${newDura}s`;
        duraChange+=5

    }

    

    offsetX = Math.abs(dx-fx)
    offsetY = Math.abs(dy-fy)

    // console.log(offsetX,offsetY)

    if(offsetX < 60 && offsetY < 96){
        gameOver.style.visibility = "visible";
        villain.classList.remove("obstacleRun");
        bgAudio.pause()
        failAudio.play()
    }
        
        
}, 100);
        
function updateScore(s){
        document.querySelector("#scoreCont").innerText = `Your Score: ${s}`
            
}