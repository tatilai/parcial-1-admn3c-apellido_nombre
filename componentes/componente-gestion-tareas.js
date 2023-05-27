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

        }
    },



});