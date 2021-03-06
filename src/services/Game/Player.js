import { findWidthByRatio } from '../../utilities/images';
// import Object from './Objects/Object';

export default class Player  {
    lifes = 3;
    score = 0;
    height = 128;

    constructor(sprites) {
        
        this.sprites = sprites;
        this.image = sprites.idleRight;
        this.width = findWidthByRatio({ widthA: this.image.width, heightA: this.image.height, heightB: this.height });
    }

    init() {
        this.lastDirection = 'right';
        this.direction = 'right';
        this.airResistance = 1;
        this.currentAirResistance = 0;
        this.currentImageFrame = 0;
        this.hasSuperPower = false;
        this.velocity = {
            x: 0,
            y: 0,
        };
        this.position = {
            x: 0,
            y: 0,
        };
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

    get isGliding() {
        return this.currentAirResistance > 0;
    }

    moveRight() {
        this.lastDirection = 'right';
        this.direction = 'right';
        this.velocity.x += 5;
    }
    
    moveLeft() {
        this.lastDirection = 'left';
        this.direction = 'left';
        this.velocity.x -= 5;
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
        if(this.isTouchingGround) {
            if(this.isMovingRight) this.image = this.sprites.runRight;
            
            else if(this.isMovingLeft) this.image = this.sprites.runLeft;

            else if(this.isNotMoving) {
                if(this.isLookingLeft)  this.image = this.sprites.idleLeft;
                
                else if(this.isLookingRight)  {
                    this.image = this.sprites.idleRight;
                }
            }
        } 
        
        else if(this.isMovingUpwards) {
            if(this.isLookingLeft) this.image = this.sprites.jumpLeft;
            
            else if(this.isLookingRight) this.image = this.sprites.jumpRight;
        } 
        
        else if(this.isMovingDownwards) {
            if(this.isLookingLeft) {
                this.image = this.isGliding ? this.sprites.glideLeft : this.sprites.jumpLeft;
            } 
            
            else if(this.isLookingRight) {
                this.image = this.isGliding ? this.sprites.glideRight : this.sprites.jumpRight;
            }
        }

        this.width = findWidthByRatio({ widthA: this.image.width, heightA: this.image.height, heightB: this.height });
    }

    handleImageAnimationLoop() {
        if(this.currentImageFrame + 1 === this.image.frames) this.currentImageFrame = 0;
        else this.currentImageFrame += 1;
    }

    update() {
        this.handleImageUpdate();
        this.handleImageAnimationLoop();

        if(this.isAboutToTouchGround) this.currentAirResistance = 0;

        this.velocity.y -= this.currentAirResistance;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}
