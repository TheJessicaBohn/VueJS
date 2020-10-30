<template>
  <div id="app">
    <h1>Tarefas</h1>
    <NewTask/>
	<TaskGrid :tasks="tasks"/>

  </div>
</template>

<script>
import NewTask from './components/NewTask.vue'
import TaskGrid from './components/TaskGrid.vue'
export default {
	components: {NewTask, TaskGrid},
	data(){
		return{
		tasks: [
			{name: 'Lavar Louca', pending: false},
			{name: 'Comprar blusa', pending: true},
		]
	}	
	}

}
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(3, 117, 180), rgb(255, 138, 75));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
