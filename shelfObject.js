import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class ShelfObject extends BaseGameObject {
    blockGravityForces = true;

    reactToCollision = function (collidingObject)   {
        if (collidingObject.name == "Cat") {
            collidingObject.x = collidingObject.previousX;
            collidingObject.y = collidingObject.previousY;
        }
    }

    constructor (x, y, width, height) {
        // super(x, y, width, height);
        super(x, y, width, height);
        // this.width = 180;
        // this.height = 60;
        this.loadImages(["./images/shelf2.PNG"]);
    }
}

export {ShelfObject};