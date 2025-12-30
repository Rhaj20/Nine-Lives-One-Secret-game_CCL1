import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class Pot extends BaseGameObject{
    blockGravityForces = true;

    reactToCollision = function (collidingObject) {
        if (collidingObject.name == "Cat") {
            collidingObject.x = collidingObject.previousX;
            collidingObject.y = collidingObject.previousY;
            global.health.value -= 1;
        }
    }

    constructor (x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["/Nine-Lives-One-Secret-game_CCL1/images/pot.png"]);
    }
}

export{Pot}