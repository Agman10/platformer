class Background {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.sprite = sprites.background;
    }
    draw() {
        Renderer.img(this.sprite, this.x, this.y);
    }
}
background = new Background(0, 0);