# Filtros & Mixins

- Filtros: São transformações que podem ser feitas em cima de valores e propriedades computadas, sendo possível encadear varios 
- Mixins: São tecnicas de reuso baseadas em composição, mesclagem do que está dentro do mixins com o componente, sempre que o componente sempre tem preferencias sobre o mixins

## Project setup

- **[App.vue](https://github.com/TheJessicaBohn/VueJS/blob/master/filtros/filtros-mixins-exercicios/src/App.vue)** cuida dos filtros junto com **[main.js](https://github.com/TheJessicaBohn/VueJS/blob/master/filtros/filtros-mixins-exercicios/main.js)**
- **[Frutas.vue](https://github.com/TheJessicaBohn/VueJS/blob/master/filtros/filtros-mixins-exercicios/src/Frutas.vue)**
##Dicionário
-`.split('')` pega cada um dos caracteres da string e coloca dentro de um array 
-`arr.splice(3,0,'.')` adiciona na terceira posição, não remove nenhum elemento e coloca um ponto
-`| cpf`  aplicação de filtro
-`${valor}`.split... comtem o acento grave antes, isso faz com que tudo que estiver dentro do {{}} seja string
-`this.frutas.push(this.fruta)` adiciona uma nova fruta vindo de fruta para fruta
-`this.fruta = ''` limpa fruta