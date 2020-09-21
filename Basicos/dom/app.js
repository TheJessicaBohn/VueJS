new Vue({
    el: '#desafio',
    data: {
        nome: 'Jessica',
        idade: 24,
        imagem: 'https://img2.gratispng.com/20180718/cbh/kisspng-vue-js-javascript-library-angularjs-react-vue-js-5b4ebe1bc45884.1915769815318871318042.jpg'
    },
    methods: {
        idadeMultiplicada3() {
            return this.idade * 3
        },

        random() {
            return Math.random()
        }
    }

})