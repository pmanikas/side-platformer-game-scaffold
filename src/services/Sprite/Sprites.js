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
            createImageAsync('assets/images/character-glide-right.png')
        ]);

        this.idleLeft = new SpriteItem(images[0], 10);
        this.idleRight = new SpriteItem(images[1], 10);
        this.runLeft = new SpriteItem(images[2], 10);
        this.runRight = new SpriteItem(images[3], 10);
        this.jumpLeft = new SpriteItem(images[4], 10);
        this.jumpRight = new SpriteItem(images[5], 10);
        this.glideLeft = new SpriteItem(images[6], 10);
        this.glideRight = new SpriteItem(images[7], 10);
    }
}