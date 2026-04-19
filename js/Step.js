class Step {
    constructor(name) {
        if (typeof name != 'string') {
            throw new Error('El nombre debe ser un string')
        }

        if (name.length < 10) {
            throw new Error('El nombre debe ser al menos de 10 caracteres')
        }

        if (name.length > 50) {
            throw new Error('El nombre debe ser como máximo de 50 caracteres')
        }

        this.name = name;
    }

    render() {
        // mostrar lo que ve el usuario (?)
    }
}
