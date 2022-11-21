<template>
 <div style="width: 900px; margin: 0 auto">
    <h1>Cubos de la marca {{this.$route.params.marca}}</h1>
       <!-- <router-link :to="'/marca/'+this.$route.paramsmarca" class="btn btn-warning">
    <span aria-hidden="true">&larr;</span> Back
   </router-link> -->
    <div v-if="status==false">
            <img src="./../assets/logo.png"/>
        </div>
    <table class="table table-dark table-hover table-bordered border-warning" v-else>    
    <thead> 
        <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Modelo</th>
        <th scope="col">Marca</th>
        <th scope="col">Color</th>
        <th scope="col">Imagen</th>
        <th scope="col">Precio</th>
        <th scope="col">Valoracion</th>
        <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="cubo in cubos" :key="cubo">
            <th scope="row">{{cubo.nombre}}</th>
            <td>{{cubo.modelo}}</td>
            <td>{{cubo.marca}}</td>
            <td>{{cubo.color}}</td>
            <td><img style="width: 200px" :src="cubo.imagen"/></td>
            <td>{{cubo.precio}}</td>
            <td>{{cubo.valoracion}}</td>
    <td>
        <router-link class="btn btn-outline-warning" :to="'/comentarios/'+cubo.idCubo">Ver comentarios</router-link>
    </td>
        </tr>
    </tbody>
    </table>
 </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();

export default {
 name: 'DetallesCubos',
 data() {
 return {
    cubos: null, status: false
 };
 },
 mounted(){
    service.getDetallesCubos(this.$route.params.marca).then(result=>{
        this.cubos=result;
        this.status=true;
    })
 }
};
</script>

<style scoped>

</style>