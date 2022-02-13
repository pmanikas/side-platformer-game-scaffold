export default class Platform {
    constructor(x, y, image) {
        this.position = { x, y };
        this.velocity = { x: 0, y: 0 };
        this.image = image;
        this.width = 580;
        this.height = 125;
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
            this.position.x,
            this.position.y,
            this.width,
            this.height,
            this.image,
        ];
    }

    update() {
        this.position.x += this.velocity.x;
    }
}
