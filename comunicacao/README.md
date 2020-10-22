## comunicacao

### Configuração do projeto
- `npm i` instalção doas depedencias dos pacotes
- `npm run serve` executar o programa, lembrando que ele fica na porta http://localhost:8080/

### Pastas/código
** comunicacao/src**
- **[App.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/comunicacao/src/App.vue)** controlador principal dos outros componentes
** comunicacao/src/components**
- **[Usuario.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/comunicacao/src/Usuario.vue)** é dono dos outros dois componentes a seguir, sendo ele referenciado em **App.vue**
- **[UsuarioEditar.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/comunicacao/src/UsuarioEditar.vue)** 
- **[UsuarioInfo.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/comunicacao/src/UsuarioInfo.vue)** trabalha com o uso da propriedade chamada props, que recebe p valor vindo de Usuario.vue

### Dicionário
- `props`
- `split('')` quebra a palavra em letras
- `reverse()` troca a ordem do array
- `join('')` junta novamente as palavras
- ``
### Observações
- Cuidado com nomes nos casos dos componentes, pois o vue é case sensitive nesse caso e não irá funcionar corretamente
- `nome: String` variaveis tipadas deixam bem mais clara qual o tipo de erro que o compilador reclama