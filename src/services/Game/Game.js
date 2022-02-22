import HttpService from '../Http.js';
import Level from './Level.js';
import World from './World.js';

const levels = [
    'assets/data/level-1.json',
    'assets/data/level-2.json',
    'assets/data/level-3.json',
];

export default class Game {
    http = new HttpService();
    currentLevel = 0;
    isLevelLoading = false;

    constructor(sprites) {
        this.sprites = sprites;
        this.world = new World(this.sprites);
    }
    
    async loadLevel(level = 1) {
        return this.http.get(levels[level - 1])
            .then((levelDetails) => {
                this.currentLevel = level;
                this.world.level = new Level(levelDetails);
                this.init();
                this.isLevelLoading = false;
            });
    }

    init() {
        this.world.init();
    }

    loadNextLevel() {
        this.loadLevel(this.currentLevel + 1);
    }
    
    update() {
        this.world.update();
        
        if(this.world.isWinning && !this.isLevelLoading) {
            this.isLevelLoading = true;
            this.loadNextLevel();
        }
    }
}
