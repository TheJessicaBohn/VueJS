### Códigos:
#### primeiraAplicacao
- **[primeiroProjeto-v1.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/Basicos/primeiraAplicacao/primeiroProjeto-v1.html)** faz com que o html utilize o atributo titulo dentro do <script> do Vue como padrão e seja o mostrado na pagina.
- **[primeiroProjeto-v2.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/Basicos/primeiraAplicacao/primeiroProjeto-v2.html)** faz com que o html utilize o que recebe do <input> como titulo, por meio de um evento do Vue.</br>
#### dom
- **[template-v1.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/Basicos/dom/template-v1.html)** faz com que o html utilize o atributo titulo dentro do <script> do Vue como padrão e seja o mostrado na pagina.
- **[template-v1.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/Basicos/dom/template-v1.html)** faz com que o html utilize o atributo titulo dentro do <script> do Vue como padrão e seja o mostrado na pagina.
- **[template-v2.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/Basicos/dom/template-v2.html)** faz com que o html utilize o está dentro do `{{ }}` como saudacao, por meio de um return.
- **[template-v3.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/Basicos/dom/template-v3.html)** faz com que o html utilize o está dentro do `{{ }}` como saudacao, por meio de um return this.titulo, onde a saudacao acessa o titulo
- **[template-v4.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/Basicos/dom/template-v4.html)** Adiciona um link na pagina html por meio de uma diretiva v-bind.
- **[template-v5.html:](https://github.com/TheJessicaBohn/VueJS/blob/master/Basicos/dom/template-v5.html)** Adiciona a diretiva v-html.


### :book: Dicionário
- `=` recebe
- `()` função
- `{}` objeto
- `{{}}` interpolado do Vue para o html, porém é sempre interpretado como string
- `console.log(this)`representa a instanciado Vue, e mostra as informações do console no navegador
- `data:`dados, não se pode ter uma função e um dado com exatamente o mesmo nome.
- `el:` controle de elementos
- `event` evento
- `methods{}:` pode se passar metodos ou eventos do html
- `return''` para se mostrar o return no html utiliza-se {{ saudacao() }}, por exemplo
- `this.` acessar uma instancia
- `target.value` atribui um valor a um atributo ou variavél
- `v-bind:href="link"` temos a diretiva que aponta para o link dentro do Vue que queremos acessar, sendo uma propriedade do html
- `v-html` interpreta o html diretamente
- `v-on:input="alterarTitulo"` nesse caso é desejado tratar os eventos do tipo input, então é utilizada essa diretiva
- `v-once` é uma diretiva que solicita que o valor seja lido apenas uma vez não importa quantas vezes o valor é trocado como na linha `this.titulo = 'Teste'`, além disso ajuda a economizar recursos


### :bookmark_tabs: Termos
- **Diretivas :** são propriedades interpretadas pelo Vue, as mesmas podem ser criadas ou pode-se utilizar as já disponibilizadas pelo framework.

### :credit_card: Créditos
- Lembrando que os códigos são referentes ao curso  https://www.udemy.com/course/vue-js-completo, e essas são atividades desenvolvidas nele.
