
const Totem = {

    steps : [
        {
            greeting : 'Bienvenido a Banco Icaro',
            action : 'Toque la pantalla para continuar',
            image : {
                width: 120,
                height: 80,
                url : '...',
            },
        },
    ],

    screen : {
        width: 1200,
        height: 800,
        disposition: 'horizontal',
        isOn : false,

        turnOn : function () {
            this.isOn = true;
        }
    },

    printer : {

    }

}