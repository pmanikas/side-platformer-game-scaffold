import GenericItem from './GenericItem.js';
import Platform from './Platform.js';
import Player from './Player.js';

const RIGHT_LIMIT = 0.666;
const LEFT_LIMIT = 0.333;

const BLOCK_SIZE = 128;

export default class World {
    platforms = [];
    backgrounds = [];
    decorations = [];
    scrollOffset = 0;
    width = 1024;
    height = 768;

    constructor(sprites, level) {
        this.sprites = sprites;
        this.player = new Player(sprites);
        this.level = level;
        this.map = this.level.map;
    }

    init() {
        this.scrollOffset = 0;
        this.generateMap();
        this.player.init();
    }
 
    createPlatform(x, y, width, type) {
        let image = '';

        switch (type) {
        case 'full': image = this.sprites.platformFull.img;
            break;
        case 'left': image = this.sprites.platformLeft.img;
            break;
        case 'right': image = this.sprites.platformRight.img;
            break;
        case 'middle': image = this.sprites.platform.img;
            break;
        default: image = this.sprites.platform.img;
            break;
        }
            
        return new Platform(x, y, width, image);
    }

    createGenericItem(x, y, image) {
        return new GenericItem(x, y, image);
    }

    generateMap() {
        this.platforms = [];

        this.backgrounds = [
            this.createGenericItem(0, 0, this.sprites.background.img),
            this.createGenericItem(0, this.height - this.sprites.hills.height, this.sprites.hills.img),
        ];

        const map = [...this.map].reverse(); // quck way to build bottom up

        const xPositions = [-15];
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
                case '#':
                    this.platforms.push(this.createPlatform(X, Y, width, 'full'));
                    break;
                case '~':
                    this.decorations.push(this.createGenericItem(X, Y, this.sprites.sea.img));
                    break;
                default:
                    break;
                }
            });
        });
        

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
        this.moveBackgrounds({ dir });
        this.moveDecorations({ dir });
    }

    movePlatforms({ dir }) {
        this.platforms.forEach(platform => {
            if(dir === 'left') platform.moveLeft();
            if(dir === 'right') platform.moveRight();
        });
    }

    moveBackgrounds({ dir }) {
        this.backgrounds.forEach((background, i) => {
            if(dir === 'left') background.moveLeft((i + 0.5) * 0.2);
            if(dir === 'right') background.moveRight((i + 0.5) * 0.2);
        });
    }

    moveDecorations({ dir }) {
        this.decorations.forEach(decor => {
            if(dir === 'left') decor.moveLeft(1);
            if(dir === 'right') decor.moveRight(1);
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
        
        this.collideToPlatforms(this.player);

        this.collideObjectToWorld(this.player);

        if(this.scrollOffset >= 850) this.winHandler(); // win when hitting specific decoration (compare by decoration name ---> should create decoration name)
    }
}
