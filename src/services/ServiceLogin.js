import axios from "axios";
import Global from './../Global';
// import Cookies from "js-cookie";
export default class ServiceLogin {
    obtenerToken(user) {
        var json = JSON.stringify(user);
        var header = {
            "Content-Type": "application/json",
            "responseType": "json"
        }
        return new Promise(function(resolve){
            var request = "/api/manage/login/";
            var url = Global.url+request;
            axios.post(url, json, {headers : header}).then(response=>{
                localStorage.setItem("token", response.data);
                resolve(response.data)
            })
        })
    }
    getUserLogged() {
        return localStorage.getItem();
    }
    deleteUser(){
        localStorage.clear();
    }
    registro(newuser){
        return new Promise(function(resolve){
            var request = "/api/manage/registrousuario";
            var url = Global.url + request;
            axios.post(url, newuser).then(response => {
                resolve(response)
            })
        })
    }
    getPerfil(){
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        return new Promise(function(resolve){
            var request = "/api/manage/perfilusuario";
            var url = Global.url+request;
            axios.get(url, { headers: headers }).then(response=>{
                resolve(response.data)
            })
        })
    }
    getCompras(){
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        return new Promise(function(resolve){
            var request = "/api/Compra/ComprasUsuario";
            var url = Global.url+request;
            axios.get(url, { headers: headers }).then(response=>{
                resolve(response.data)
            })
        })
    }
    getComentarios(id){
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        return new Promise(function(resolve){
            var request = "/api/ComentariosCubo/GetComentariosCubo/"+id
            var url = Global.url+request;
            axios.get(url, { headers: headers }).then(response=>{
                resolve(response.data)
            })
        })
    }
    // getDetailsEmp(id){
    //     const headers = {
    //         'Authorization': 'Bearer ' + localStorage.getItem('token')
    //     };
    //     return new Promise(function(resolve){
    //         var request = "/api/Empleados/"+id;
    //         var url = Global.url+request;
    //         axios.get(url, { headers: headers }).then(response=>{
    //             resolve(response.data)
    //         })
    //     })
    // }
    realizarCompra(id){
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        return new Promise(function(resolve){
            var request = "/api/compra/insertarpedido/"+id;
            var url = Global.url+request;
            axios.post(url, { headers: headers }).then(response=>{
                resolve(response.data)
            })
        })
    }
}