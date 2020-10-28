# componente-avancado

## Configurando o projeto
- `npm i` para instalar as dependencias
- `npm run serve` para executar o projeto
- `npm audit fix` para corrigir as vunerabilidades

## pastas/código
**no caso desse projeto pode-se ver que o estilo pode ser definido dentro de Citacao.vue ou Citacoes.vue**
- **[index.html](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes-avancados/citacoes/public/index.html)** possui a referenciação de uma fonte
- **[estilo.css](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes-avancados/citacoes/estilo.css)** ele foi referenciado diretamente no main.js sendo assim utilizados por todos os componentes
- **[App.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes-avancados/componente-intro/src/App.vue)** pai dos arquivos dentro de components
- **[Citacoes.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes-avancados/citacoes/src/components/Citacoes.vue)** trata os botões e textos onde aparecem as citações, sendo ele o componente dinamico
- **[Citacao.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes-avancados/citacoes/src/components/Citacao.vue)**  trata por slots do que Citacoes.vue vai receber
- **[.eslintrc.js](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes-avancados/citacoes/src/.eslintrc.js)** se caso o vue der erro no console log, esse arquivo desabilita a rule no-console
## Dícionário
- `<keep-alive>`faz com que o componente pare de ser  destruido e criado novamente, fazendo assim sempre retornar sempre para o componente anterior.
- `slot` passa de forma dinamica o que será exibido dentro de determinado componente, como por exemplo os H's(h1, h2, h3, etc), ou paragrafos <p>, sem ter que fiar declarando o tipo, utilizando-se apenas de nomes, além disso é possivel estiliza-lo pelo style apenas com o nome do slot

## Observações
- O vue renderiza a partir de determinada variaveis, componentes de forma dinamica, ver em export default em **App.vue**
