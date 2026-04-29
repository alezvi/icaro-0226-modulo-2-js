const screen = new Screen() 
const totem = new Totem(screen)

totem.steps.push( new WelcomeStep('Pantalla de inicio') )
totem.steps.push( new DocumentFormStep('Ingresar numero de documento') )
totem.steps.push( new Step('Seleccionar el área') )
totem.steps.push( new Step('Retirar el ticket') )

const app = document.getElementById('app');
app.style.backgroundColor = '#DDD';
app.style.border = '3px solid black';
app.style.height = '100vh';

const controlsBar = document.createElement('div');
app.appendChild(controlsBar);

const display = document.createElement('div');
display.setAttribute('id', 'display');
app.appendChild(display);

const turnOnButton = document.createElement('button');

let currentStep = 0;

turnOnButton.addEventListener('click', function () {
    totem.screen.turnOn()
    turnOnButton.innerHTML = 'Apagar';

    const step = totem.steps[currentStep]
    document.title = step.name;
    const html = step.render();
    display.innerHTML = '';
    display.appendChild(html);
    currentStep++;
});

turnOnButton.style.border = '1px solid gray';
turnOnButton.style.width = '100%';
turnOnButton.style.padding = '3% 6%';
turnOnButton.style.margin = '0px auto';
turnOnButton.style.fontSize = '3rem';
turnOnButton.innerText = 'Encender';

controlsBar.appendChild(turnOnButton);

console.log(app)
