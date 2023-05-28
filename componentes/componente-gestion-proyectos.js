Vue.component('componente-gestion-proyectos',{

    data:function(){
        return{
            nombreProyecto:'',
            descripcionProyecto:'',
            responsableProyecto:'',
            validar:true,
            vacio:true,
          //  filtro:'',
          //  proyectos:[],
            listaProyectos:[],
            proyectoModificado: null,
            estados:[
                'En progreso',
                'Completado',
                'Sin terminar'
            ],
            colorProyecto:''
            
            //agregar filtro de busqueda con arrays!!
        }
    },

    
    template:`

    <div>
    <form @submit.prevent = "continuarProyecto">
    <div class="d-flex">
      <label for="nombre">Nombre del proyecto</label>
      <input v-model="nombreProyecto" class="form-control me-2" placeholder="Nombre del proyecto" type="text" id="nombre">
    </div>
    <div>
      <label for="descripcion">Descripción del Proyecto:</label>
      <textarea v-model="descripcionProyecto" id="descripcion" required></textarea>
    </div>
    <div>
      <label for="responsable">Responsable del Proyecto:</label>
      <input v-model="responsableProyecto" class="form-control me-2" placeholder="Responsable del proyecto" type="text" id="responsable" required>
    </div>
    <button type="submit">Continuar</button> 

    <div :class="validar ? 'ingresado' : 'noIngresado'">
      <p>Por favor complete todos los campos.</p>
    </div>

    <div class="card">
      <div class="card-body">
        <h1 class="card-title">Lista de proyectos </h1>

        <table class="table mt-4">
          <thead>
            <tr>
              <th scope="col">Nombre del proyecto</th>
              <th scope="col">descripción</th>
              <th scope="col">Responsable del proyecto</th>
              <th scope="col">Estado del proyecto</th>
              <th scope="col" class="text-center">
                <img src="img/iconografia/editar.png" class="editar">
              </th>
              <th scope="col" class="text-center">
                <img src="img/iconografia/eliminar.png" class="eliminar">
              </th>
            </tr>
          </thead>
          
          <template v-if="vacio">
            <p>No hay proyectos</p>
          </template>
          <template v-else>
            <tbody>
              <tr v-for="(proyecto,index) in listaProyectos" :key="index" :class="proyecto.estados" class="mb-3">
                <th scope="row">{{proyecto.descripcion}}</th>
                 <!-- Resto de los datos del proyecto -->
                 <td>{{ proyecto.nombreProyecto }}</td>
                 <td>{{ proyecto.responsableProyecto }}</td>
                 <td>{{ proyecto.descripcionProyecto }}</td>
             

              <td>
                <button type="submit" class="btn btn-outline-dark" @click="cambiarEstado(index)">{{proyecto.estados}}</button>
              </td>
              <td>
                <button type="button" class="btn" @click="eliminar">
                  <img src="img/iconografia/eliminar.png 
                  "  alt="eliminar">
                </button>
              </td>
              <td>
                <button type="button" class="btn" @click="editar(index)">
                  <img src="img/iconografia/editar.png"alt="editar">
                </button>
              </td>

             </tr>
            </tbody>
          </template>

        </table>

      </div>

    </div>
     </form>
   </div>
   
    



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

    },

       


    
 

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
        
        cambiarEstado:function(index){
          let nuevoIndex=this.estados.indexOf(this.listaProyectos[index].estado);
          if(++nuevoIndex>3) nuevoIndex=0;
          this.listaProyectos[index].estado=this.estados[nuevoIndex]; 

        }

    },


    



});



