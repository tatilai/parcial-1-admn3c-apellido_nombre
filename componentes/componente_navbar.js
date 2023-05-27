


/*Vue.component('componente-navbar',{
    template:`
    <div>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
    <img src="img/gestion-de-proyectos.png></img>
    </a>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" >
    <li><a href="index.html" class="nav-link px-2 link-dark">Gestión</a></li>
    <li><a href="proyectos.html" class="nav-link px-2 link-dark">Proyectos</a></li>
    </ul>
    </header>
    </div>
     `
}) */


Vue.component('componente-navbar', {
    template: `
    <div>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src="img/gestion-de-proyectos.png" width="70px" height="70px"></img>
        </a>
  
        <ul class="nav navbar navbar-secondary col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="index.html" class="nav-link px-2 link-dark">Gestión</a></li>
          <li><a href="proyectos.html" class="nav-link px-2 link-dark">Proyectos</a></li>
        </ul>
      </header>
    </div>
    `
  })

