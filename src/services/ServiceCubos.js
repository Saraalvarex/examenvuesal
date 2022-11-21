import axios from "axios";
import Global from './../Global'

export default class ServiceHospitales {
    getCubos(){
        return new Promise(function(resolve){
            var request = 'api/cubos';
            var url = Global.url+request;
            axios.get(url).then(response=>{
                resolve(response.data)
            })
        })
    }
    getMarcas(){
        return new Promise(function(resolve){
            var request = 'api/cubos/marcas';
            var url = Global.url+request;
            axios.get(url).then(response=>{
                resolve(response.data)
            })
        })
    }
    getDetallesCubos(marca){
        return new Promise(function(resolve){
            var request = '/api/Cubos/CubosMarca/'+marca;
            var url = Global.url+request;
            axios.get(url).then(response=>{
                resolve(response.data)
            })
        })
    }
    getComentsCubo(id){
        return new Promise(function(resolve){
            var request = '/api/ComentariosCubo/Getcomentariocubo/'+id;
            var url = Global.url+request;
            axios.get(url).then(response=>{
                resolve(response.data)
            })
        })
    }
    
}