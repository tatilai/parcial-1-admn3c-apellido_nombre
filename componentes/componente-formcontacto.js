Vue.component('componente-formcontacto',{
    data:function(){

        return{
           equipo: [
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
  

  <div class="container w-100 h-100 border bg-claro p-4 mt-4">
  <div class="col-12 col-lg-10 p-3"> 
    <form @submit.prevent="agregarEquipo">
      <img src="img/trabajo.png" alt="gente sentada alrededor de una mesa" class="imagen-izquierda">
      <div class="texto-derecha">
        <div class="row g-2">
          <div class="col-md">
            <p style="font-weight:bold">Aquí le podrás dejar un mensaje a los demás miembros del equipo, incluyendo las modificaciones que le quieras hacer al proyecto</p> 
          </div>
          <div class="col-md">
            <div class="form-floating mb-3"> 
              <div v-for="(equipo, index) in equipos" :key="index">
                <h2>Equipo {{ index + 1 }}</h2>
                <input v-model="equipo.nombre" type="text" class="form-control"  id="nombre" name="nombre"  placeholder="Ingrese nombre del equipo">
                <label for="nombre" class="form-label">Nombre del Equipo:</label>
              </div>
            </div>
          </div>     
        </div>
        <div class="row"> 
          <div class="col-md-6 col-lg">
            <div class="mb-3">
              <label for="comentarios" class="form-label text-salmon">Comentarios</label>
              <textarea class="form-control" id="comentarios" name="comentarios"></textarea>
            </div>
          </div>
          <div class="col-md"> 
            <div class="mb-3"> 
              <label for="fav" class="form-label" style="font-weight:bold">Miembros del Equipo:</label>     
              <select v-for="(miembro, miembroIndex) in equipo.miembros" :key="miembroIndex" class="form-select mt-3" name="fav" id="fav" v-model="miembro.rol" required>
                <option value="" disabled selected>Seleccionar Rol</option>
                <option value="Líder">Líder</option>
                <option value="Desarrollador">Desarrollador</option>
                <option value="Diseñador">Diseñador</option>
                <option value="Tester">Tester</option>
              </select>
              <button type="button" @click="eliminarMiembro(index, miembroIndex)">Eliminar</button>
            </div>      
          </div>        
        </div>
        <button type="button" @click="agregarMiembro(index)">Agregar Miembro</button>
      </div>
      <button type="submit">Guardar Equipos</button>
    </form>
  </div> 
</div>
 

   `,  


   methods:{




   }

});


