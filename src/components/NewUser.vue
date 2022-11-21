<template>
<div class="d-flex justify-content-center align-items-center">
    <div class="col-md-4 p-5 shadow-sm border rounded-5 border-primary">
        <h2 class="text-center mb-4 text-primary" v-if="mensaje">{{mensaje}}</h2>
        <h2 class="text-center mb-4 text-primary">Registro</h2>
        <form method="post" v-on:submit.prevent="insertUser()">
            <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input type="text" class="form-control border border-primary" placeholder="user1@mail.com" v-model="newuser.nombre">
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="text" class="form-control border border-primary" placeholder="user1@mail.com" v-model="newuser.email">
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control border border-primary" placeholder="12345" v-model="newuser.pass">
            </div>
            <div class="mb-3">
                <label class="form-label">Repetir password</label>
                <input type="password" class="form-control border border-primary" placeholder="12345" v-model="newuser.pass">
            </div>
            <div class="d-grid">
                <button class="btn btn-primary" type="submit">Registro</button>
            </div>
        </form>
        <!-- <div class="mt-3">
            <router-link :to="'/newuser/'" class="text-primary fw-bold">Sign Up</router-link>
        </div> -->
    </div>
</div>
</template>

<script>
import ServiceLogin from './../services/ServiceLogin'
const service = new ServiceLogin()

export default {
 name: 'NewUser',
 data() {
 return {
    newuser: {
	"idUsuario": Math.floor(Math.random()*101),
	"nombre": "",
	"email": "",
	"pass": ""
},
    token: "",
    status: false,
    mensaje: null
 };
 },
 methods: {
    // login(){
    //     service.obtenerToken(this.user).then(result=> {
    //     try {
    //         this.token=result;
    //         this.status=true;
    //         localStorage.setItem('token', result.response);
    //         // service.setUserLogged(this.user);
    //         console.log(localStorage)
    //         this.$router.push("/home");
    //         // service.getUserLogged()
    //         console.log(this.userLogged)
    //     } catch (error) {
    //         console.log(error);
    //         this.error = true;
    //     }
    // })
    // }
    insertUser(){
       service.registro(this.newuser).then(result=> {
        console.log(result)
        this.mensaje="Registrado satisfactoriamente";
        //this.$router.push("/login");
       })
    }
 }
};
</script>

<style scoped>

</style>