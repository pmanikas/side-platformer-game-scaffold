const BLOCK_SIZE = 128;

export default class Block {
    constructor(x, y, sprites) {
        this.velocity = { x: 0, y: 0 };
        this.image = sprites.block;
        this.width = 128;
        this.height = 128;
        this.position = { 
            x: x + (BLOCK_SIZE / 2) - (this.width / 2),
            y: y + (BLOCK_SIZE / 2) - (this.height / 2)
        };
    }

    moveRight() {
        this.velocity.x += 5;
    }
    
    moveLeft() {
        this.velocity.x -= 5;
    }

    get top() { return this.position.y; }

    get right() { return this.position.x + this.width; }

    get bottom() { return this.position.y + this.height; }

    get left() { return this.position.x; }

    get specs() {
        return [
            0,
            0,
            this.image.width,
            this.image.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
            this.image.img,
        ];
    }

    update() {
        this.position.x += this.velocity.x;
    }
}
