<template>
<div class="task-grid">
    <Task v-for="task in tasks" :key="task.name"
        :task="task"   ></Task>
</div>
  
</template>

<script>
import Task from './Task.vue'
export default {
    components:{ Task },
    props:{
        tasks: {type: Array, required:true},
		
    }
}
</script>

<style>

</style>