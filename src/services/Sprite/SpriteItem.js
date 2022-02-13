export default class SpriteItem {
    constructor(image, frames) {
        this.img = image;
        this.frames = frames;
        this.width = image.width / frames || 1;
        this.height = image.height;
    }
}