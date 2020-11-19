<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ frase | espaco-por-virgula}}</p>
		<p>{{ frase | espacoPorVirgula}}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<p>{{ frase |contador-palavras}}</p>
		<p>{{ frase | contadorPalavras}}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<p>{{ fraseComVirgula}}</p>
		<p>{{ fraseComTamanho }}</p>
		
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import fraseMixin from  './fraseMixin'

export default {
	mixins:[fraseMixin],
	data(){
		return{
			frase:'teste dos desafios'
		}
	},
	filters:{
		espacoPorVirgula(valor){
			return valor.replace(/\s/g, ',')
		}
	},
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
