// import HttpService from '../Http.js';
import World from './World.js';

export default class Game {
    constructor(sprites) {
        this.world = new World(sprites);
        this.currentLevel = 0;
        this.isLevelLoladed = false;
        this.init();
        // this.http = http;
        // this.loadLevel().then(level => this.world = new World(sprites, level));
    }

    init() {
        // if(!this.isLevelLoladed) return;
        this.world.init();
    }

    update() {
        this.world.update();
    }

    // async loadLevel() {
    //     return this.http.get('assets/data/level-1.json');
    // }
}
