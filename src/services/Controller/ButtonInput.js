export default class ButtonInput {
    isActive = false;

    isPressed = false;

    getInput(isPressed) {
        if (this.isPressed !== isPressed) this.isActive = isPressed;
        this.isPressed = isPressed;
    }
}
