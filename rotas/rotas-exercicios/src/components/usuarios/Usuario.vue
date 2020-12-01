<template>
  <div class="usuarios">
    <h2>Usuários</h2>
    <hr />
    <router-view/>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaInicio() {
      //this.$router.path('/')
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
</style>