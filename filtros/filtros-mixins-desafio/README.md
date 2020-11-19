# filtros-mixins-desafio
- podemos ver nesse desafio que um filtro pode ser substituido por uma propriedade computaa que terá uma performance melhor
## Pasta/código
- **[App.vue](https://github.com/TheJessicaBohn/VueJS/blob/master/filtros/filtros-mixins-desafio/src/App.vue)** contem exemplo de filtro e sua interpolação
-**[main.js](https://github.com/TheJessicaBohn/VueJS/blob/master/filtros/filtros-mixins-desafio/src/main.js)** contém um filtro que conta a quantidade de caracteres das palavras
-**[fraseMixin.js](https://github.com/TheJessicaBohn/VueJS/blob/master/filtros/filtros-mixins-desafio/src/fraseMixin.js)** é um exemplo de mixin com propriedade computada

## Dicionário
- `(/\s/g, ',')` g pega todas as referencias do que esta entre //, e subistituirá pelo que está dentro dos parenteses
- `map()` mapeia todas os elementos de aconrdo com a função passada
- **p  => `${p} (${p.length})`** função callback que é lida uma palavra, e retorna a mesma palavra + o tamanho dela