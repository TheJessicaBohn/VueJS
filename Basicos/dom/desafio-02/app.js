new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Voce clicou no botão')
        },
        alterarValor(event) {
            this.valor = event.target.value
        },
    }
})