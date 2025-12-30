import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class Owner extends BaseGameObject {
    name = "Owner";
    xVelocity = -200; // Initial leftward movement
    yVelocity = 0;    // No vertical movement

    randomMovementData = {
        "timeToChangeDirection": 6,
        "currentDirectionElapsedTime": 0,
        "movementChangePossibilityStartValue": 0.1,
        "movementChangePossibility": 0.1,
        "movementChangePossibilitySteps": 0.02,
        "movementChangeOppositePossibility": 0.3
    };

    animationData = {
        "animationSprites": [],
        "timePerSprite": 0.3,
        "currentSpriteElapsedTime": 0,
        "firstSpriteIndex": 0,
        "lastSpriteIndex": 1,
        "currentSpriteIndex": 0
    };

    update = function () {
        this.randomMovementData.currentDirectionElapsedTime += global.deltaTime;

        if (this.randomMovementData.currentDirectionElapsedTime >= this.randomMovementData.timeToChangeDirection) {
            this.randomizeMovement();
            this.randomMovementData.currentDirectionElapsedTime = 0;
            let images;
            if (this.xVelocity < 0) {
                this.switchCurrentSprites(0, 2);
                // this.switchCurrentSprites(0, 1);
            } else {
                this.switchCurrentSprites(3, 4);
                // this.switchCurrentSprites(2, 3);
            }
        }

        this.x += this.xVelocity * global.deltaTime;
        // Ensure y stays constant by not updating it
        this.screenWrap();
        }

    randomizeMovement = function () {
        const shouldChange = Math.random();
        if (shouldChange > this.randomMovementData.movementChangePossibility) {
            this.changeMovement();
            this.randomMovementData.movementChangePossibility = this.randomMovementData.movementChangePossibilityStartValue;
            
        } else {
            this.randomMovementData.movementChangePossibility += this.randomMovementData.movementChangePossibilitySteps;
            
        }
    
    if (global.health.value <= 0){
        global.gameOver = true; 
    }
    }

    changeMovement = function () {
        const shouldGoOpposite = Math.random();
        if (shouldGoOpposite < this.randomMovementData.movementChangeOppositePossibility) {
            this.xVelocity *= -1; // Reverse direction
            
        } else {
            // Randomly choose left or right with the same speed
            const makePositive = Math.random();
            this.xVelocity = 200 * (makePositive > 0.5 ? 1 : -1); // Random left or right
           
        }
        // yVelocity remains 0 to ensure no vertical movement
        this.yVelocity = 0;
    }

    screenWrap = function () {
        const canvasBounds = global.getCanvasBounds();
        const bounds = this.getBoxBounds();
        if (bounds.left >= canvasBounds.right) {
            this.x = canvasBounds.left - this.width;
        } else if (bounds.right <= canvasBounds.left) {
            this.x = canvasBounds.right;
        }
    }

    reactToCollision = function (collidingObject) {
        if (collidingObject.name === "Cat") {
            this.x = this.previousX - 0.01 * this.xVelocity;
            // Reset movement change possibility after collision
            const originalProbability = this.randomMovementData.movementChangeOppositePossibility;
            this.randomMovementData.movementChangeOppositePossibility = 0;
            this.changeMovement();
            this.randomMovementData.movementChangeOppositePossibility = originalProbability;
            global.health.value -= 1;
        }
    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        let images = ["./images/Left_Owner_1.png", "./images/Left_Owner_2.png", "./images/Left_Owner_3.PNG", "./images/Right_Owner_1.png", "./images/Right_Owner_2.png", "./images/Right_Owner_3.PNG"];
        this.loadImages(images);
    }
}

export { Owner };
