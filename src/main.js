import Controller from './services/Controller/Controller.js';
import Display from './services/Display.js';
import Engine from './services/Engine.js';
import Game from './services/Game/Game.js';
import Sprites from './services/Sprite/Sprites.js';
import './design/style.scss';

const DESIRABLE_FPS = 30;
const TIME_STEP = 1000 / DESIRABLE_FPS;

const canvas = document.querySelector('[data-element=canvas]');
const lifesEl = document.querySelector('[data-element=lifes-value]');
const scoreEl = document.querySelector('[data-element=score-value]');
const levelEl = document.querySelector('[data-element=level-value]');

/// /////////////////
// / /   CORE    ////
// / ////////////////
const sprites = new Sprites();

sprites.loadImages().then(() => {

    const display = new Display(canvas);
    const controller = new Controller();
    const game = new Game(sprites);
    const engine = new Engine(TIME_STEP, render, update);

    // window.pacman = { display, controller, game, engine };

    /// ////////////////
    /// / FUNCTIONS ////
    /// ////////////////
    function render() {
        const { world } = game;

        display.clearCanvas();

        world.backgrounds.forEach((item) => display.drawImage(...item.specs));

        world.decorations.forEach((item) => display.drawImage(...item.specs));
    
        world.platforms.forEach((platform) => display.drawCropImage(...platform.specs));

        display.drawCropImage(...world.player.specs);

        display.render();
    }

    function control() {
        if (controller.up.isActive) { 
            game.world.player.jump();
            controller.up.isActive = false;
        }
        else if (controller.right.isActive) { game.world.player.moveRight(); }
        // else if (controller.down.isActive) { game.world.player.moveDown(); }
        else if (controller.left.isActive) { game.world.player.moveLeft(); }
        else if(!controller.left.isActive && !controller.right.isActive) {
            game.world.player.stop();
        }


        // if(controller.shift.isActive) game.init(); // TEST INIT   

        // WE NEED GLOBAL SPEED TO MAKE IT MORE PROFESSIONAL
        // if(controller.shift.isActive) game.world.player.speedUp();    
        // else game.world.player.speedDown();    

        // else if(!controller.left.isActive) game.world.player.stop(); // JUST IN CASE - CLEAR IF NO ISSUES
    
    }

    function updateDetailsLayer() {
        levelEl.innerText = game.world.level.name;
        lifesEl.innerText = game.world.player.lifes;
        scoreEl.innerText = game.world.player.score;
    }

    function update() {
       
        control();

        game.update();

        updateDetailsLayer();
    }

    function handleKeyDownUp(e) {
        controller.handleKeyDownUp(e);
    }

    function handleResize() {
        display.resize(
            window.innerWidth,
            window.innerHeight,
            game.world.height / game.world.width
        );
        display.render();
    }

    /// /////////////////
    /// / INITIALIZE ////
    /// /////////////////
    
    
    game.loadLevel()
        .then(() => {
            display.buffer.canvas.height = game.world.height;
            display.buffer.canvas.width = game.world.width;

            window.addEventListener('keydown', handleKeyDownUp);
            window.addEventListener('keyup', handleKeyDownUp);
            window.addEventListener('resize', handleResize);
        
            engine.start();
            handleResize();
        });
});

/// ////////////////
/// /   TEST    ////
/// ////////////////
