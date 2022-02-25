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
    isWinning = false;

    constructor(sprites) {
        this.sprites = sprites;
        this.world = new World(this.sprites);
    }
    
    async loadLevel(level = 1) {
        if(!levels[level - 1]) return this.finishGameHandler();
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

    reset() {
        this.loadLevel(1);
    }

    finishGameHandler() {
        this.reset();
    }

    loadNextLevel() {
        this.loadLevel(this.currentLevel + 1);
    }

    winHandler() {
        if(!this.isLevelLoading) {
            console.log('YOU WON');
            this.isLevelLoading = true;
            this.loadNextLevel();
        }
    }

    loseHandler() {
        this.world.player.lifes = 3;
        this.world.player.score = 0;
        this.isLevelLoading = true;
        this.reset();
    }
    
    update() {
        this.world.update();

        if(this.world.player.lifes < 0 ) this.loseHandler();

        if(this.world.player.left > this.world.finishObject.right) {
            this.winHandler();
        }
    }
}
