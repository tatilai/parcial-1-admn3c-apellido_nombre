Vue.component('componente-gestion-tareas',{

    data:function(){
        return{
            nombreProyecto:'',
            descripcionProyecto:'',
            responsableProyecto:'',
            validar:true,
            vacio:true,
            listaProyectos:[],
            estadoProyecto:[
                'Completado',
                'En progreso',
                'Sin terminar'
            ],
            colorProyecto:''
            //NO VOY  A PONER LA OPCION PARA EDITAR SOLO PARA BORRAR!!
            //agregar filtro de busqueda con arrays!!
        }
    },

    
    template:`




    `,


    methods:{
        continuarProyecto:function(){
             if(this.nombreProyecto.length=== 0 || this.descripcionProyecto.lenght===0 || this.responsableProyecto.lenght===0){
               this.validar =false
               return 
             }

             

        },

    },

       



});