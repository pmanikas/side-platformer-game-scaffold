import Object from './Object.js';

export default class Sign extends Object {
    constructor(x, y, sprites) {
        const image = sprites.signRight;
        const type = 'sign';
        const width = image.width;
        const height = image.height;

        super(x, y, width, height, image, type);
    }
}
