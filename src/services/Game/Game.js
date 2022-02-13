import World from './World.js';

export default class Game {
    constructor(sprites) {
        this.world = new World(sprites);
        this.init();
    }

    init() {
        this.world.init();
    }

    update() {
        this.world.update();
    }
}
