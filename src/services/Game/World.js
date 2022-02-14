import Decoration from './Decoration.js';
import Platform from './Platform.js';
import Player from './Player.js';

const GRAVITY = 7;
const FRICTION = 0.75;

const RIGHT_LIMIT = 0.6;
const LEFT_LIMIT = 0.3;

const PLATFORM_HEIGHT = 125;
const PLATFORM_WIDTH = 580 - 1;

export default class World {
    map = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'flag'],
        [' ', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_'],
        [' ', '_', ' ', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', ' ', ' ', ' ', ' ', ' ', '_', ' 10', '_', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['_', '_', '_', ' 1', '_', '_', '_', ' 2', '_', '_', '_', '_', '_', '_', ' 1', '_', '_', '_', '_', '_', '_', '_', '_', ' 10', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ];

    platforms = [];

    powerUps = [];

    name = 1;

    constructor(sprites) {
        this.sprites = sprites;
        this.player = new Player(sprites);
        this.width = 1024;
        this.height = 768;
        this.scrollOffset = 0;
    }

    init() {
        this.generateMap();
        this.player.init();
        this.scrollOffset = 0;
    }
 
    createPlatform(x, y, image) {
        return new Platform(x, y, image);
    }

    createObject(x, y, width, height, image) {
        return new Decoration(x, y, width, height, image);
    }

    generateMap() {
        this.platforms = [];
        this.decorations = [];
        const map = [...this.map].reverse(); // quck way to build bottom up

        map.forEach((row, i) => {
            let lastX = -15;

            row.forEach((point) => {
                const Y = this.height - (PLATFORM_HEIGHT * (i + 1));

                if(point === '_') {
                    this.platforms.push(this.createPlatform(lastX, Y, this.sprites.platform.img));
                    lastX += PLATFORM_WIDTH;
                }

                else if(point.indexOf(' ' >= 0)) { // death gaps with sizes
                    const size = point.split(' ')[1];
                    const width = size ? Number(size) * 100 : PLATFORM_WIDTH;
                    lastX += width;
                }
            });
        });

        
        this.decorations = [
            this.createObject(0, 0, this.sprites.background.img),
            this.createObject(0, this.height - this.sprites.hills.height, this.sprites.hills.img),
        ];



        // ******************* //
        //    TEST LOCATIONS   //
        // ******************* //

        // this.platforms.forEach(platform => platform.position.x -= 0);

        // ******************* //
        //    TEST LOCATIONS   //
        // ******************* //
    }



    moveOffsetHandler({ dir }) {
        if(dir === 'left') this.scrollOffset += 1;
        if(dir === 'right') this.scrollOffset -= 1;
        this.movePlatforms({ dir });
        this.moveDecorations({ dir });
    }

    movePlatforms({ dir }) {
        this.platforms.forEach(platform => {
            if(dir === 'left') platform.moveLeft();
            if(dir === 'right') platform.moveRight();
        });
    }

    moveDecorations({ dir }) {
        this.decorations.forEach((decor, i) => {
            if(dir === 'left') decor.moveLeft((i + 0.5) * 0.2);
            if(dir === 'right') decor.moveRight((i + 0.5) * 0.2);
        });
    }

    collideToPlatforms(item) {
        return this.platforms.forEach((platform) => {
            if(
                item.bottom <= platform.top && 
                item.bottom + item.velocity.y >= platform.position.y &&
                item.right >= platform.left &&
                item.left <= platform.right
            ) {
                item.position.y = platform.position.y - item.height;
                item.velocity.y = 0;
            }
        });
    }

    collideObjectToWorld(object) {
        if(object.left < this.width * LEFT_LIMIT) {
            if(this.scrollOffset < 0) {
                if(object.left < 0) object.position.x = 0; 
            }else{
                object.position.x = this.width * LEFT_LIMIT;
                this.moveOffsetHandler({ dir: 'right' });
                object.velocity.x = 0;
            }
        } else if(object.right > this.width * RIGHT_LIMIT) {
            object.position.x = this.width * RIGHT_LIMIT - object.width;
            object.velocity.x = 0;
            if(this.player.direction === 'right') {
                this.moveOffsetHandler({ dir: 'left' });
            }
        }
    
        if(object.top >= this.height) {
            this.loseHandler();
        }
    }

    loseHandler() {
        this.player.lifes -= 1;
        this.init();
    }

    winHandler() {
        console.log('YOU WON');
    }

    update() {
        this.platforms.forEach(platform => {
            platform.update();
            platform.velocity.x *= FRICTION;
        });

        this.decorations.forEach(decor => {
            decor.update();
            decor.velocity.x *= FRICTION;
        });

        this.player.update();
        
        this.player.velocity.y += GRAVITY;
        
        this.player.velocity.x *= FRICTION;
        this.player.velocity.y *= FRICTION;
        
        this.collideToPlatforms(this.player);

        this.collideObjectToWorld(this.player);

        if(this.scrollOffset >= 850) this.winHandler();
    }
}
