class Screen {
    constructor(w = 500, h = 300) {
        if (typeof w != 'number') {
            throw new Error('El ancho debe ser un numero')
        }

        if (w < 500) {
            throw new Error('El ancho de la pantalla debe ser al menos de 500 pixeles')
        }

        if (typeof h != 'number') {
            throw new Error('El alto debe ser un numero')
        }

        if (h < 300) {
            throw new Error('La altura de la pantalla debe ser al menos de 300 pixeles')
        }
        
        this.width = w
        this.height = h
        this.turnedOn = false
    }

    turnOn() {
        if (this.turnedOn) return;

        this.turnedOn = true;

        this.welcome();
    }

    welcome() {
        console.log('Encendiendo...')
    }
}
