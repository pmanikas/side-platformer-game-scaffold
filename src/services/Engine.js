export default class Engine {
    accumulatedTime = 0; // Amount of time that's passed since the last update.

    animationFrameRequest = undefined; // reference to the AFR

    time = undefined; // The most recent timestamp of loop execution.

    updated = false; // If the update fnc has been called since the last cycle.

    constructor(timeStep, render, update) {
        this.timeStep = timeStep; // 1000/30 = 30 FPS
        this.update = update; // The update function
        this.render = render; // The render function
    }

    run(timeStamp) { // This is one cycle of the game loop
        this.accumulatedTime += timeStamp - this.time;
        this.time = timeStamp;

        if (this.accumulatedTime >= this.timeStep * 3) {
            this.accumulatedTime = this.timeStep;
        }

        while (this.accumulatedTime >= this.timeStep) {
            this.accumulatedTime -= this.timeStep;

            this.update(timeStamp);

            this.updated = true;// If the game has updated, we need to draw it again.
        }

        /* This allows us to only draw when the game has updated. */
        if (this.updated) {
            this.updated = false;
            this.render(timeStamp);
        }

        this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);
    }

    handleRun = (timeStep) => {
        this.run(timeStep);
    };

    start() {
        this.accumulatedTime = this.timeStep;
        this.time = window.performance.now();
        this.handleRun(this.time);
    }

    stop() {
        window.cancelAnimationFrame(this.animationFrameRequest);
    }
}
