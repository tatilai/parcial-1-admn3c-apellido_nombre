Vue.component('componente-formcontacto',{
    data:function(){

        return{
           contacto: {
            nombre:"",
            mensaje:"",
            equipo:"",
            rol:[
              'Lider',
              'Desarrollador',
              'Diseñador',
              'Tester'
            ],
            confirmacion:null
           },
           errores:[],
           arr:[],
           enviado:false,
           muestraError:"alert alert-danger m-5 p-5"            
                
              
        };
    },



  template:`
  
  <div class="container border bg-claro">
    
  <section class="row justify-content-center" id="contacto">
          <div class=" col-12 text-center mt-3">
              <h1></h1> 
          </div>
        

          <div class="row g-2">
          <div class="col-lg-4">
            <img src="img/trabajo.png" alt="equipo de trabajo" class="img-fluid">
          </div>        
         
       <div class="col-lg-8 p-3"> 

          <form @submit.prevent="guardar" novalidate>    
         
               <p style="font-weight:bold" >Aqui tienes el espacio para dejar un mensaje a los miembros de tu equipo sobre lo que te parecio el proyecto y si le deseas hacer cambios</p>
      
                     
      <div class="row g-2">
          <div class="col-md">
              <div class="form-floating mb-3 ">
                  <input type="text" class="form-control" id="nombre" name="nombre"
                      placeholder="Ingrese nombre del equipo">
                  <label for="nombre" class="form-label text-lavanda">Ingrese nombre del equipo</label>
              </div>
          </div>

          <div class="col-md">
              <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="apellido" name="apellido"
                      placeholder="Ingrese su apellido">
                  <label for="apellido" class="form-label text-lavanda">Ingrese su apellido</label>
              </div>
          </div>

      </div>





           <div class="row g-2">


              <div class="col-md-6 col-lg"> 
                 <div class="form-floating mb-3">
                 
              <input type="text" class="form-control" id="tel" name="tel" placeholder="ingrese su teléfono"/> 
             <label for="tel" class ="form-label text-lavanda">Ingrese su teléfono</label>
   
                 </div>

             </div>

              <div class="col-md-6 col-lg">
                  <div class="mb-3">
                      <input type="email" class="form-control" id="email" name="email"
                          placeholder="Ingrese su email">
                      <div  class="form-text">Recuerde incluir una @ y el dominio.</div>
                  </div>
              </div>          
         </div>

         
  
              <div class="row">
                  <div class="col-md">
                      <div class="mb-3">
                    <label for="fav" class="form-label text-lavanda" style="font-weight:bold">Para recibir asesoramiento por el producto indicado para tu piel</label>
               <select class="form-select" name="fav" id="fav" required>
                 <option value="" selected disabled>Indicanos qué tipo de piel tenés </option>
                 <option value="1"> Piel normal</option>
                 <option value="2"> Piel mixta</option>
                 <option value="3"> Piel oleosa</option>
                 <option value="4"> Piel seca</option>
                 <option value="5">Piel sensible </option>
               </select>
               </div>
                  </div>
               </div>
        
              
                 <div class="row "> 
                  <div class="col-md-6 col-lg">
                       <div class="mb-3">
                  <label for="comentarios" class="form-label text-salmon">Comentarios</label>
                  <textarea class="form-control" id="comentarios" name="comentarios" ></textarea>
              </div>
          </div>


       <div class="col-md-6 col-lg">   
          <div class="mb-3 form-check">
              <input type="radio" class="form-check-input" id="newsletter">
              <label class="form-check-label text-celeste" for="newsletter">Suscribirse al Newsletter</label>
          </div>
       </div>
         
              
               </div>
      
              <button type="submit" class="btn btn-amarillo d-block ms-auto text-negro">Enviar</button>
              
      
                
             
  
  
           </form>
          </div>

      </section>
           


                  
</div>


   `,  


   methods:{




   }

});


