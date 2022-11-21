<template>
<h1>Cubos</h1>
<div class="row">
  <div v-for="cubo in cubos" :key="cubo" class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{cubo.nombre}}</h5>
        <p class="card-text">{{cubo.modelo}}</p>
        <p class="card-text">{{cubo.marca}}</p>
        <button class="btn btn-outline-primary" @click="comprar(cubo.idCubo)">➕ Añadir al carrito</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos'
const service = new ServiceCubos();
import ServiceLogin from './../services/ServiceLogin'
const serviceLogin = new ServiceLogin();
export default {
 name: 'HomeComponent',
 data() {
 return {
    cubos: [], id: 0
 };
 },
 methods:{
  comprar(id){
    console.log(id)
    serviceLogin.realizarCompra(id).then(result=>{
      console.log(result)
    })
  }
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