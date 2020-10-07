### Entendendo a instancia Vue
-**[mult-instancia-vue.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/mult-instancia-vue.html)** mostra como podemos tratar duas instancias simultaneas, porém podendo ver que uma instancia não pode acessar a outra
-**[instancia-vue-externa.html:]https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/instancia-vue-externa.html)** Acessando externamente uma instancia vue,onde das instancias do exercicio anterior passa a se acessar ou mwsmo passar por uma modificação pelo java script puro como é o caso do setTimeout
-**[instancia-vue-dados-gerenciados.html:]https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/instancia-vue-dados-gerenciados.html)** gerenciamento de dados e metodos do vuejs, mostra no console que a novaInfo, por não estar dentro do escopo do vue, não é reativa
-**[meu-vue.html:]https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/meu-vue.html)** apresenta a construção de um mini framework

-`const`  
- `$el` contem os elementos da dom obtidos atravez de `document.querySelector`
- `get: () =>` vai servir de proxy para a atividade meu-vue
- `set: () =>` alera o que veio do get