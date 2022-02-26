export default class Monster {
    constructor(x, y, sprites) {
        this.sprites = sprites;
        this.image = sprites.monsterBubbleIdleLeft;
        this.width = 64;
        this.height = 64;
        this.position = {
            x,
            y
        };
        this.lastDirection = 'left';
        this.direction = 'left';
        this.airResistance = 1;
        this.currentAirResistance = 0;
        this.currentImageFrame = 0;
        this.velocity = {
            x: 0,
            y: 0,
        };
    }

    clone() {
        return new Monster(this.position.x, this.position.y, this.sprites);
    }


    get specs() {
        return [
            this.image.width * this.currentImageFrame,
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

    get top() {
        return this.position.y;
    }

    get right() {
        return this.position.x + this.width;
    }

    get bottom() {
        return this.position.y + this.height;
    }

    get left() {
        return this.position.x;
    }

    get isLookingLeft() {
        return this.lastDirection === 'left';
    }

    get isLookingRight() {
        return this.lastDirection === 'right';
    }

    get isMovingUpwards() {
        return this.velocity.y < 0;
    }

    get isMovingDownwards() {
        return this.velocity.y > 0;
    }

    get isMovingLeft() {
        return this.direction === 'left';
    }

    get isMovingRight() {
        return this.direction === 'right';
    }

    get isNotMoving() {
        return this.direction === '';
    }

    get isAboutToTouchGround() {
        return this.velocity.y < 0.1 && this.velocity.y > -0.1;
    }

    get isTouchingGround() {
        return this.velocity.y === 0;
    }

    moveRight(speed = 5) {
        this.lastDirection = 'right';
        this.direction = 'right';
        this.velocity.x += speed;
    }
    
    moveLeft(speed = 5) {
        this.lastDirection = 'left';
        this.direction = 'left';
        this.velocity.x -= speed;
    }

    offsetRight(speed = 5) {
        this.velocity.x += speed;
    }
    
    offsetLeft(speed = 5) {
        this.velocity.x -= speed;
    }

    jump() {
        if(this.isTouchingGround) this.velocity.y -= 128;
        else if(!this.isGliding) this.currentAirResistance = this.airResistance;
        else this.currentAirResistance = 0;
    }

    stop() {
        this.direction = '';
    }

    handleImageUpdate() {
        if(this.isLookingLeft) this.image = this.sprites.monsterBubbleIdleLeft;
            
        else if(this.isLookingRight) this.image = this.sprites.monsterBubbleIdleRight;
    }

    handleImageAnimationLoop() {
        if(this.currentImageFrame + 1 === this.image.frames) this.currentImageFrame = 0;
        else this.currentImageFrame += 1;
    }

    update() {
        // this.handleImageUpdate();
        this.handleImageAnimationLoop();

        this.handleImageUpdate();
        
        if(this.isAboutToTouchGround) this.currentAirResistance = 0;

        this.velocity.y -= this.currentAirResistance;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}
