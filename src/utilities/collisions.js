const collides = (object1, object2) => {
    return !(
        object1.position.x > object2.position.x + object2.width ||
        object1.position.x + object1.width < object2.position.x ||
        object1.position.y > object2.position.y + object2.height ||
        object1.position.y + object1.height < object2.position.y
    );
};

const getCollisionDetails = (object1, object2) => {
    if (collides(object1, object2)) {
        const object1HalfW = object1.width / 2;
        const object1HalfH = object1.height / 2;

        const object2HalfW = object2.width / 2;
        const object2HalfH = object2.height / 2;

        const object1CenterX = object1.position.x + object1HalfW;
        const object1CenterY = object1.position.y + object1HalfH;

        const object2CenterX = object2.position.x + object2HalfW;
        const object2CenterY = object2.position.y + object2HalfH;
  
        // Calculate the distance between centers
        const diffX = object1CenterX - object2CenterX;
        const diffY = object1CenterY - object2CenterY;
  
        // Calculate the minimum distance to separate along X and Y
        const minXDist = object1HalfW + object2HalfW;
        const minYDist = object1HalfH + object2HalfH;
  
        // Calculate the depth of collision for both the X and Y axis
        const depthX = diffX > 0 ? minXDist - diffX : -minXDist - diffX;
        const depthY = diffY > 0 ? minYDist - diffY : -minYDist - diffY;
  
        // Now that you have the depth, you can pick the smaller depth and move
        // along that axis.
        if (depthX !== 0 && depthY !== 0) {
            if (Math.abs(depthX) < Math.abs(depthY)) {
                // Collision along the X axis. React accordingly
                if (depthX > 0) {
                    return 'left';
                } else {
                    return 'right';
                }
            } else {
                // Collision along the Y axis.
                if (depthY > 0) {
                    return 'top';
                } else {
                    return 'bottom';
                }
            }
        }
        else return 'none';
    }
};

export { collides, getCollisionDetails };