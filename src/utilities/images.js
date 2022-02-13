import { ruleOfThree } from './generic';

const createImage = (src) => {
    const image = new Image();
    image.src = src;
    return image;
};

const createImageAsync = async (src) => {
    const image = new Image();
    image.src = src;
    await image.decode();
    return image;
};

const findHeightByRatio = ({ widthA, heightA, widthB }) => {
    return ruleOfThree({ xA: widthA, xB: heightA, yA: widthB});
};

const findWidthByRatio = ({ widthA, heightA, heightB }) => {
    return ruleOfThree({ xA: heightA, xB: widthA, yA: heightB });
};

export { createImage, createImageAsync, findHeightByRatio, findWidthByRatio };