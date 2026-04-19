class WelcomeStep extends Step {
    constructor(name) {
        super(name)
    }

    render() {
        let titulo = '<h1>Bienvenido a Icaro :)</h1>';

        let accion = '<p>Toque la pantalla para comenzar</p>';
    
        const app = document.getElementById('app');
    
        app.innerHTML = titulo;
        app.innerHTML += accion;
    }
}
