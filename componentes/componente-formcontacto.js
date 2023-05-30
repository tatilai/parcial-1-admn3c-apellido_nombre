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
  


  <div class="d-flex justify-content-center">
  
     <h1>Contacto</h1>   
    <form @submit.prevent="agregarEquipo">
    <p>Aqui le podrás dejar un mensaje a los demas miembros del equipo,incluyendo las modificaciones que le quieras hacer al proyecto</p>
      <div v-for="(equipo, index) in equipos" :key="index">
        <h2>Equipo {{ index + 1 }}</h2>
        <div>
         <input v-model="equipo.nombre" type="text" class="form-control"  id="nombre" name="nombre"  placeholder="Ingrese nombre del equipo">
          <label for="nombre" class="form-label">Nombre del Equipo:</label>         
        </div>
        <div>
          <label for="miembros">Miembros del Equipo:</label>
          <ul>
            <li v-for="(miembro, miembroIndex) in equipo.miembros" :key="miembroIndex">
              <input v-model="miembro.nombre" type="text" required>
              <select v-model="miembro.rol" required>
                <option value="" disabled selected>Seleccionar Rol</option>
                <option value="Líder">Líder</option>
                <option value="Desarrollador">Desarrollador</option>
                <option value="Diseñador">Diseñador</option>
                <option value="Tester">Tester</option>
              </select>
              <button type="button" @click="eliminarMiembro(index, miembroIndex)">Eliminar</button>
            </li>
          </ul>
          <button type="button" @click="agregarMiembro(index)">Agregar Miembro</button>
        </div>
      </div>
      <button type="submit">Guardar Equipos</button>
    </form>
  </div>



   `,  


   methods:{




   }

});


