import ButtonInput from './ButtonInput.js';

export default class Controller {
    down = new ButtonInput();

    left = new ButtonInput();

    right = new ButtonInput();

    up = new ButtonInput();

    shift = new ButtonInput();

    keyDownUp({ type, keyCode }) {
        const isPressed = type === 'keydown';
        // console.log(keyCode);

        switch (keyCode) {
        case 37:
            this.left.getInput(isPressed);
            break;
        case 32:
            this.up.getInput(isPressed);
            break;
        case 39:
            this.right.getInput(isPressed);
            break;
        case 40:
            this.down.getInput(isPressed);
            break;
        case 16:
            this.shift.getInput(isPressed);
            break;
        default: break;
        }
    }

    handleKeyDownUp = (event) => {
        this.keyDownUp(event);
    };
}
