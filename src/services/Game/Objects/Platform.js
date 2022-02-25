import Object from './Object.js';

const getPlatformImageByType = (type, sprites) => {
    switch (type) {
    case 'middle': return sprites.platform;
    default: return sprites.platform;
    }
};

export default class Platform extends Object {
    constructor(x, y, width, type, sprites) {
        const image = getPlatformImageByType(type, sprites);
        const height = image.height;

        super(x, y, width, height, image);        
    }
}
