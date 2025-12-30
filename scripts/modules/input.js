import { global } from "./global.js";

function move(event) {
//I have a french keyboard so the keys you need to click on are different
    switch(event.key) {
        case "d": //to move to right
            if (global.playerObject.xVelocity == 0)
                global.playerObject.switchCurrentSprites(0, 6);
            global.playerObject.xVelocity = 200;
            global.playerObject.yVelocity = 0;
            global.allGameObjects.blockGravityForces = false;
            console.log("velocity set");
            break;
        case "q": //to move to left
            if (global.playerObject.xVelocity == 0)
                global.playerObject.switchCurrentSprites(7, 13);
            global.playerObject.xVelocity = -200;
            global.playerObject.yVelocity = 0;
            break;
        case "z": //to jump
            global.playerObject.setJumpForce(17);
            break;
    }
}

function stop(event) {
    switch(event.key) {
        case "d":
            global.playerObject.xVelocity = 0;
            break;
        case "q":
            global.playerObject.xVelocity = 0;
            break;   
    }
}

document.addEventListener("keypress", move);

//if you just want to move as long as the player presses a key:
document.addEventListener("keyup", stop);