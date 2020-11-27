<template>
  <button class="button"
        @click="$emit('on-calc-button-click',lable)" 
        :class="{double, triple, operation}" >
      {{ lable }}
  </button>
</template>

<script>
export default {
    props:{
        lable:{},
        operation:{type: Boolean},
        double:{type: Boolean},
        triple:{type: Boolean},
    }

}
</script>

<style>
:root{
    --bg-button: lightgray;
    --border-button: solid 1px  darkgray;
}

.button{
    font-size: 1.4em;
    background-color: var (--bg-button);
    border: solid 1px darkgray;
    border-right: var(--border-button);
    border-left: var(--border-button);
    outline: none;
}

.button:active{
    background-color: gray;

}

.button.double{
    grid-column: span 2;
}
.button.triple{
    grid-column: span 3;
}
.button.operation{
    background-color: orange;
    color: white;
}

.button.operation:active{
    background-color: orangered;
}

</style>