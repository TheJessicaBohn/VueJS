### Entendendo a instancia Vue
-**[mult-instancia-vue.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/mult-instancia-vue.html)** mostra como podemos tratar duas instancias simultaneas, porém podendo ver que uma instancia não pode acessar a outra
-**[instancia-vue-externa.html:]https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/instancia-vue-externa.html)** Acessando externamente uma instancia vue,onde das instancias do exercicio anterior passa a se acessar ou mwsmo passar por uma modificação pelo java script puro como é o caso do setTimeout
-**[instancia-vue-dados-gerenciados.html:]https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/instancia-vue-dados-gerenciados.html)** gerenciamento de dados e metodos do vuejs, mostra no console que a novaInfo, por não estar dentro do escopo do vue, não é reativa
-**[meu-vue.html:]https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/meu-vue.html)** apresenta a construção de um mini framework, e como é o funcionamento reativo do get e set pelo vue, além da interpolação
-**[instancia-vue-el-data.html:]]https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/instancia-vue-el-data.html)** apenas foca no funcinamento do console no próprio console da pagina
-**[instancia-vue-refs.html:]]https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/instancia-vue-refs.html)** apresentando $refs e uso de templates



- `(match,$1)` representa o grupo de captura do regex
- `const`  
- `$el` contem os elementos da dom obtidos atravez de `document.querySelector`
- `eval($1)` avalia a sentença a partir do `regex` capturado
- `get: () =>` vai servir de proxy para a atividade meu-vue, lendo a variável
- `innerHTML` serve para a manipulação do HTML
- `$refs` referencia externa a uma instância
- `regex`  utiliza de  `/\{\{([\s\w+-/*]*)\}}/g` para fazer captura de expressões, e caracteres especias o que está dentro `[]` pode ser modificado e atribuidos novos simbolos matematicos ou espaços e caracteres especias, sen do `g` que é de forma global
- `set: value => ` altera a variável que veio do get
- `trim()` retira os espaços em branco das pontas