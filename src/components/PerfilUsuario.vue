<template>
<div class="card" style="width: 18rem; margin: 0 auto;">
  <!-- <img class="card-img-top" :src="user.imagen" alt="imagen"> -->
  <div class="card-body">
    <h5 class="card-title">🧑 Usuario número: {{user.idUsuario}}</h5>
    <h5 class="card-title">{{user.email}}</h5>
  </div>
  <div class="card-body">
   <router-link to="/" class="btn btn-warning">
    <span aria-hidden="true">&larr;</span> Back
   </router-link>
    <router-link :to="'/compras'" class="btn btn-success">Mis compras</router-link>
    <button class="btn btn-outline-secondary" @click="cerrarSesion()">Cerrar sesión</button>
  </div>
</div>
</template>

<script>
import ServiceLogin from './../services/ServiceLogin';
const service = new ServiceLogin();

export default {
 name: 'SerieComponent',
 data() {
 return {
    user: {}, status: false
 };
 },
 methods: {
  cerrarSesion(){
        service.deleteUser()
    }
 },
 mounted(){
    service.getPerfil().then(result=>{
        this.user=result;
        this.status=true;
    })
 }
};
</script>

<style scoped>

</style>