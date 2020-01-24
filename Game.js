class Game {
    constructor() {
    }

    start() {
        setInterval(() => this.loop(), 1000 / 60);
    }
    loop() {
        this.logic();
        this.render();
    }

    logic() {
        if (keysDown[39]) {
            player.move(1, 0);
        }
    }

    render() {
        Renderer.clear();
        background.draw();
    }
}

