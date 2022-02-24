import Platform from './Objects/Platform.js';
import Player from './Player.js';
import Shuriken from './Objects/Shuriken.js';
import Block from './Objects/Block.js';
import { collides, getCollisionDetails } from './../../utilities/collisions.js';
import Object from './Objects/Object.js';
import Sign from './Objects/Sign.js';

const RIGHT_LIMIT = 0.666;
const LEFT_LIMIT = 0.333;

const BLOCK_SIZE = 128;

export default class World {
    platforms = [];
    blocks = [];
    backgrounds = [];
    decorations = [];
    shurikens = [];
    scrollOffset = 0;
    width = 1024;
    height = 768;
    level = null;
    isWinning = false;

    constructor(sprites) {
        this.sprites = sprites;
        this.player = new Player(sprites);
    }
    
    init() {
        this.map = this.level.map;
        this.scrollOffset = 0;
        this.generateMap();
        this.player.init();
        this.player.airResistance = this.level.airResistance;
        this.isWinning = false;
    }
 
    createPlatform(x, y, width, type) {            
        return new Platform(x, y, width, type, this.sprites);
    }

    createBlock(x, y) {
        return new Block(x, y, this.sprites);
    }

    createGenericObject(x, y, width, height, image) {
        return new Object(x, y, width, height, image);
    }

    createShuriken(x, y) {
        return new Shuriken(x, y, this.sprites);
    }

    createSignRight(x, y) {
        return new Sign(x, y, this.sprites);
    }

    generateMap() {
        this.platforms = [];
        this.backgrounds = null;
        this.decorations = [];
        this.blocks = [];
        this.shurikens = [];


        this.backgrounds = [
            this.createGenericObject(0, 0, this.sprites.background.width, this.sprites.background.height, this.sprites.background),
            this.createGenericObject(0, this.height - this.sprites.hills.height, this.sprites.hills.width, this.sprites.hills.height, this.sprites.hills),
            this.createGenericObject(0, this.height - this.sprites.sea.height, this.sprites.sea.width, this.sprites.sea.height,  this.sprites.sea),
        ];

        const map = [...this.map].reverse(); // quck way to build bottom up

        const xPositions = [-32];
        map.forEach((row, i) => {
            row.forEach((point, j) => {
                if(i === 0) {
                    xPositions[j + 1] = (point * BLOCK_SIZE) + xPositions[j];
                    // bottom row in map is only for setting 
                    // the width of each column 
                    return; 
                }

                const X = xPositions[j];
                const Y = this.height - (BLOCK_SIZE * (i));
                const width = map[0][j] * BLOCK_SIZE;

                switch (point) {
                case '_':
                    this.platforms.push(this.createPlatform(X, Y, width, 'middle'));
                    break;
                case '{':
                    this.platforms.push(this.createPlatform(X, Y, width, 'left'));
                    break;
                case '}':
                    this.platforms.push(this.createPlatform(X, Y, width, 'right'));
                    break;
                case '+':
                    this.platforms.push(this.createPlatform(X, Y, width, 'full'));
                    break;
                case '#':
                    this.blocks.push(this.createBlock(X, Y));
                    break;
                case '*':
                    this.shurikens.push(this.createShuriken(X, Y));
                    break;
                case '>':
                    this.decorations.push(this.createSignRight(X, Y));
                    break;
                default:
                    break;
                }
            });
        });

        this.finishObject = this.decorations.find(decor => decor.type === 'sign');

        console.log(this.finishObject);

        

        // ******************* //
        //    TEST LOCATIONS   //
        // ******************* //

        // this.platforms.forEach(platform => platform.position.x -= 12000);
        // // this.backgrounds.forEach(decoration => decoration.position.x -= 12000);
        // this.scrollOffset = 12000 / 20;
        // // ******************* //
        //    TEST LOCATIONS   //
        // ******************* //
    }

    moveOffsetHandler({ dir }) {
        if(dir === 'left') this.scrollOffset += 1;
        if(dir === 'right') this.scrollOffset -= 1;
        this.movePlatforms({ dir });
        this.moveBlocks({ dir });
        this.moveBackgrounds({ dir });
        this.moveDecorations({ dir });
        this.moveShurikens({ dir });
    }

    movePlatforms({ dir }) {
        this.platforms.forEach(platform => {
            if(dir === 'left') platform.moveLeft();
            if(dir === 'right') platform.moveRight();
        });
    }

    moveBlocks({ dir }) {
        this.blocks.forEach(block => {
            if(dir === 'left') block.moveLeft();
            if(dir === 'right') block.moveRight();
        });
    }

    moveShurikens({ dir }) {
        this.shurikens.forEach(shuriken => {
            if(dir === 'left') shuriken.moveLeft();
            if(dir === 'right') shuriken.moveRight();
        });
    }

    moveBackgrounds({ dir }) {
        this.backgrounds.forEach((background, i) =>  {
            let speed = 1;

            if(i === 0) speed = 0; // background
            if(i === 1) speed = 1; // hill
            if(i === 2) speed = 4.5; // sea

            if(dir === 'left') background.moveLeft((speed + 0.5) * 0.2);
            if(dir === 'right') background.moveRight((speed + 0.5) * 0.2);

            if(background.right < this.width) background.position.x = 0;
            else if(background.left > 0) {
                background.position.x = this.width - background.width;
            }
        });
    }

    moveDecorations({ dir }) {
        this.decorations.forEach(decor => {
            if(dir === 'left') decor.moveLeft(1);
            if(dir === 'right') decor.moveRight(1);
        });
    }

    collideToPlatforms(item) {
        this.platforms.forEach((platform) => {
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

    collideToBlocks(player) {
        this.blocks.forEach((block) => {
            const collision = getCollisionDetails(player, block);

            if (collision === '') return;

            else if(collision === 'left') {
                player.position.x = block.right - player.velocity.x;
            } else if(collision === 'right') {
                player.position.x = block.left - player.width - player.velocity.x;
            } else if(collision === 'top') {
                player.position.y = block.bottom;
                player.velocity.y *= -1;
                console.log('aouts, my head');
            } else if(collision === 'bottom') {
                player.velocity.y = 0;
                player.position.y = block.top - player.height + 1;
            }
        });
    }
    
    collideToShurikens(player) {
        for(let i = this.shurikens.length - 1; i >= 0; i--) {
            const shuriken = this.shurikens[i];

            if(collides(player, shuriken)) {
                this.shurikens.splice(i, 1);
                this.player.score ++;
            }
        }
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
        if(!this.isWinning) {
            console.log('YOU WON');
            this.isWinning = true;
        }
    }

    update() {
        this.platforms.forEach(platform => {
            platform.update();
            platform.velocity.x *= this.level.friction;
        });

        this.blocks.forEach(block => {
            block.update();
            block.velocity.x *= this.level.friction;
        });

        this.shurikens.forEach(shuriken => {
            shuriken.update();
            shuriken.velocity.x *= this.level.friction;
        });
        
        this.backgrounds.forEach(background => {
            background.update();
            background.velocity.x *= this.level.friction;
        });

        this.decorations.forEach(decor => {
            decor.update();
            decor.velocity.x *= this.level.friction;
        });

        this.player.update();
        
        this.player.velocity.y += this.level.gravity;
        
        this.player.velocity.x *= this.level.friction;
        this.player.velocity.y *= this.level.friction;
        
        this.collideToBlocks(this.player);
        this.collideToPlatforms(this.player);
        this.collideObjectToWorld(this.player);
        this.collideToShurikens(this.player);

        if(this.finishObject && this.player.left > this.finishObject.right) this.winHandler(); // win when hitting specific decoration (compare by decoration name ---> should create decoration name)
    }
}
