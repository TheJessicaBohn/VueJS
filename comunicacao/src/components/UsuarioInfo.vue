<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong> </p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome(Callback)</button>
    </div>
</template> 

<script>
export default {
    props:{
        nome: {
            type: String,
            //required: true,
            default: 'Anonimo',
           //default: function () {return Array(10).fill(0).join(',')    },
          
        },
        reiniciarFn: Function
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
             const antigo = this.nome
             this.nome = 'Andre'
             // this.$emit('nomeMudou',this.nome) pode ser apens um objeto
             this.$emit('nomeMudou',{
                 novo: this.nome,
                 antigo})
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
