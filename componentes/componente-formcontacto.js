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
  

  <div class="form-body bg-light text-dark p-4 mt-4 w-50 mx-auto" id="equipoForm">
  <div class="row">
    <div class="form-holder">
      <div class="form-content">
        <div class="form-items">
          <h3>Equipo</h3>
          <p class="fw-bold">Aquí puedes dejar un mensaje al equipo y seleccionar el rol</p>
          <form @submit.prevent="guardarEquipo" novalidate>
            <div class="col-md-12 mb-3">
              <label for="nombre" class="form-label">Nombre del Equipo:</label>
              <input class="form-control my-1" v-model.lazy="equipo.nombre" type="text" name="nombre" placeholder="Ingrese nombre del equipo" required>
              <div class="invalid-feedback" v-if="errors.nombre">{{ errors.nombre }}</div>
            </div>
            <div class="col-md-12 mb-3">
              <label for="comentarios" class="form-label">Comentarios:</label>
              <textarea class="form-control" rows="3" v-model="equipo.comentarios" name="comentarios" required></textarea>
              <div class="invalid-feedback" v-if="errors.comentarios">{{ errors.comentarios }}</div>
            </div>
            <div class="col-md-12 mb-3">
              <label for="rol" class="form-label">Rol:</label>
              <select class="form-select mt-3" v-model="equipo.rol" required>
                <option disabled value="">Seleccionar Rol</option>
                <option value="Líder">Líder</option>
                <option value="Desarrollador">Desarrollador</option>
                <option value="Diseñador">Diseñador</option>
                <option value="Tester">Tester</option>
              </select>
              <div class="invalid-feedback" v-if="errors.rol">{{ errors.rol }}</div>
            </div>
            <div class="form-button mt-3">
              <button id="submit" type="submit" class="btn btn-primary">Guardar Equipo</button>
            </div>
          </form>
        </div>
      </div>
    </div>
     </div>
     <div>
    <div v-if="enviado === true">
      <div v-if="Object.keys(errors).length > 0" class="my-5 text-center">
        <ul>
          <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
        </ul>
      </div>
      <div v-else class="my-5 text-center">
        <span class="alert alert-success" role="alert">Equipo guardado con éxito</span>
      </div>
    </div>
    <div v-if="equipos.length > 0" class="mt-5 card w-50 mx-auto p-2 mb-2 text-dark">
      <h2>Equipos Guardados</h2>
      <ul v-for="equipo in equipos" :key="equipo.id" class="text-dark">
        <li>
          Nombre del Equipo: {{ equipo.nombre }}
        </li>
        <li>
          Comentarios: {{ equipo.comentarios }}
        </li>
        <li>
          Rol: {{ equipo.rol }}
        </li>
      </ul>
    </div>

   </div> 


  </div>

   `,  


   methods:{




   }

});


