Vue.component('componente-formcontacto',{
    data:function(){

        return{
           equipos: [
                    {
                      nombre: '',
                      mensaje:'',
                      miembros: [
                        {
                          nombre: '',
                          rol: ''
                        }
                      ]
                    }
                  ]
                
              
        }
    },



  template:`
  


  <div class=" bg-claro p-4 mt-4 w-50 mx-auto d-flex justify-content-center">

    
  <form @submit.prevent="agregarEquipo" class="formulario">
 
  <img src="img/trabajo.png" alt="gente sentada alrededor d una mesa" class="imagen-izquierda"">
  <div class="texto-derecha"> 
     <p style="font-weight:bold">Aquí le podrás dejar un mensaje a los demás miembros del equipo,incluyendo las modificaciones que le quieras hacer al proyecto</p>
    <div v-for="(equipo, index) in equipos" :key="index">
      <h2>Equipo {{ index + 1 }}</h2>
      <div>
       <input v-model="equipo.nombre" type="text" class="form-control"  id="nombre" name="nombre"  placeholder="Ingrese nombre del equipo">
        <label for="nombre" class="form-label">Nombre del Equipo:</label>         
      </div>
      <div class="row "> 
      <div class="col-md-6 col-lg">
           <div class="mb-3">
      <label for="comentarios" class="form-label text-salmon">Comentarios</label>
      <textarea class="form-control" id="comentarios" name="comentarios" ></textarea>
      </div>
     </div>
      <div>
      <div class="row"> 
      <div class="col-md"> 
      <div class="mb-3"> 
       <label for="miembros"  class="form-label" style="font-weight:bold">Miembros del Equipo:</label>
        <ul>
          <li v-for="(miembro, miembroIndex) in equipo.miembros" :key="miembroIndex">
            <input v-model="miembro.nombre" type="text" required>
            <select  class="form-select mt-3" name="miembros" id="miembros" v-model="miembro.rol" required>
              <option value="" disabled selected>Seleccionar Rol</option>
              <option value="Líder">Líder</option>
              <option value="Desarrollador">Desarrollador</option>
              <option value="Diseñador">Diseñador</option>
              <option value="Tester">Tester</option>
            </select>
            </div>      
            </div>        
            </div>
        
            <button type="button" @click="eliminarMiembro(index, miembroIndex)">Eliminar</button>
          </li>
        </ul>
        <button type="button" @click="agregarMiembro(index)">Agregar Miembro</button>
      </div>
    </div>
    <button type="submit">Guardar Equipos</button>
  </form>

 </div>
 
</div>




   `,  


   methods:{




   }

});


