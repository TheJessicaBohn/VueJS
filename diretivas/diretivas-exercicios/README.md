# diretivas-exercicios

## Dicionério
- anatomia da diretiva personalizada `<p v-teste :argumento.modificador1.modificador2.modificador3 = "'valor'"></p>`
- `v-text="'a'"` espera uma string
- `v-html="'a'"`  interpreta a tag `<strong></strong>`
- em main.js pode-se criar uma diretiva personalizada com `Vue.directive('destaque',{})`
- `directives: {}` cria uma diretiva localno caso de App.vue

## Gatilhos (Hooks)
	- `el` é o elemento onde a diretiva está interligada e  é o unico que deve ser alterado, enquanto os outros devem ser tratados como somene leitura e nunca modifica-los;
	- `binding`,é o parametro da configuração da diretiva(valor da diretiva, argumento, modificadores)
	- e o `vnode` é um nó virtual
	- `oldVnode` é o nó virtual antigo
- `bind(el, binding, vnode)` -> Quando a diretiva  é interligada com o elemento;
- `inserted(el, binding, vnode)`-> Elemento inserido no nó pai;
- `update(el, binding, vnode, oldVnode)` -> É garantido que o componente atual é atualizado (antes dos filhos), porém não os nós filhos
- `componentUpdated (el, binding, vnode, oldVnode)` -> Quando o componente é atualizado (depois dos filhos)
- `unbind(el, binding, vnode)`-> Quando a diretiva foi desvinculada do elemento
