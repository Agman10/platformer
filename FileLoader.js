FileLoader = new class FileLoader {
    constructor() { }

    importSprite(path) {
        var sprite = new Image();
        sprite.src = path;
        return sprite;
    }

}

const sprites = {
    background: FileLoader.importSprite('sprites/background.png'),
}