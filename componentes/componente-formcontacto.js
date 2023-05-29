Vue.component('componente-formcontacto',{
    data:function(){

        return{
            data() {
                return {
                  equipos: [
                    {
                      nombre: '',
                      miembros: [
                        {
                          nombre: '',
                          rol: ''
                        }
                      ]
                    }
                  ]
                }
              }
        }
    },

});