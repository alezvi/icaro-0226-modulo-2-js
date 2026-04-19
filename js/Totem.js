class Totem {
    constructor(screen) {
        if (!(screen instanceof Screen)) {
            throw new Error('La pantalla debe ser una instancia de Screen');
        }

        this.screen = screen;

        this.steps = [
            // ...
        ];
    }
}