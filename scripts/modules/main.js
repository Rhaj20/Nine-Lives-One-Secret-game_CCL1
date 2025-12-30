import { global } from "./global.js";
import { Cat } from "../gameObjects/cat.js";
import { MoveTrigger } from "../gameObjects/moveTrigger.js";
import { ShelfObject } from "../gameObjects/shelfObject.js";
import { Floor } from "../gameObjects/floor.js";
import { Ball } from "../gameObjects/ball.js";
import { Whool } from "../gameObjects/ball_of_whool.js";
import { Mouse } from "../gameObjects/mouse.js";
import { Owner } from "../gameObjects/owner.js";
import { Pot } from "../gameObjects/pot.js";
import { Pans } from "../gameObjects/pans.js";
import { Cup } from "../gameObjects/cup.js";
import { Door } from "../gameObjects/door.js";
import { Display } from "../gameObjects/display.js";

function gameLoop(totalRunningTime) { 
    global.deltaTime = totalRunningTime - global.prevTotalRunningTime;
    global.deltaTime /= 1000; // Time in milliseconds between 
    global.deltaTime = Math.max(0, global.deltaTime);
    global.deltaTime = Math.min(1/20, global.deltaTime);

    //frames
    // Convert milliseconds to seconds for consistency in calculations
    global.prevTotalRunningTime = totalRunningTime; // Save the current state of "totalRunningTime" for the next frame.
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height); // Clear the canvas for the next frame

    for (var i = 0; i < global.allGameObjects.length; i++) { // Loop through all game objects
        if (global.allGameObjects[i].active == true) {
            global.allGameObjects[i].storePositionOfPreviousFrame();
            global.allGameObjects[i].update();
            global.checkCollisionWithAnyOther(global.allGameObjects[i]);
            global.allGameObjects[i].applyGravity();
            global.allGameObjects[i].draw();
        }
    }
    if (global.gameOver) { 
        document.getElementById("gameover").style.display = "block"; 
        gameRunning = false;
    } else if (global.gameWon) {
        document.getElementById("gamewon").style.display = "block"; 
        gameRunning = false;
    }

    document.getElementById("counter").innerText = global.counter;
    requestAnimationFrame(gameLoop); // Keep the gameLoop running indefinitely
}

function setupGame() {
    global.playerObject = new Cat(160, 60, 180, 180);
    //🆕 Ensure cat is properly initialized and reset if not appearing
   
    // if (!global.playerObject) {
    //     global.playerObject = new Cat(100, 0, 180, 180);
    // }

    //🆕 Stop the cat after 4th platform
    global.catStopPosition = 3500; // Adjusted position to match the 4th platform

    global.leftMoveTrigger = new MoveTrigger(100, 100, 3500, 900, 100); 
    global.rightMoveTrigger = new MoveTrigger(800, 100, 3500, 900, -100);
    new Floor(0, 610, 9000, 40);
    new ShelfObject(780, 135, 275, 45);
    new ShelfObject(1720, 135, 275, 45);
    new ShelfObject(2505, 135, 275, 45);
    new Display (389, 360, 413, 30);
    new Display (1289, 360, 420, 30);
    new Display (2000, 360, 500, 30);
    new Display (2780, 360, 300, 30);
    new Ball (850, 105, 60, 40);
    new Whool (2500, 105, 90, 40);
    new Mouse (950, 570, 70, 40);
    new Pans (600, 270, 160, 80);
    new Pot (2200, 280, 90, 80);
    new Cup (1600, 300, 30, 50);
    new Pans (2700, 270, 160, 80);
    new Door (3310, 0, 80, 700);
    new Owner (1900, 340, 140, 280);
   
    
    requestAnimationFrame(gameLoop);
}

document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        console.log("hidden")
      global.prevTotalRunningTime = performance.now(); // Reset lastTime to avoid large deltas
    }
});

global.restartButton.addEventListener('click', function() {
    location.reload();
    // window.location.href = "startPage.html";
});

global.replayButton.addEventListener('click', function() {
    window.location.href = "index.html";
});

setupGame();
