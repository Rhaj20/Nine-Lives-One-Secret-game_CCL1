import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Display extends BaseGameObject {
    blockGravityForces = true;

    reactToCollision = function (collidingObject)   {
        if (collidingObject.name == "Cat") {
            collidingObject.x = collidingObject.previousX;
            collidingObject.y = collidingObject.previousY;
        }
    }

    constructor (x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["/Nine-Lives-One-Secret-game_CCL1/images/display2.PNG"]);
    }
}

export {Display};
