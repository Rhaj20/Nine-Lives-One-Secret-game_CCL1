import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Cat extends BaseGameObject {
    name = "Cat";
    xVelocity = 0;
    yVelocity = 0;
    useGravityForces = true;
    

    getBoxBounds = function () {
        let bounds = {
            left: this.x + 18,
            right: this.x + this.width - 22,
            top: this.y + 80,
            bottom: this.y + this.height - 15
        }
        return bounds;
    }

    update = function() {
        //🆕 Update movement logic to allow reversal of direction
        if (this.xVelocity > 0 && this.x >= global.catStopPosition) {
            // Stop rightward movement at the stop position
            this.xVelocity = 0;
        } else {
            // Allow movement in the current direction
            this.x += this.xVelocity * global.deltaTime;
        }

        // Gravity and Y-axis movement
        this.y += this.yVelocity * global.deltaTime;

        // Animation handling when the cat is idle
        if (this.xVelocity === 0) {
            global.playerObject.switchCurrentSprites(this.animationData.firstSpriteIndex, this.animationData.firstSpriteIndex);
        }

        
    }

    

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImagesFromSpritesheet("./images/Cat_Walk.png", 7, 2);
    }
}

export { Cat }
