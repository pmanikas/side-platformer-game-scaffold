import Object from './Object.js';

const getSize = (size) => {
    switch (size) {
    case 'small': return 64;
    case 'medium': return 96; 
    case 'large': return 128;
    default: return 128;
    }
};

export default class Block extends Object {
    constructor(x, y, size, sprites) {
        const width = getSize(size);
        const height = width;
        const image = sprites.block;
        
        super(x, y, width, height, image);
    }
}
