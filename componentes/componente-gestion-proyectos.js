Vue.component('componente-gestion-proyectos',{

    data:function(){
        return{
            nombreProyecto:'',
            descripcionProyecto:'',
            responsableProyecto:'',
           mostrarError:false,
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

    //@submit = "continuarProyecto"
    //@click="nombreProyecto && responsableProyecto && descripcionProyecto ? continuarProyecto : alert('Por favor complete todos los campos.')" 
   // <td>{{ proyecto.descripcionProyecto }}</td>
                 



    template:`

    <form @submit.prevent="continuarProyecto" class="col-12 col-lg-10 p-3">

    
    <div>
      <div class="d-flex"> 
       <div class="row">
       <div class="col-md"> 
        <div class="form-floating mb-3">
        <input v-model="nombreProyecto" class="form-control me-2"  type="text" id="nombre" aria-label="Nombre del proyecto" placeholder="Nombre del proyecto">  
        <label for="nombre"  class="form-label">Nombre del proyecto</label>   
        </div>                 
      </div>

      <div class="col-md">
      <div class="form-floating mb-3" > 
      <input v-model="responsableProyecto" class="form-control me-2" type="text" id="responsable" name="responsable" placeholder="Responsable del proyecto">
      <label for="responsable" class="form-label">Responsable</label>   
       </div>         
        </div>
    </div>
    
       <div class="row">
       <div class="col-md-6 col-lg"> 
       <div class="mx-3 mb-3"> 
         <label for="descripcion" class="form-label ">Descripción del Proyecto:</label>
          <textarea v-model="descripcionProyecto" class="form-control " id="descripcion" name="descripcion"></textarea>
      </div>      
      </div>     
      </div>
   
    <button type="submit" class="botonContinuar">Continuar</button> 

    <div :class="mostrarError ? 'ingresado' : 'noIngresado'">
    Por favor complete todos los campos.
  </div>
    
  </div>    


    <div class="card">
      <h1 class="card-title">Lista de proyectos </h1>
      <div class="card-body">        

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
                <th scope="row">{{proyecto.nombreProyecto}}</th>
                <td>{{ proyecto.descripcion }}</td>
                 <td>{{ proyecto.responsableProyecto }}</td>
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

   </div>

  </form>
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



