<template>
<div class="d-flex justify-content-center align-items-center">
    <div class="col-md-4 p-5 shadow-sm border rounded-5 border-primary">
        <h2 class="text-center mb-4 text-primary">Login Form</h2>
        <form method="post" v-on:submit.prevent="login()">
            <div class="mb-3">
                <label class="form-label">Username</label>
                <input type="text" class="form-control border border-primary" placeholder="user1@mail.com" v-model="user.mail">
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control border border-primary" placeholder="12345" v-model="user.contraseña">
            </div>
            <div class="d-grid">
                <button class="btn btn-primary" type="submit">Login</button>
               
            </div>
        </form>
        <div class="mt-3">
            <p class="mb-0  text-center">Don't have an account? <router-link :to="'/newuser/'" class="text-primary fw-bold">Sign Up</router-link></p>
        </div>
    </div>
</div>
</template>

<script>
import ServiceLogin from './../services/ServiceLogin'
const service = new ServiceLogin()

export default {
 name: 'LoginComponent',
 data() {
 return {
    user: {
        "mail": "",
        "contraseña": ""
    },
    token: "",
    status: false
 };
 },
 methods: {
    login(){
        service.obtenerToken(this.user).then(result=> {
        try {
            this.token=result;
            this.status=true;
            localStorage.setItem('token', result.response);
            // service.setUserLogged(this.user);
            console.log(localStorage)
            this.$router.push("/home");
            service.getUserLogged()
            console.log(this.userLogged)
        } catch (error) {
            console.log(error);
            this.error = true;
        }
    })
    }
 }
};
</script>

<style scoped>

</style>