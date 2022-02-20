import Decoration from './Decoration.js';
import Platform from './Platform.js';
import Player from './Player.js';

const RIGHT_LIMIT = 0.666;
const LEFT_LIMIT = 0.333;

const PLATFORM_HEIGHT = 128;
const PLATFORM_WIDTH = 1024;

export default class World {
    

    platforms = [];

    powerUps = [];


    constructor(sprites, level) {
        this.sprites = sprites;
        this.player = new Player(sprites);
        this.width = 1024;
        this.height = 768;
        this.scrollOffset = 0;
        this.level = level;
        this.map = this.level.map;
    }

    init() {
        this.scrollOffset = 0;
        this.generateMap();
        this.player.init();
    }
 
    createPlatform(x, y, width) {
        return new Platform(x, y, width, this.sprites.platform.img);
    }

    createDecoration(x, y, image) {
        return new Decoration(x, y, image);
    }

    generateMap() {
        this.platforms = [];
        this.decorations = [];
        const map = [...this.map].reverse(); // quck way to build bottom up

        const xPositions = [-15];
        map.forEach((row, i) => {
            row.forEach((point, j) => {
                const Y = this.height - (PLATFORM_HEIGHT * (i));
                if(i === 0) {
                    xPositions[j + 1] = (point * (PLATFORM_WIDTH / 8)) + xPositions[j];
                    return;
                }
                
                // console.log(type);

                if(point === '_') {
                    this.platforms.push(this.createPlatform(xPositions[j], Y, map[0][j] * (PLATFORM_WIDTH / 8)));
                }


                // else if(point.indexOf(' ' >= 0)) { // death gaps with sizes
                //     const size = point.split(' ')[1];
                //     const width = size ? Number(size) * 100 : PLATFORM_WIDTH;
                //     lastX += width;
                // }
            });
        });
        
        this.decorations = [
            this.createDecoration(0, 0, this.sprites.background.img),
            this.createDecoration(0, this.height - this.sprites.hills.height, this.sprites.hills.img),
        ];



        // ******************* //
        //    TEST LOCATIONS   //
        // ******************* //

        // this.platforms.forEach(platform => platform.position.x -= 12000);
        // // this.decorations.forEach(decoration => decoration.position.x -= 12000);
        // this.scrollOffset = 12000 / 20;
        // // ******************* //
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
        // console.log(this.scrollOffset);
        this.platforms.forEach(platform => {
            platform.update();
            platform.velocity.x *= this.level.friction;
        });

        this.decorations.forEach(decor => {
            decor.update();
            decor.velocity.x *= this.level.friction;
        });

        this.player.update();
        
        this.player.velocity.y += this.level.gravity;
        
        this.player.velocity.x *= this.level.friction;
        this.player.velocity.y *= this.level.friction;
        
        this.collideToPlatforms(this.player);

        this.collideObjectToWorld(this.player);

        if(this.scrollOffset >= 850) this.winHandler(); // win when hitting specific decoration (compare by decoration name ---> should create decoration name)
    }
}
