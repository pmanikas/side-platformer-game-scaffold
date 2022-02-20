import HttpService from '../Http.js';
import Level from './Level.js';
import World from './World.js';

export default class Game {
    constructor(sprites) {
        // this.world = new World(sprites);
        this.sprites = sprites;
        this.currentLevel = 0;
        this.isLevelLoladed = false;
        this.isLoadingLevel = false;
        // this.init();
        this.http = new HttpService();
    }

    init() {
        if(!this.isLevelLoladed) return;
        this.world.init();
    }

    update() {
        this.world.update();
    }

    async loadLevel() {
        this.isLevelLoladed = false;
        return this.http.get('assets/data/level-1.json')
            .then(level => {
                this.isLevelLoladed = true;
                this.level = new Level(level);
                this.world = new World(this.sprites, this.level);
                this.init();
            });
    }
}
