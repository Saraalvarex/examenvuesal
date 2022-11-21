<template>
 <div style="width: 900px; margin: 0 auto">
    <h1>Mi carrito de la compra 🛒</h1>
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
    <!-- <td>
        <router-link class="btn btn-outline-light" :to="'/detalles/'+depart.numero+'/'+depart.nombre+'/'+depart.localidad">Detalles</router-link>
        <router-link class="btn btn-outline-warning" :to="'/modificar/'+depart.numero">Modificar</router-link> -->
        <!-- <router-link class="btn btn-outline-danger" :to="'/delete/'+depart.numero">Eliminar</router-link> -->
        <!-- <button class="btn btn-outline-danger" @click="deleteItem(depart.numero)">Eliminar</button>
    </td> -->
        </tr>
    </tbody>
    </table>
 </div>
</template>

<script>
import ServiceLogin from './../services/ServiceLogin';
const service = new ServiceLogin();

export default {
 name: 'ComprasUsuario',
 data() {
 return {
    cubos: [], status: false
 };
 },
 methods: {

 },
 mounted(){
    service.getCompras().then(result=>{
        console.log(this.cubos)
        this.cubos=result;
        this.status=true;
    })
 }
};
</script>

<style scoped>

</style>