## comunicacao

### Configuração do projeto
- `npm i` instalção doas depedencias dos pacotes
- `npm run serve` executar o programa, lembrando que ele fica na porta http://localhost:8080/

### Pasta/Código
** comunicacao/src**
- **[App.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/comunicacao/src/App.vue)** controlador principal dos outros componentes
** comunicacao/src/components**
- **[barramento.js](https://github.com/TheJessicaBohn/VueJS/tree/master/comunicacao/src/barramento.js)** trabalha com a metodoslogia de **Event Bus**, que é um barramento para evitar muitas hierarquias
- **[Usuario.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/comunicacao/src/Usuario.vue)** é dono dos outros dois componentes a seguir, sendo ele o componente pai de **UsuarioEditar** e **UsuarioInfo**, sendo filho e portanto referenciado em **App.vue**
- **[UsuarioEditar.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/comunicacao/src/UsuarioEditar.vue)** trabalha com o uso da propriedade chamada props, que recebe p valor vindo de Usuario.vue, e faz a função de mudar idade
- **[UsuarioInfo.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/comunicacao/src/UsuarioInfo.vue)** trabalha com o uso da propriedade chamada props, que recebe p valor vindo de Usuario.vue, e faz a função de inversão do nome

### Dicionário
- `$emit` dispara um evento personalizado no vue
- `$event` verifica o valor do `$emit` fazendo assim com que o componente pai consiga saber qual ação o filho pede pra tomar
- `join('')` junta novamente as palavras
- `props` é passado passa as informações do componente pai para o componente filho, a partir das propriedades
- `split('')` quebra a palavra em letras
- `reverse()` troca a ordem do array

### Observações
- Cuidado com nomes nos casos dos componentes, pois o vue é case sensitive nesse caso e não irá funcionar corretamente
- `nome: String` variaveis tipadas deixam bem mais clara qual o tipo de erro que o compilador reclama
- Quando um componente filho faz aguma mudança, é necessário que um evento seja emitido para ser tratado no componente pai e receba um retorno do mesmo.
- função callback que é uma chamada do pai ao filho onde o pai atualiza os dados do filho ver a função **reiniciarFn** 
- A construção da aplicação pode ser feita por uma arvore de nós onde cada nó é um componente, sendo uma hierarquia onde acima é  pai e abaixo é filho.
	Sendo que a sua comunicação é direta e se dá: props  de pai para filho, e de filho para pai existe o evento personalizado (ex: $emit), porém comunicação entre irmãos não é direta, tendo dessa forma o pai como intermediário, e as modificações requeridas por um nó filho a um irmão também seria aplicada a ele mesmo