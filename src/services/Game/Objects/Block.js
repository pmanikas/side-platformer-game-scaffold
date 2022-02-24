import Object from './Object.js';

export default class Block extends Object {
    constructor(x, y, sprites) {
        const image = sprites.block;
        const width = image.width;
        const height = image.height;
        
        super(x, y, width, height, image);
    }
}
