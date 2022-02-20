export default class Level {
    constructor({ id, name, gravity, friction, map, nextLevelId }) {
        this.id = id;
        this.name = name;
        this.gravity = gravity;
        this.friction = friction;
        this.map = map;
        this.nextLevelId = nextLevelId;
    }
}