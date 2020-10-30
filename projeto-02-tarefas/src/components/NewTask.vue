<template>
  <div class="new-task">
    <input type="text" />
    <button>+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
            name: ''
    };
  },
  methods:{
    add() {
        this.$emit('taskAdded', {name: this.name})
        this.name = ''
  }
}
</script>

<style>

</style>