<template>
  <div class="usuario-editar">
      <h3>Usuário Editar</h3>
      <p><strong>Código:</strong>{{ id }}/{{$route.params.id}}</p>
      <p><strong>Completo:</strong>{{ id }}/{{$route.query.completo ? 'Sim' :'Não' }}</p>
      <p><strong>Língua:</strong>{{ id }}/{{$route.query.lingua}}</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>