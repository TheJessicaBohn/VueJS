### :scroll: Pastas/Códigos:
#### :open_file_folder: condicoes-e-listas
- **[condicionais-v1.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/condicoes-e-listas/condicionais-v1.html)** apresenta o uso do `v-if/ v-else` 
- **[condicionais-v2.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/condicoes-e-listas/condicionais-v2.html)** apresenta o uso do `v-else-if`
- **[condicionais-v3.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/condicoes-e-listas/condicionais-v3.html)** coloca-se o `v-if`, sendo adicionado ums template
- **[condicionais-v4.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/condicoes-e-listas/condicionais-v4.html)** apresenta o `v-show`
- **[listas-v1.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/condicoes-e-listas/listas-v1.html)** apresenta a diretiva `v-for`
- **[listas-v2.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/condicoes-e-listas/listas-v2.html)** apresenta a utilização de indices
- **[listas-v3.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/condicoes-e-listas/listas-v3.html)** apresenta a utilização de `v-for` com `<template>`
- **[listas-v4.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/condicoes-e-listas/listas-v4.html)** apresenta a utilização de `v-for` para iteração de objetos, num span
- **[listas-v5.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/condicoes-e-listas/listas-v5.html)** apresenta a utilização de iteração em uma lista de números
- **[listas-v5.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/condicoes-e-listas/listas-v5.html)** apresenta o `key` e nesse trecho  `@click="cores.push('branca')"` gera uma proxy para monitorar as mudanças na lista, pois são referentes a memoria
#### :open_file_folder: condicoes-e-listas/desafio-05
- **[app.js:](https://github.com/TheJessicaBohn/VueJS/blob/master/condicoes-e-listas/desafio-05/app.js)** faz a parte do script do index.html
- **[index.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/condicoes-e-listas/desafio-05/index.html)** desafio com as solicitações na própria pagina.
### :book: Dicionário
- `key` da uma dica para o vue de quais itens foram adicionados, ou mudados de ordem pra ser novamente renderizado na tela
- `<template>` fuinciona como uma `<div>` mas não teem nenhuma tag dentro do html, quando analisado no console do F12 ele retira o elemento da pagina, quando adicionado a uma diretiva condicional, geralmente usada por questões de segurança quan por exemplo um administrador não está logado
- `v-for` laço de repetição
- `v-if`/`v-else` exemplo de condicional, que quando usada dentro de uma tag, a linha em quesão só aparece se a condição for atendida, caso o if não seja atendido pode-se colocar um `v-else` na linha que se deseja a excessão
- `v-else-if` são os casos intermediários entre o `v-if`e o `v-else`, e o `v-else` só entra caso nenhuma das opções anteriores seja satisfeita a lógica.
- `v-show` exibe ou esconde determinados elementos do html, mas não da dom no console do F12, como `v-if` no `<template>`, isso consome menos recurso de renderização.

Termos
- **Indices:**  Quando trabalhamos com indices sempre temos a seguinte organização (nome,indice)
### :credit_card: Créditos
- Lembrando que os códigos são referentes ao curso  https://www.udemy.com/course/vue-js-completo, e essas são atividades desenvolvidas nele.



