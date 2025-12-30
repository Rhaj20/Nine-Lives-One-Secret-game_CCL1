import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Whool extends BaseGameObject {
    name = "Whool";

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
        this.loadImages(["./Nine-Lives-One-Secret-game_CCL1/images/ball_of_whool.png"]);
    }
}

export { Whool }