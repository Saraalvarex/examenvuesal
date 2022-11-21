<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </a>
          <ul class="dropdown-menu">
            <!-- <li><a class="dropdown-item" href="#">Action</a></li> -->
            <li v-for="marca in marcas" :key="marca" >
              <router-link class="dropdown-item" :to="'/marca/'+marca">{{marca}}</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Opciones de usuario
          </a>
          <ul class="dropdown-menu">
            <!-- <li><a class="dropdown-item" href="#">Action</a></li> -->
            <li>
              <router-link class="dropdown-item" :to="'/perfil/'">Perfil</router-link>
            </li>
            <li>
              <router-link class="dropdown-item" :to="'/compras/'">🛒 Compras</router-link>
            </li>
            <li>
              <router-link class="dropdown-item" :to="'/compras/'">🛒 Realizar compra</router-link>
            </li>
          </ul>
        </li>
        <!-- <form class="d-flex" role="search" @submit.prevent="buscarHospital()">
          <input class="form-control me-2" v-model="search" type="search" placeholder="Nombre" aria-label="Search">
           <router-link class="btn btn-outline-success" :to="'/titulo/'+search">Buscar</router-link>
        </form> -->
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos'
const service = new ServiceCubos();

export default {
 name: 'MenuComponent',
 data() {
 return {
   marcas: []
 };
 },
 methods: {
  //  buscarHospital(){
  //    service.getNombreHospital(22).then(resu=>{
       
  //    })
  //  }
 },
 mounted(){
   service.getMarcas().then(resu=>{
     this.marcas=resu;
   })
 }
};
</script>

<style scoped>

</style>