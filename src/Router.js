import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import DetallesCubos from './components/DetallesCubos.vue';
import LoginComponent from './components/LoginComponent.vue';
import NewUser from './components/NewUser.vue';
import PerfilUsuario from './components/PerfilUsuario.vue';
import ComprasUsuario from './components/ComprasUsuario.vue';
import ComentariosComponent from './components/ComentariosComponent.vue';

const routes = [
    {
        path: "/", component: HomeComponent        
    },
    // {
    //     path: "/hospital/:idhospital", component: HospitalComponent
    // },
    {
        path: "/marca/:marca", component: DetallesCubos
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/newuser", component: NewUser
    },
    {
        path: "/perfil", component: PerfilUsuario
    },
    {
        path: "/compras", component: ComprasUsuario
    },
    {
        path: "/comentarios/:id", component: ComentariosComponent
    }
    // {
    //     path: "/update/:idhospital/", component: UpdateHospital
    // }
    // {
    //     path: "/delete/:id", component: DeleteDepartamento
    // }
]

const router = createRouter ({
    history: createWebHistory(),
    routes: routes
});

export default router;