class DocumentFormStep extends Step {
    constructor(name) {
        super(name)
    }

    render() {
        let titulo = '<h1>Ingrese el número de documento</h1>';

        const el = document.createElement('div');
    
        el.innerHTML = titulo;

        return el;
    }
}
