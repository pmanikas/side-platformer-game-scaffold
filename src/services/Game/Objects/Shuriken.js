import Object from './Object.js';

const BLOCK_SIZE = 128;

export default class Shuriken extends Object {
    constructor(x, y, sprites) {
        const width = 64;
        const height = 64;
        const image = sprites.shuriken;

        super(x, y, width, height, image);

        this.position = {
            x: x + (BLOCK_SIZE / 2) - (this.width / 2),
            y: y + (BLOCK_SIZE / 2) - (this.height / 2)
        };
    }

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
            this.image.img
        ];
    }
}
