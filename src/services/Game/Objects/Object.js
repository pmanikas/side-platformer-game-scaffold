export default class Object {
    velocity = { x: 0, y: 0 };
    currentImageFrame = 0;

    constructor(x, y, width, height, image) {
        this.width = width;
        this.height = height;
        this.position = { x, y };
        this.image = image;
    }

    moveRight(parallaxOffset = 1) {
        this.velocity.x += (5 * parallaxOffset);
    }
    
    moveLeft(parallaxOffset = 1) {
        this.velocity.x -= (5 * parallaxOffset);
    }

    get top() { return this.position.y; }

    get right() { return this.position.x + this.width; }

    get bottom() { return this.position.y + this.height; }

    get left() { return this.position.x; }

    get specs() {
        return [
            this.image.width * this.currentImageFrame,
            0,
            this.width,
            this.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
            this.image.img,
        ];
    }

    handleImageAnimationLoop() {
        if(this.currentImageFrame + 1 === this.image.frames) this.currentImageFrame = 0;
        else this.currentImageFrame += 1;
    }

    update() {
        this.handleImageAnimationLoop();

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}
