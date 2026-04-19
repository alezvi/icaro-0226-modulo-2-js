console.log('totem v3')

const screen = new Screen() 
const totem = new Totem(screen)

totem.steps.push( new WelcomeStep('Pantalla de inicio') )
totem.steps.push( new Step('Ingresar numero de documento') )
totem.steps.push( new Step('Seleccionar el área') )
totem.steps.push( new Step('Retirar el ticket') )

