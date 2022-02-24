import { createImageAsync } from '../../utilities/images.js';
import SpriteItem from './SpriteItem.js';

export default class Sprites {
    constructor() {}

    async loadImages() {
        const images = await Promise.all([
            createImageAsync('assets/images/character-idle-left.png'),
            createImageAsync('assets/images/character-idle-right.png'),
            createImageAsync('assets/images/character-run-left.png'),
            createImageAsync('assets/images/character-run-right.png'),
            createImageAsync('assets/images/character-jump-left.png'),
            createImageAsync('assets/images/character-jump-right.png'),
            createImageAsync('assets/images/character-glide-left.png'),
            createImageAsync('assets/images/character-glide-right.png'),
            createImageAsync('assets/images/platform.png'),
            createImageAsync('assets/images/background.png'),
            createImageAsync('assets/images/hills.png'),
            createImageAsync('assets/images/sea.png'),
            createImageAsync('assets/images/platform-left.png'),
            createImageAsync('assets/images/platform-right.png'),
            createImageAsync('assets/images/platform-full.png'),
            createImageAsync('assets/images/shuriken.png'),
            createImageAsync('assets/images/block.png'),
            createImageAsync('assets/images/sign-right.png'),
        ]);

        this.idleLeft = new SpriteItem(images[0], 10);
        this.idleRight = new SpriteItem(images[1], 10);
        this.runLeft = new SpriteItem(images[2], 10);
        this.runRight = new SpriteItem(images[3], 10);
        this.jumpLeft = new SpriteItem(images[4], 10);
        this.jumpRight = new SpriteItem(images[5], 10);
        this.glideLeft = new SpriteItem(images[6], 10);
        this.glideRight = new SpriteItem(images[7], 10);
        this.platform = new SpriteItem(images[8], 1);
        this.background = new SpriteItem(images[9], 1);
        this.hills = new SpriteItem(images[10], 1);
        this.sea = new SpriteItem(images[11], 1);
        this.platformLeft = new SpriteItem(images[12], 1);
        this.platformRight = new SpriteItem(images[13], 1);
        this.platformFull = new SpriteItem(images[14], 1);
        this.shuriken = new SpriteItem(images[15], 8);
        this.block = new SpriteItem(images[16], 1);
        this.signRight = new SpriteItem(images[17], 1);
    }
}