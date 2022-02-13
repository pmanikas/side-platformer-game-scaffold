import settings from './../settings.js';

const { BACKGROUND } = settings;

export default class Display {
    constructor(canvas) {
        this.buffer = document.createElement('canvas').getContext('2d');
        this.context = canvas.getContext('2d');
    }

    clearCanvas() {
        this.drawRectangle(
            0,
            0,
            this.buffer.canvas.width,
            this.buffer.canvas.height,
            BACKGROUND,
        );
    }

    drawRectangle(x, y, width, height, color) {
        this.buffer.fillStyle = color;
        this.buffer.fillRect(Math.round(x), Math.round(y), width, height);
    }

    drawCircle(x, y, radius, color) {
        this.buffer.beginPath();
        this.buffer.arc(x, y, radius, 0, Math.PI * 2);
        this.buffer.fillStyle = color;
        this.buffer.fill();
        this.buffer.closePath();
    }

    drawImage(x, y, width, height, image) {
        this.buffer.drawImage(image, x, y, width, height);
    }

    drawCropImage(xs, ys, ws, hs, x, y, width, height, image) {
        this.buffer.drawImage(image, xs, ys, ws, hs, x, y, width, height);
    }

    render() {
        this.context.drawImage(
            this.buffer.canvas,
            0,
            0,
            this.buffer.canvas.width,
            this.buffer.canvas.height,
            0,
            0,
            this.context.canvas.width,
            this.context.canvas.height,
        );
    }

    resize(width, height, ratio) {
        if (height / width > ratio) {
            this.context.canvas.width = width;
            this.context.canvas.height = width * ratio;
        } else {
            this.context.canvas.width = height / ratio;
            this.context.canvas.height = height;
        }
    
        this.context.imageSmoothingEnabled = false;
    }
}
