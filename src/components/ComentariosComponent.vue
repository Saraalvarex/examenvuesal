<template>
    <div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">ID CUBO: {{this.$route.params.id}}</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">COMENTARIOS</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
    </div>
  </div>
</div>
</template>
<script>
import ServiceLogin from './../services/ServiceLogin';
const service = new ServiceLogin();

export default {
 name: 'ComentariosComponent',
 data() {
 return {
    comentarios: [], status: false
 };
 },
 mounted(){
    service.getComentarios(this.$route.params.id).then(result=>{
        this.comentarios=result;
        this.status=true;
        console.log(this.comentarios)
    })
 }
};
</script>

<style scoped>

</style>