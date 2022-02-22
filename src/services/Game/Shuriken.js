import { findWidthByRatio } from '../../utilities/images';

const BLOCK_SIZE = 128;

export default class Shuriken {
    height = 96;
    currentImageFrame = 0;
    updateCounter = 0;
    velocity = {
        x: 0,
        y: 0
    };

    constructor(x, y, sprites) {
        this.image = sprites.shuriken;
        this.width = findWidthByRatio({ widthA: this.image.width, heightA: this.image.height, heightB: this.height });
        this.position = {
            x: x + (BLOCK_SIZE / 2) - (this.width / 2),
            y: y + (BLOCK_SIZE / 2) - (this.height / 2)
        };
    }

    get specs() {
        return [
            this.image.width * this.currentImageFrame,
            0,
            this.image.width,
            this.image.height,
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height, 
            this.image.img
        ];
    }

    get top() {
        return this.position.y;
    }

    get right() {
        return this.position.x + this.width;
    }

    get bottom() {
        return this.position.y + this.height;
    }

    get left() {
        return this.position.x;
    }

    get isAboutToTouchGround() {
        return this.velocity.y < 0.1 && this.velocity.y > -0.1;
    }

    get isTouchingGround() {
        return this.velocity.y === 0;
    }

    moveRight() {
        this.velocity.x += 5;
    }
    
    moveLeft() {
        this.velocity.x -= 5;
    }

    handleImageAnimationLoop() {
        if(this.updateCounter % 4 !== 0) return;
        if(this.currentImageFrame + 1 === this.image.frames) this.currentImageFrame = 0;
        else this.currentImageFrame += 1;
    }

    update() {
        this.updateCounter ++;

        this.handleImageAnimationLoop();

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}
