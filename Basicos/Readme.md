### Códigos:
#### primeiraAplicacao
- **primeiroProjeto-v1.html:** faz com que o html utilize o atributo titulo dentro do <script> do Vue como padrão e seja o mostrado na pagina.
- **primeiroProjeto-v2.html:** faz com que o html utilize o que recebe do <input> como titulo, por meio de um evento do Vue.
####dom
- **template-v1.html:**faz com que o html utilize o atributo titulo dentro do <script> do Vue como padrão e seja o mostrado na pagina.
- **template-v2.html:**faz com que o html utilize o está dentro do `{{ }}` como saudacao, por meio de um return.
- **template-v3.html:**faz com que o html utilize o está dentro do `{{ }}` como saudacao, por meio de um return this.titulo, onde a saudacao acessa o titulo
- **template-v4.html:**Adiciona um link na pagina html por meio de uma diretiva v-bind.



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
- `v-on:input="alterarTitulo"` nesse caso é desejado tratar os eventos do tipo input, então é utilizada essa diretiva
- `v-bind:href="link"` temos a diretiva que aponta para o link dentro do Vue que queremos acessar, sendo uma propriedade do html

### :bookmark_tabs: Termos
- **Diretivas :** são propriedades interpretadas pelo Vue, as mesmas podem ser criadas ou pode-se utilizar as já disponibilizadas pelo framework.


