import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class Door extends BaseGameObject{

    reactToCollision = function (collidingObject) {
        if (collidingObject.name == "Cat") {
            global.gameWon = true;
        }
    }

    constructor (x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["../images/door.PNG"]);
    }
}

export{Door}