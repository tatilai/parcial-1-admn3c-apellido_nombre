Vue.component('componente-gestion-proyectos',{

    data:function(){
        return{
            nombreProyecto:'',
            descripcionProyecto:'',
            responsableProyecto:'',
            validar:true,
            vacio:true,
            filtro:'',
            proyectos:[],
            listaProyectos:[],
            estadoProyecto:[
                'Completado',
                'En progreso',
                'Sin terminar'
            ],
            colorProyecto:''
            //NO VOY  A PONER LA OPCION PARA EDITAR SOLO PARA BORRAR!!
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

             if(this.proyectoModificado===null){
                this.validar =true;
                this.vacio =false;

               this.listaProyectos.push({
                nombreProyecto:this.nombreProyecto,
                responsableProyecto:this.responsableProyecto,
                descripcionProyecto:this.descripcionProyecto,
                estado:'En progreso'                


               });
               this.nombreProyecto = '';
               this.responsableProyecto = '';
               this.descripcionProyecto = '';

             }else{
                this.listaProyectos[this.proyectoModificado].nombreProyecto = this.nombreProyecto;
                this.listaProyectos[this.proyectoModificado].responsableProyecto = this.responsableProyecto;
                this.listaProyectos[this.proyectoModificado].descripcionProyecto = this.descripcionProyecto;
                this.proyectoModificado = null;
              
                this.nombreProyecto = '';
                this.responsableProyecto = '';
                this.descripcionProyecto = '';
             }

        },

        eliminar:function(index){
            this.listaProyectos.splice(index,1)
        },

        editar:function(index){
            this.nombreProyecto = this.listaProyectos[index].nombreProyecto;
            this.responsableProyecto = this.listaProyectos[index].responsableProyecto;
            this.descripcionProyecto = this.listaProyectos[index].descripcionProyecto;
            this.proyectoModificado = index;

        },
        //hola

    },


    



});