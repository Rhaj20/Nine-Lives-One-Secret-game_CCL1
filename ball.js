import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Ball extends BaseGameObject {
    name = "Ball";

    getBoxBounds = function () {
        let bounds = {
            left: this.x + 25,
            right: this.x + this.width - 25,
            top: this.y + 25,
            bottom: this.y + this.height - 25
        }
        return bounds;
    };

    reactToCollision = function(collidingObject){
        switch(collidingObject.name){
            case "Cat":
                this.active = false;
                global.health.value += 1;
                global.counter++;
                break;
        }
    }

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.loadImages(["./images/ball.png"]);
    }
}

export { Ball }