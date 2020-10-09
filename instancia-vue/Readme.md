## Entendendo a instancia Vue
**Manipular a dom é muito mais lento que trabalhar diretamente no JavaScript além disso consegue-se avaliar códigos detectar a diferença de forma muito mais rápida**
**Se caso existir uma lista com muitos elementos, mas apenas um sofre alteração, não faz sentido remover a lista inteira, e renderizar uma nova lista com todos os elementos novamente**
**Por isso o Vue faz isso de forma cirúrgica, e otimizada, monitorando as mudanças, funções e eventos, atualizando assim a dom quando for necessário**
**Sendo feita por uma dom virtual, que é uma especie de buffer que guarda as mudanças para serem aplicadas depois.**

### Ciclo de vida do Vue JS:
- Disponivel em: https://br.vuejs.org/v2/guide/instance.html
![Alt text](https://github.com/TheJessicaBohn/VueJS/blob/master/imagens/lifecycle.png)

- **[mult-instancia-vue.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/mult-instancia-vue.html)** mostra como podemos tratar duas instancias simultaneas, porém podendo ver que uma instancia não pode acessar a outra
- **[instancia-vue-externa.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/instancia-vue-externa.html)** Acessando externamente uma instancia vue,onde das instancias do exercicio anterior passa a se acessar ou mwsmo passar por uma modificação pelo java script puro como é o caso do setTimeout
- **[instancia-vue-dados-gerenciados.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/instancia-vue-dados-gerenciados.html)** gerenciamento de dados e métodos do vuejs, mostra no console que a novaInfo, por não estar dentro do escopo do vue, não é reativa
- **[meu-vue.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/meu-vue.html)** apresenta a construção de um mini framework, e como é o funcionamento reativo do get e set pelo vue, além da interpolação
- **[instancia-vue-el-data.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/instancia-vue-el-data.html)** apenas foca no funcinamento do console no próprio console da pagina
- **[instancia-vue-refs.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/instancia-vue-refs.html)** apresentando $refs e uso de templates
- **[montando-instancia-vue.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/montando-instancia-vue.html)** apresenta o template montado dentro do script, porém lembrando que ele deve ter um unico elemento como uma `<div></div>`por exemplo, e dar um `.appendChild(vm.$el)`
- **[componente-vue.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/componente-vue.html)** uso de componente dentro de uma `<div></div>` no html, apontando pra um template no script, e o funcionamento de um Vue.component, que é diferente de um new Vue
- **[instancia-vue-ciclo-vida.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/instancia-vue/instancia-vue-ciclo-vida.html)** apresenta todos os métodos do ciclo de vida do Vue, note que eles aparecem diretamente na instância, e não dentro de `methods` esses métodos são os mesmos que aparecem na imagem do clico de vida:
	- `beforeCreate()` no console pode-se ver quando ela aparece
	- `created()`
	- `beforeMount()`
	- `mounted()`
	**Nesse caso os métodos acima são chamados apenas uma unica vez na criação da instância
	- `beforeUpdate()` sempre chamada antes de uma atualização
	- `update()` sempre chamada durante uma atualização
	- `beforeDestroy()`
	- `destroy()`, depois que o titulo é alterado e clica-se no destruir, o titulo não pode ser mais modificado
	
### Dicionário:
- `(match,$1)` representa o grupo de captura do regex
- `.appendChild(vm.$el)`
- `beforeCreate()` Invoca sincronicamente logo após a instância ser inicializada, antes da observação de dados e configuração de eventos e observadores.
- `beforeDestroy()`
- `beforeMount()`
- `beforeUpdate()`
- `const` serve para acessar o Vue externamente
- `created()`
- `$destroy()` ele chama os métodos do destroy dentro do ciclo de vida do Vue
- `$el` contem os elementos da dom obtidos atravez de `document.querySelector`
- `eval($1)` avalia a sentença a partir do `regex` capturado
- `get: () =>` vai servir de proxy para a atividade meu-vue, lendo a variável
- `innerHTML- ` serve para a manipulação do HTML
- `$mount()` monta a instância do vue
- `mounted()`
- `$refs` referencia externa a uma instância
- `regex`  utiliza de  `/\{\{([\s\w+-/*]*)\}}/g` para fazer captura de expressões, e caracteres especias o que está dentro `[]` pode ser modificado e atribuidos novos simbolos matematicos ou espaços e caracteres especias, sen do `g` que é de forma global
- `set: value => ` altera a variável que veio do get
- `trim()` retira os espaços em branco das pontas
- `Vue.component('comp',{})` serve para registrar um componente global dentro do Vue
