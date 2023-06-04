Vue.component('componente-formcontacto',{ //AGREGAR FILTROS!!!! Y SUBIRLO A RERDMI
    data:function(){

        return{
           contacto: {
            nombre:"",
            email:"",
            telefono:"",
            rolSeleccionado:"",                     
            confirmacion:null        
                     
           },
            roles:[
              'Lider',
              'Desarrollador',
              'Diseñador',
              'Tester'
            ],
           errores:[],
           arr:[],
           enviado:false,
           muestraError:"alert alert-danger m-5 p-5"            
                
              
        };
    },



  template:`
  
  <div>
  <div class="container border bg-claro">
    
  <section class="row justify-content-center" id="contacto">
          <div class=" col-12 text-center mt-3">
              <h1>Equipos</h1> 
          </div>
        

         
            <div class="col-lg-4">
               <img src="img/trabajo.png" alt="equipo de trabajo" class="img-fluid">
           </div>        
         

       <div class="col-lg-8 p-3"> 

          <form @submit.prevent="guardar" novalidate>    
         
               <p style="font-weight:bold" >Aqui tienes el espacio para dejar un mensaje a los miembros de tu equipo sobre lo que te parecio el proyecto y si le deseas hacer cambios</p>
      
                     
      <div class="row g-2">
          <div class="col-lg">
              <div class="form-floating mb-3 ">
                  <input type="text" class="form-control" v-model.lazy="contacto.nombre" id="nombre" name="nombre"
                      placeholder="Ingrese nombre del equipo">
                  <label for="nombre" class="form-label">Ingrese nombre del equipo</label>
              </div>
          </div>

         

      </div>





           <div class="row g-2">


              <div class="col-md-6 col-lg"> 
                 <div class="form-floating mb-3">
                 
              <input type="text" class="form-control" id="tel" name="tel" v-model="contacto.telefono" placeholder="ingrese su teléfono"/> 
             <label for="tel" class ="form-label">Ingrese su teléfono</label>
   
                 </div>

             </div>

              <div class="col-md-6 col-lg">
                  <div class="mb-3">
                      <input type="email"  v-model="contacto.email"  class="form-control" id="email" name="email"
                          placeholder="Ingrese su email">
                      <div  class="form-text" required>Recuerde incluir una @ y el dominio.</div>
                  </div>
              </div>          
         </div>

         
  
              <div class="row">
                  <div class="col-md">
                      <div class="mb-3">
                    <label for="fav" class="form-label" style="font-weight:bold">Indique qué rol desempeña en el equipo</label>
               <select class="form-select" v-model="contacto.rolSeleccionado" name="fav" id="fav" required>
                 <option v-for="item in roles" v-bind:value="item">{{item}} 
                 </option>              
               </select>
               </div>
                  </div>
               </div>
        
              
                 <div class="row "> 
                  <div class="col-md-6 col-lg">
                       <div class="mb-3">
                  <label for="comentarios" class="form-label ">Comentarios</label>
                  <textarea class="form-control" id="comentarios" v-model="contacto.comentario" name="comentarios" ></textarea>
              </div>
          </div>


       <div class="col-md-6 col-lg">   
          <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" v-model="contacto.confirmacion" :value="false" id="invalidCheck"required >
              <label class="form-check-label" for="newsletter">Confirmo que los datos son correctos</label>
          </div>
       </div>
         
              
               </div>
      
              <button type="submit" class="btn btn-primary d-block ms-auto">Enviar</button>
              
      
                
             
  
  
           </form>
          </div>

      </section>      


                  
</div>

   <div>
      <div v-if="enviado===true">
        <div v-if="cantidadErrores" :class="muestraError">
          <ul>
             <li v-for="error in errores">{{errores}} </li>        
           </ul>        
        </div>
       <div v-else class="my-5 text-center">
            <span class="alert alert-succes" role="alert">Enviado con éxito</span>
         </div>
      </div>


      <div  v-if="this.arr.length > 0" class="mt-5 card w-50 mx-auto p-2 mb-2 text-dark">

         <h2>Info del formulario enviado</h2>
         <ul class="text-dark" v-for="item in arr">

         <li> nombre del equipo:{{item.nombre}} </li>
         <li> mail:{{item.email}}</li>    
         <li> telefono:{{item.telefono}}</li> 
         <li>comentario:{{item.comentario}}</li>
        
        </ul>  
        
      </div>  
  </div>        
  
 </div>
         
  `,     
    
    methods:{

    guardar:function(){
     
      this.enviado=true;  //queremos evaluar que los mensajes se muestren solo cuando se ejecute la funcion
      this.errores=[]  //vaciamos el array de errores

      if(!this.contacto.nombre){

       console.log(!this.contacto.nombre)
       this.errores.push('El nombre del equipo es obligatorio');

      }
      if(this.contacto.nombre && this.contacto.nombre.length < 5) {
        this.errores.push('NOMBRE: Debe tener más de 5 caracteres.');
         
      }
      if(!this.contacto.comentario){
        this.errores.push('COMENTARIO:debe escribir su comentario');
      }

      let emailValido= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

      if( !emailValido.test(this.contacto.email) ){
        
        this.errores.push('EMAIL: no se corresponde con un valor válido.')

        }

      let telefonoValido= /^\d{10}$/;
      if(!telefonoValido.test(this.contacto.telefono)){
        this.errores.push('Debe ingresar un formato valido por ejemplo:1565986574')
      }  


      if(this.contacto.comentario&& this.contacto.comentario.length<15){
        this.errores.push('El comentario tiene que tener mas de 15 caracteres');
      }

      if (!this.contacto.confirmacion) {

        this.errores.push('Debes confirmar que los datos son correctos')
          
      }


      console.log(this.errores)

      if(this.errores.length==0){
        this.enviado=true;
        objetoLocal={
          comentario:this.contacto.comentario,
          nombre:this.contacto.nombre,
          email:this.contacto.email,
          telefono:this.contacto.telefono,
          rol: this.contacto.rolSeleccionado
        }
        if(!localStorage.dato){
          this.arr=[]
        }else{
          this.enviado=false;
          this.arr=JSON.parse(localStorage.getItem("datoComentario"))

        

        }

            this.arr.push(objetoLocal)
            localStorage.setItem("datoComentario",JSON.stringify(this.arr))

            
            
      }

    }



   },

   mounted:function(){
    this.arr=JSON.parse(localStorage.getItem("datoComentario"))||[]
    console.log(this.arr)
   },


   computed: {

    cantidadErrores: function(){
        return this.errores.length; // Devuelve cantidad errores 
    }

},
    
    
    



    


   

   

});


