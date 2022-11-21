<template>
<h1>Cubos</h1>
<div class="row">
  <div v-for="cubo in cubos" :key="cubo" class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{cubo.nombre}}</h5>
        <p class="card-text">{{cubo.modelo}}</p>
        <p class="card-text">{{cubo.marca}}</p>
        <router-link class="btn btn-outline-primary" :to="'/compras/'+cubo.idCubo">➕ Añadir al carrito</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos'
const service = new ServiceCubos();

export default {
 name: 'HomeComponent',
 data() {
 return {
    cubos: [], id: 0
 };
 },
 methods:{

 },
 mounted(){
    service.getCubos().then(result=> {
      this.cubos=result;
      console.log(this.cubos)
    })
 }
};
</script>

<style scoped>

</style>