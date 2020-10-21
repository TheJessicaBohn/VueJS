## Componentização

- **[revisao.html](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes/revisao.html)** é um contador, que apresenta o uso de componentes declarados globalmente e duplicados, por meio de tag personaizada
- **[componente-registro.html](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes/componente-registro.html)** apresenta o uso de registro local na componentização

### Projetos:
####componentes/componente-intro/src
- **[App.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes/componente-intro/src/App.vue)**
	- com o comando  `vue create componente-intro` e selecionando o default vamos criar um novo projeto
	- entre na pasta criada `cd componente-intro` , e rode o programa `$ npm run serve`
	- em componente-intro na pasta src/, serão apagadas a as pastas assets e components, e apagar o código dentro App.vue
	- e com o `vue` + TAB, ele já cria uma estrutura igual a do scaffold
	- Além disso posso controlar a quantide de componentes do Contador.vue
- **[Contador.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes/componente-intro/src/Contador.vue)**	ele apresenta dois metodos de adicionar e subtrair 
	- é importante registrar esse componente de forma global então é preciso entrar em `main.js` adicionar uma linha `import Contador from './Contador.vue'`
- **[Contadores.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes/componente-intro/src/Contadores.vue)**	importo a classe Contadores.vue dentro do export default, para utilizar como componente local e Contadores como global
####componentes/componente-desafio/src
- entre na pasta pelo comando `cd componente-desafio` 
- e baixe as dependencias pelo comando `npm i`
- **[App.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes/componente-desafio/src/App.vue)** A ideia desse desafio é quebrar o App.vue em varios componentes separados.
- **[Carousel.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes/componente-desafio/src/widgets/Carousel.vue)** trata a rolagem das imagens
- **[Footer.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes/componente-desafio/src/components/Footer.vue)** trata o componente de rodapé
- **[Menu.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes/componente-desafio/src/components/Menu.vue)** menu da barra lateral
- **[Toolbar.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/componentes/componente-desafio/src/components/Toolbar.vue)** titulo acima das fotos
### Dicionario:
- `@/`acessar caminho absoluto
- `../` acessar caminho relativo
- ` scoped` utilizado dentro de `<style scoped>` faz com que apenas aplique o estilo para a classe onde está o escopo definido, prestar atenção em relação ao que os pais passam para os filhos em uma geração, mas os filhos não passam para os pais

