Vue.component('componente-formcontacto',{
    data:function(){

        return{
           quipos: [
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
    <h1>Formulario de Equipos de Trabajo</h1>
    <form @submit.prevent="agregarEquipo">
      <div v-for="(equipo, index) in equipos" :key="index">
        <h3>Equipo {{ index + 1 }}</h3>
        <div>
          <label for="nombre">Nombre del Equipo:</label>
          <input v-model="equipo.nombre" type="text" id="nombre" required>
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


