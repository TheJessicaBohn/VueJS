<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>
      Nome é <strong>{{ nome }}</strong>
    </p>
    <button @click="alterarNome">Alterar Nome</button>
    <hr />
    <div class="componentes">
      <bla-bla 
      v-bind:nome="nome"
      @nomeMudou="nome = $event.novo + $event.antigo" 
      :reiniciarFn="reiniciarNome"/>
      <bla-bla />
      <app-usuario-editar />
    </div>
  </div>
</template>

<script>
import BlaBla from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { BlaBla, AppUsuarioEditar },
  data() {
    return {
      nome: 'Andre',
    };
  },
  methods: {
    alterarNome() {
      this.nome = 'Jessica';
    },
    reiniciarNome() {
      this.nome = 'Andre';
    }
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
