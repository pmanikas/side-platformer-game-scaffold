import GenericItem from './GenericItem.js';
import Platform from './Platform.js';
import Player from './Player.js';
import Shuriken from './Shuriken.js';

const RIGHT_LIMIT = 0.666;
const LEFT_LIMIT = 0.333;

const BLOCK_SIZE = 128;

export default class World {
    platforms = [];
    backgrounds = [];
    decorations = [];
    shurikens = [];
    scrollOffset = 0;
    width = 1920;
    height = 1080;
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
        this.isWinning = false;
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

    createShuriken(x, y) {
        return new Shuriken(x, y, this.sprites);
    }

    generateMap() {
        this.platforms = [];

        this.backgrounds = {
            background: this.createGenericItem(0, 0, this.sprites.background.img),
            hills: this.createGenericItem(0, this.height - this.sprites.hills.height, this.sprites.hills.img),
            sea: this.createGenericItem(0, this.height - this.sprites.sea.height, this.sprites.sea.img),
        };

        const map = [...this.map].reverse(); // quck way to build bottom up

        const xPositions = [-16];
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
                case '*':
                    this.shurikens.push(this.createShuriken(X, Y));
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
        this.moveShurikens({ dir });
    }

    movePlatforms({ dir }) {
        this.platforms.forEach(platform => {
            if(dir === 'left') platform.moveLeft();
            if(dir === 'right') platform.moveRight();
        });
    }

    moveShurikens({ dir }) {
        this.shurikens.forEach(shuriken => {
            if(dir === 'left') shuriken.moveLeft();
            if(dir === 'right') shuriken.moveRight();
        });
    }

    moveBackgrounds({ dir }) {
        let speed = 1;

        for (const key in this.backgrounds) {
            if(key === 'background') speed = 0;
            else if(key === 'hills') speed = 1;
            else if(key === 'sea') speed = 0;
            
            if(dir === 'left') this.backgrounds[key].moveLeft((speed + 0.5) * 0.2);
            if(dir === 'right') this.backgrounds[key].moveRight((speed + 0.5) * 0.2);
        }
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
    
    collideToShurikens(player) {
        for(let i = this.shurikens.length - 1; i >= 0; i--) {
            const shuriken = this.shurikens[i];

            if(
                player.top <= shuriken.bottom && 
                player.bottom >= shuriken.top &&
                player.right >= shuriken.left &&
                player.left <= shuriken.right
            ) {
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

        this.shurikens.forEach(shuriken => {
            shuriken.update();
            shuriken.velocity.x *= this.level.friction;
        });
        
        for (const property in this.backgrounds) {
            this.backgrounds[property].update();
            this.backgrounds[property].velocity.x *= this.level.friction;
        }

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

        this.collideToShurikens(this.player);

        if(this.scrollOffset >= 150) this.winHandler(); // win when hitting specific decoration (compare by decoration name ---> should create decoration name)
    }
}
