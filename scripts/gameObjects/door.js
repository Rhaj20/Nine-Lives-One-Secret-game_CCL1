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
        this.loadImages(["/Nine-Lives-One-Secret-game_CCL1/images/door.PNG"]);
    }
}

export{Door}